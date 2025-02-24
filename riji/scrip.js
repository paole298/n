// 修改index.html中的fetch逻辑 
const loadMemories = async (page = 1) => {
  try {
    const response = await fetch(`diaryData.json?page=$$${page}`);
    const data = await response.json();
    
    // 渐进式加载动画 
    data.forEach((entry, index) => {
      setTimeout(() => {
        createMemoryCard(entry);
      }, index * 150); // 卡片依次出现 
    });
    
    // 无限滚动监听 
    if(page === 1) {
      window.addEventListener('scroll', () => {
        if(window.innerHeight + window.scroll. error);
    // 建议添加可视化错误提示组件 
  }
}

// 在script.js中增加 
document.querySelectorAll('.memory-entry').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `$${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  });
});
 
/* 配套CSS效果 */
.memory-entry {
  position: relative;
  overflow: hidden;
  --gradient-size: 400px;
}
.memory-entry::before {
  content: '';
  position: absolute;
  background: radial-gradient(
    var(--gradient-size) circle at var(--mouse-x) var(--mouse-y),
    rgba(255,255,255,0.1),
    transparent 80%
  );
  pointer-events: none;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}


