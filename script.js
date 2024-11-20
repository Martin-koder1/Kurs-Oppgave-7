const input = document.querySelector('#input');
const parent = document.querySelector('#div');

function addElement(event) {
  const newElement = document.createElement('p');
  newElement.textContent = input.value;

  if (event.key === "Enter") {
    console.log('Trykket enter');
    parent.appendChild(newElement)
  }
}

input.addEventListener('keyup', addElement);