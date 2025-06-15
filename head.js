const template = document.createElement('template');
const source = document.getElementById('menu');
const toto = document.getElementById('toto');

template.innerHTML = `
  <h1>Hello, World!</h1>
  <p>And all who inhabit it</p>
`;

source.appendChild(template.content);

toto.load("./head.html");
