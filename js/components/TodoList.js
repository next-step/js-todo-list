import { todoClassName } from '../utils/constant.js'

export default function TodoList({
  data,
  $target,
  onToggleTodo,
  onDeleteTodo,
  onChangeTodo,
}) {
  if (!(this instanceof TodoList)) {
    throw new Error('TodoList must be called with new')
  }

  if (!$target) {
    throw new Error('$target must be injected')
  }

  const todoItemTemplate = (todoItem, index) => `
    <li data-id="${index}" class="${todoItem.isCompleted ? 'completed' : ''}">
      <div class="view">
        <input class="toggle" type="checkbox" ${
          todoItem.isCompleted ? 'checked' : ''
        }>
        <label class="label">${todoItem.content}</label>
        <button class="destroy"></button>
      </div>
      <input class="edit" value="${todoItem.content}">
    </li>`

  const onClickHandler = (e) => {
    if (
      e.target.nodeName === 'INPUT' &&
      e.target.classList.contains(todoClassName.TOGGLE)
    ) {
      const id = e.target.closest('li').dataset.id
      onToggleTodo(id)
    }

    if (
      e.target.nodeName === 'BUTTON' &&
      e.target.classList.contains(todoClassName.DESTROY)
    ) {
      const id = e.target.closest('li').dataset.id
      onDeleteTodo(id)
    }
  }

  const onKeydownHandler = (e) => {
    if (
      e.target.nodeName === 'INPUT' &&
      e.target.classList.contains(todoClassName.EDIT)
    ) {
      const li = e.target.closest('li')

      if (e.key === 'Enter' && e.target.value) {
        const text = e.target.value
        const id = li.dataset.id

        li.querySelector(`.${todoClassName.LABEL}`).innerHTML = text
        li.classList.remove(todoClassName.EDITING)

        onChangeTodo(text, id)
      } else if (e.key === 'Escape') {
        li.classList.remove(todoClassName.EDITING)
      }
    }
  }

  const onDbClickHandler = (e) => {
    if (
      e.target.nodeName === 'LABEL' &&
      e.target.classList.contains(todoClassName.LABEL)
    ) {
      const li = e.target.closest('li')

      li.classList.add(todoClassName.EDITING)
      li.querySelector(`.${todoClassName.EDIT}`).focus()
    }
  }

  this.setState = function (nextData) {
    this.todos = nextData
    this.render()
  }

  this.render = function () {
    this.$target.innerHTML = this.todos.map(todoItemTemplate).join('')
  }

  this.bindEvents = function () {
    this.$target.addEventListener('click', onClickHandler)
    this.$target.addEventListener('dblclick', onDbClickHandler)
    this.$target.addEventListener('keydown', onKeydownHandler)
  }

  this.init = function () {
    this.todos = data
    this.$target = $target
    this.bindEvents()
  }

  this.init()
  this.render()
}
