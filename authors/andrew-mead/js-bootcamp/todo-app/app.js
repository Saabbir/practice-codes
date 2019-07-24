const todos = getSavedTodos()

const filters = {
    searchText: '',
    hideCompleted: false
}

renderTodos(todos, filters)

document.querySelector('#search-todo').addEventListener('input', function(e) {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})

document.querySelector('#hide-completed').addEventListener('change', function (e) {
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
})

document.querySelector('#new-todo-form').addEventListener('submit', function(e) {
    e.preventDefault()
    todos.push({
        id: uuidv4(),
        text: e.target.elements.new_todo_input.value,
        completed: false
    })
    e.target.elements.new_todo_input.value = ''
    saveTodos(todos)
    renderTodos(todos, filters)
})