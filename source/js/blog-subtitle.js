(() => {
  const subtitle = document.querySelector('#site-subtitle #subtitle');
  if (!subtitle) return;

  const lines = [
    '想做的事，先从能做的一小步开始。',
    '走得慢也没关系，按自己的步子往前走。',
    '今天弄懂的一件小事，也值得记下来。',
    '给好奇心留点时间，看看它会带你去哪儿。',
    '允许自己生疏，熟练是一次次练出来的。',
    '走过的弯路，也能帮你认清方向。',
    '遇到难处，就把眼前的事做小一点。',
    '把零散的想法写下来，下一步就容易看清了。',
    '累了就歇一会儿，明天还可以接着走。',
    '回头看看，那些小步已经走出了很长一段路。',
  ];

  subtitle.textContent = lines[Math.floor(Math.random() * lines.length)];
})();
