

function createStarTrails() {
  const canvas = document.createElement('canvas');
  canvas.style.cssText = `position:fixed;top:0;left:0;pointer-events:none;z-index:-1;`;
  document.body.prepend(canvas);

  // 粒子运动算法（精简版）
  const ctx = canvas.getContext('2d');
  updateCanvasSize();

  const stars = Array(50).fill().map(() => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 3,
    speed: Math.random() * 0.5 
  }));

  function updateCanvasSize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function animate() {
    ctx.fillStyle = 'rgba(25, 25, 55, 0.1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    stars.forEach(star => {
      star.y += star.speed;
      if(star.y > canvas.height) star.y = 0;
      ctx.beginPath();
      ctx.fillStyle = `hsl(${Math.random()*360}, 70%, 70%)`;
      ctx.arc(star.x, star.y, star.size, 0, Math.PI*2);
      ctx.fill();
    });
    requestAnimationFrame(animate);
  }

  // 监听窗口大小变化事件
  window.addEventListener('resize', () => {
    updateCanvasSize();
    // 重新计算粒子的位置（简单处理，可根据需要优化）
    stars.forEach(star => {
      star.x = Math.random() * canvas.width;
      star.y = Math.random() * canvas.height;
    });
  });

  animate();
}
createStarTrails();


