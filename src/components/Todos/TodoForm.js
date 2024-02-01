import { useState } from 'react'
import styles from './TodoForm.module.css'
import Button from '../UI/Button'

function TodoForm({ addTodo }) {
  const [text, setText] = useState('')
  function handleSubmit(event) {
    event.preventDefault()
    addTodo(text)
    setText('')
  }

  return (
    <div className={styles.formBox}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
          placeholder="Enter new todo"
        ></input>
        <Button type="submit" title='Submit'>Submit</Button>
      </form>
    </div>
  )
}

export default TodoForm
