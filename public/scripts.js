const newTodoInput = document.getElementById('newTodo')
const createNewTodoForm = document.getElementById('createNewTodo')
const todoListUl = document.getElementById('todoList')

const storedTodos = JSON.parse(localStorage.getItem('insper@todos/html'))

{
// let todos
// if(storedTodos){
//   todos = storedTodos
// }
// else {
//   todos = []
// }
}

const todos = storedTodos ? storedTodos : []

function renderList(todos){

  todos.map(function(todo) {
    renderLi(todo)
  })
}

function renderLi(todo){
  const li = document.createElement('li')

  const span = document.createElement('span')
  const completeButton = document.createElement('button')
  const removeButton = document.createElement('button')

  span.textContent = todo.title
  completeButton.textContent = 'concluir tarefa'
  removeButton.textContent = 'remover tarefa'

  // function teste(){
  //   handleDeleteTodo(todo)
  // }
  removeButton.onclick = () => handleDeleteTodo(todo)

  li.append(span)
  li.append(completeButton)
  li.append(removeButton)

  li.dataset.title = todo.title

  todoListUl.append(li)
}

function handleCreateNewTodo(event){
  event.preventDefault()

  // if(!newTodoInput.value){
    // return
  // }

  if(newTodoInput.value === ''){
    return
  }

  const todo = {
    title: newTodoInput.value,
    isDone: false
  }

  renderLi(todo)

  todos.push(todo)

  localStorage.setItem('insper@todos/html', JSON.stringify(todos))

  newTodoInput.value = ''
}

function handleDeleteTodo(todo){
  // const updatedTodos = todos.filter(function(todoToFind){
  //   if(todoToFind.title !== todo.title){
  //     return true
  //   }
  // })
  const todoIndex = todos.findIndex(function(todoToFind){
    if(todoToFind.title === todo.title){
      return todoToFind
    }
  })

  todos.splice(todoIndex, 1)

  todoListLi = todoListUl.querySelector(`[data-title="${todo.title}"]`)

  todoListUl.removeChild(todoListLi)

  localStorage.setItem('insper@todos/html', JSON.stringify(todos))
}

createNewTodoForm.onsubmit = handleCreateNewTodo

// console.log(newTodoInput)
// console.log(createNewTodoForm)

renderList(todos)