export default class widget {
  constructor() {
    this.validator = document.querySelector('#validator');
  }

  renderDom() {
    const form = document.createElement('form');
    const input = document.createElement('input');
    const button = document.createElement('button');
    const title = document.createElement('h3');
    const list = document.createElement('ul');
    const li = document.createElement('li');
    title.textContent = 'Check your credit card number';
    button.textContent = 'Click to Validate';
    button.type = 'button';
    input.type = 'text';
    input.placeholder = 'Credit card number';
    this.validator.appendChild(form);
    form.appendChild(title);
    form.appendChild(list);
    list.appendChild(li);
    for (let i = 0; i < 6; i += 1) {
      list.appendChild(li.cloneNode());
    }
    const cardsLi = document.querySelectorAll('li');
    cardsLi[0].classList.add('card', 'visa');
    cardsLi[1].classList.add('card', 'master-card');
    cardsLi[2].classList.add('card', 'american-express');
    cardsLi[3].classList.add('card', 'jcb');
    cardsLi[4].classList.add('card', 'maestro');
    cardsLi[5].classList.add('card', 'discover');
    cardsLi[6].classList.add('card', 'mir');
    form.appendChild(input);
    form.appendChild(button);
  }
}
