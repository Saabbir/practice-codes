// Fetch existing todos from localStorage
const getSavedTodos = function () {
    const todosJSON = localStorage.getItem('todos')

    if (todosJSON !== null) {
        return JSON.parse(todosJSON)
    } else {
        return []
    }
}

// Save todos to localStorage
const saveTodos = function (todos) {
    localStorage.setItem('todos', JSON.stringify(todos))
}

// Remove individual todo from todos array
const removeTodo = function (id) {
    const todoIndex = todos.findIndex(function (todo) {
        return todo.id === id
    })
    
    if (todoIndex > -1) {
        todos.splice(todoIndex, 1)
    }
}

// Toggle todo completed property
const toggleTodoCompletedProperty = function (id) {
    const todo = todos.find(function (todo) {
        return todo.id === id
    })

    if (todo !== undefined) {
        todo.completed = !todo.completed
    }
}

// Render application todos based on filters
const renderTodos = function (todos, filters) {
    let filteredTodos = todos.filter(function (todo) {
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    const incompleteTodos = filteredTodos.filter(function (todo) {
        return !todo.completed
    })

    if (filters.hideCompleted) {
        filteredTodos = incompleteTodos
    }

    document.querySelector('#todo-list').innerHTML = ''
    document.querySelector('#todo-list').appendChild(generateSummaryDOM(incompleteTodos))

    filteredTodos.forEach(function (todo) {
        document.querySelector('#todo-list').appendChild(generateTodoDOM(todo))
    })
}

// Get the DOM elements for an individual todo
const generateTodoDOM = function (todo) {
    const todoEl = document.createElement('li')

    // Setup and append todo checkbox
    const todoCheckboxEl  = document.createElement('input')
    todoCheckboxEl.setAttribute('type', 'checkbox')
    todoCheckboxEl.checked = todo.completed
    todoEl.appendChild(todoCheckboxEl)

    // Add event listener to the checkbox
    todoCheckboxEl.addEventListener('change', function () {
        toggleTodoCompletedProperty(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })

    // Setup and append todo text
    const todoTextEl = document.createElement('span')
    if (todo.text.length > 0) {
        todoTextEl.textContent = todo.text
    } else {
        todoTextEl.textContent = 'Unnamed todo'
    }
    todoEl.appendChild(todoTextEl)

    // Setup and append todo button
    const todoButtonEl = document.createElement('button')
    todoButtonEl.textContent = 'X'
    todoButtonEl.setAttribute('class', 'button small')
    todoEl.appendChild(todoButtonEl)

    // Add event listener to the button
    todoButtonEl.addEventListener('click', function (e) {
        removeTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })

    return todoEl
}

// Get the DOM elements for list summary
const generateSummaryDOM = function (incompleteTodos) {
    const summaryEl = document.createElement('h2')
    summaryEl.textContent = `You have ${incompleteTodos.length} todos left`

    return summaryEl
}