const todos = [
    {
        name: 'Complete js-bootcamp',
        completed: false
    },
    {
        name: 'Code along the way',
        completed: true
    },
    {
        name: 'Build app along the way',
        completed: false
    },
    {
        name: 'Finish the course quickly',
        completed: false
    }
]

console.log(todos)

let deleteTodo = function (todosArray, todoName) {

    const todoIndex = todosArray.findIndex( function(todo) {
        return todo.name.toLowerCase() === todoName.toLowerCase()
    })

    todosArray.splice(todoIndex, 1)
}

deleteTodo(todos, 'fiish the course quickly')

console.log(todos)