function createParagraph() {
  var para = document.createElement('p');
  para.textContent = '¡Presionaste el Botón!';
  document.body.appendChild(para);
}

const buttons = document.querySelectorAll('button');

for(let i = 0; i < buttons.length ; i++) {
  buttons[i].addEventListener('click', createParagraph);
}