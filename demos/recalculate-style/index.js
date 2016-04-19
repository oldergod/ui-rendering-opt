'use strict'; {
  const container = document.querySelector('.box-container');
  const button = document.querySelector('button');

  for (let i = 0; i < 3000; i++) {
    const div = document.createElement('div');
    div.classList.add('box');
    div.index = i;
    container.appendChild(div);
  }

  button.addEventListener('click', function() {
    document.body.classList.toggle('toggled');
  });
}
