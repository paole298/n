// 假设开始时间，可根据实际情况修改
const startDate = new Date('2025-02-05 00:00:00'); 

function updateTime() {
  const now = new Date();
  const timeDiff = now - startDate;

  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

  const timeSpan = document.getElementById('time-span');
  timeSpan.textContent = `${days}天 ${hours}时 ${minutes}分 ${seconds}秒`;
}

setInterval(updateTime, 1000);

// 动态跳转逻辑 
document.querySelectorAll('.function-button').forEach(button => {
  // 保持原有hover效果 
  button.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-2px)';
  });

  button.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0)';
  });

  // 点击跳转逻辑 
  button.addEventListener('click', function() {
    const target = this.dataset.link;

    // 转场动画 
    this.style.transform = 'scale(0.95)';
    setTimeout(() => {
      window.location.href = target;
    }, 200);
  });
});



// 新增获取并设置文字的函数
async function getAndSetHitokoto() {
  try {
    const response = await fetch('https://v1.hitokoto.cn/?encode=text');
    const text = await response.text();
    const topTextElement = document.querySelector('.top-text');
    topTextElement.textContent = text;
  } catch (error) {
    console.error('获取文字失败:', error);
  }
}

// 调用函数获取并设置文字
getAndSetHitokoto();
