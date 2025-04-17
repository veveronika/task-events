export function createButton() {
  const button = document.createElement('button');
  button.textContent = 'Удали меня';
  button.addEventListener('click', function() {
    this.remove();
  });
  document.body.appendChild(button);
}

export function createArrList(arr) {
  const ul = document.createElement('ul');

  arr.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    li.addEventListener('mouseenter', function() {
      this.setAttribute('title', this.textContent);
    });
    ul.appendChild(li);
  });

  document.body.appendChild(ul);
}

export function createLink() {
  const link = document.createElement('a');
  link.href = 'https://tensor.ru/';
  link.textContent = 'tensor';

  link.addEventListener('click', function(e) {
    if (!this.dataset.clicked) {
      e.preventDefault();
      this.textContent += ` ${this.href}`;
      this.dataset.clicked = 'true';
    }

  });

  document.body.appendChild(link);
}

export function createList() {
  const ul = document.createElement('ul');
  const li = document.createElement('li');
  li.textContent = 'Пункт';
  ul.appendChild(li);

  const button = document.createElement('button');
  button.textContent = 'Добавить пункт';

  function handleLiClick() {
    this.textContent += '!';
  }

  ul.addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
      handleLiClick.call(e.target);
    }
  });

  button.addEventListener('click', function() {
    const newLi = document.createElement('li');
    newLi.textContent = 'Пункт';
    ul.appendChild(newLi);
  });

  document.body.appendChild(ul);
  document.body.appendChild(button);
}