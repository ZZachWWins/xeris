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
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ username, password: hashedPassword, role: 'user' });
  await user.save();
  return { statusCode: 200, body: JSON.stringify({ message: 'User created' }) };
};