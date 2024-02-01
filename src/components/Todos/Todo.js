import { RiTodoFill } from 'react-icons/ri'
import { MdDelete } from 'react-icons/md'
import { ImCheckmark } from 'react-icons/im'
import styles from './Todo.module.css'

function Todo({ todo, removeTodo, toggleTodo }) {
  return (
    <div
      className={`${styles.todo} ${
        todo.isCompleted ? styles.completedTodo : ''
      } `}
    >
      <RiTodoFill className={styles.todoIcon} />
      <div className={styles.todoText}>{todo.text}</div>
      <MdDelete
        className={styles.deleteIcon}
        onClick={() => removeTodo(todo.id)}
      />
      <ImCheckmark
        className={styles.checkIcon}
        onClick={() => toggleTodo(todo.id)}
      />
    </div>
  )
}

export default Todo
