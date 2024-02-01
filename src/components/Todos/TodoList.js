import Todo from './Todo'
import styles from './TodoList.module.css'

function TodoList({ todos, removeTodo, toggleTodo }) {
  return (
    <div className={styles.todoListContainer}>
      {todos.length > 0 ? (
        todos.map((todo) => (
          <Todo
            todo={todo}
            key={todo.id}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
          />
        ))
      ) : (
        <h2 className={styles.text}>no tasks</h2>
      )}
    </div>
  )
}

export default TodoList
