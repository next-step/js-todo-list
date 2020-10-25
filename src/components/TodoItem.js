import { createElement as e } from '../utils.js';

export default class TodoItem {
  constructor(title) {
    this._$el = document.createElement('li');
    this._title = title;
    this.render(this._title);
    this.attachEventListener();
  }

  get $el() {
    return this._$el;
  }

  get title() {
    return this._title;
  }

  set title(value) {
    this._title = value;
  }

  attachEventListener() {
    this.$el.addEventListener('click', (e) => this.onClickHandler(e));
    this.$el.addEventListener('dblclick', (e) => this.onDoubleClickHandler(e));
    this.$el.addEventListener('keydown', (e) => this.onKeypressHandler(e));
  }

  onClickHandler({ target }) {
    const { className } = target;

    if (className === 'toggle') {
      this.$el.classList.toggle('completed');
      target.classList.toggle('checked');
    } else if (className === 'destroy') {
      this.$el.remove();
    }
  }

  onDoubleClickHandler({ target }) {
    const { className } = target;

    if (className === 'label') {
      this.$el.classList.add('editing');
    }
  }

  onKeypressHandler({ key, target }) {
    if (key === 'Escape') {
      target.value = this.title;
      this.$el.classList.remove('editing');
      return;
    }
    if (key === 'Enter') {
      this.onEnterKeypressHandler(target, target.value);
      this.$el.classList.remove('editing');
    }
  }

  onEnterKeypressHandler(target, value) {
    const $label = this.$el.querySelector('.label');
    $label.innerText = value;
    target.setAttribute('value', value);
    this.title = value;
  }

  render(title) {
    this.$el.appendChild(
      e(
        'div',
        { class: 'view' },
        e('input', { class: 'toggle', type: 'checkbox' }),
        e('label', { class: 'label' }, title),
        e('button', { class: 'destroy' })
      )
    );
    this.$el.appendChild(e('input', { class: 'edit', value: title }));
  }
}
