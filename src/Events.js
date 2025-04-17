export function createButton() {
    const button = document.createElement('button');
    button.textContent = 'Удали меня';
    button.addEventListener('click', () => {
        button.remove();
    });
    document.body.appendChild(button);
}

export function createArrList(arr) {
    const ul = document.createElement('ul');
    arr.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        li.addEventListener('mouseover', () => {
            li.title = li.textContent;
        });
        ul.appendChild(li);
    });
    document.body.appendChild(ul);
}

export function createLink() {
    const a = document.createElement('a');
    a.href = 'https://tensor.ru/';
    a.textContent = 'tensor';

    let clicked = false;

    a.addEventListener('click', (e) => {
        if (!clicked) {
            e.preventDefault();
            a.textContent += ' ' + a.href;
            clicked = true;
        }

    });

    document.body.appendChild(a);
}

export function createList() {
    const ul = document.createElement('ul');

    function createListItem(text = 'Пункт') {
        const li = document.createElement('li');
        li.textContent = text;
        li.addEventListener('click', () => {
            li.textContent += '!';
        });
        return li;
    }

    ul.appendChild(createListItem());

    const button = document.createElement('button');
    button.textContent = 'Добавить пункт';
    button.addEventListener('click', () => {
        ul.appendChild(createListItem());
    });

    document.body.appendChild(ul);
    document.body.appendChild(button);
}
