import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import TodoForm from './components/Todos/TodoForm'
import TodoList from './components/Todos/TodoList'
import TodoActions from './components/Todos/TodosActions'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])

  const handleAddTodo = (text) => {
    const newTodo = {
      isCompleted: false,
      text: text,
      id: uuidv4(),
    }
    setTodos([...todos, newTodo])
  }

  const handleRemoveTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const handleToggleTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo }
      })
    )
  }

  const handleResetTodos = () => {
    setTodos([])
  }

  const handleDelCompletedTodo = () => {
    setTodos(todos.filter((todo) => !todo.isCompleted))
  }

  const todoComletedCount = todos.filter((todo) => todo.isCompleted ).length

  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoForm addTodo={handleAddTodo} />
      {todos.length > 0 ? (
        <TodoActions
          todoComletedExist={!!todoComletedCount}
          todos={todos}
          resetTodos={handleResetTodos}
          delCompletedTodo={handleDelCompletedTodo}
        />
      ) : null}

      <TodoList
        todos={todos}
        removeTodo={handleRemoveTodo}
        toggleTodo={handleToggleTodo}
      />
      {todoComletedCount > 0 && <h2>{`You have completed ${todoComletedCount} todos`}</h2>}
    </div>
  )
}

export default App
