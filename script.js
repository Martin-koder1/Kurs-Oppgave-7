let input = document.querySelector('#TextBox');

input.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
      let newInput = document.createElement('p');
      newInput.textContent = 'Name Logged';
      parent.appendChild(newInput);
    }
  });