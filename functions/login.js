const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  role: { type: String, default: 'user' }
});
const User = mongoose.model('User', UserSchema);

exports.handler = async (event) => {
  const { username, password } = JSON.parse(event.body);
  const user = await User.findOne({ username });
  if (!user || !await bcrypt.compare(password, user.password)) {
    return { statusCode: 401, body: JSON.stringify({ error: 'Invalid credentials' }) };
  }
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Logged in', user: { id: user._id, username: user.username, role: user.role } })
  };
};