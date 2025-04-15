import React, { useEffect, useRef } from 'react';
import './App.css';

function StarryBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const stars = Array.from({ length: 50 }, () => ({
      x: Math.random() * (canvas?.width || window.innerWidth),
      y: Math.random() * (canvas?.height || window.innerHeight),
      radius: Math.random() * 1.5 + 0.5,
      alpha: Math.random() * 0.5 + 0.5,
    }));

    const getScaledPoints = (basePoints, width, height) => {
      return basePoints.map(([x, y]) => [(x / 1000) * width, (y / 800) * height]);
    };

    const constellations = [
      { points: getScaledPoints([[300, 200], [350, 200], [400, 200], [350, 250], [350, 300]], canvas?.width || window.innerWidth, canvas?.height || window.innerHeight), color: '#d4af37' },
      { points: getScaledPoints([[600, 400], [650, 350], [700, 350], [750, 400], [800, 450], [850, 500], [900, 550]], canvas?.width || window.innerWidth, canvas?.height || window.innerHeight), color: '#ffffff' },
    ];

    // Shooting stars array
    const shootingStars = [];
    const createShootingStar = () => {
      return {
        x: Math.random() * canvas.width, // Start anywhere horizontally
        y: Math.random() * canvas.height * 0.3, // Start in top 30% of canvas
        length: Math.random() * 50 + 30, // Tail length between 30-80px
        speedX: Math.random() * -3 - 2, // Move left and down (negative X, positive Y)
        speedY: Math.random() * 3 + 2,
        alpha: 1, // Start fully opaque
        life: Math.random() * 60 + 30, // Frames to live (30-90 frames)
      };
    };

    // Spawn shooting stars randomly
    const spawnShootingStar = () => {
      if (Math.random() < 0.02) { // ~2% chance per frame to spawn
        shootingStars.push(createShootingStar());
      }
    };

    const animate = () => {
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw regular stars
        stars.forEach((star) => {
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
          ctx.fill();
          star.alpha += Math.random() * 0.05 - 0.025;
          star.alpha = Math.max(0.5, Math.min(1, star.alpha));
        });

        // Draw constellations
        constellations.forEach((constellation) => {
          ctx.beginPath();
          ctx.strokeStyle = constellation.color;
          ctx.lineWidth = 1;
          constellation.points.forEach(([x, y], i) => (i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)));
          ctx.stroke();
        });

        // Spawn and update shooting stars
        spawnShootingStar();
        shootingStars.forEach((meteor, index) => {
          // Draw meteor with gradient tail
          const gradient = ctx.createLinearGradient(
            meteor.x, meteor.y,
            meteor.x + meteor.length * Math.cos(Math.atan2(meteor.speedY, meteor.speedX)),
            meteor.y + meteor.length * Math.sin(Math.atan2(meteor.speedY, meteor.speedX))
          );
          gradient.addColorStop(0, `rgba(212, 175, 55, ${meteor.alpha})`); // Gold head
          gradient.addColorStop(1, `rgba(255, 255, 255, 0)`); // Fade to transparent

          ctx.beginPath();
          ctx.moveTo(meteor.x, meteor.y);
          ctx.lineTo(
            meteor.x + meteor.length * Math.cos(Math.atan2(meteor.speedY, meteor.speedX)),
            meteor.y + meteor.length * Math.sin(Math.atan2(meteor.speedY, meteor.speedX))
          );
          ctx.strokeStyle = gradient;
          ctx.lineWidth = 2;
          ctx.stroke();

          // Update position and alpha
          meteor.x += meteor.speedX;
          meteor.y += meteor.speedY;
          meteor.life -= 1;
          meteor.alpha = meteor.life / 90; // Fade based on remaining life (max 90 frames)

          // Remove if off-screen or life depleted
          if (meteor.life <= 0 || meteor.x < 0 || meteor.y > canvas.height) {
            shootingStars.splice(index, 1);
          }
        });

        animationFrameId = requestAnimationFrame(animate);
      }
    };
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="starry-background" />;
}

export default StarryBackground;