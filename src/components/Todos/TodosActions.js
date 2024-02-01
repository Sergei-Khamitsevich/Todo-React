import { RiDeleteBin2Line } from 'react-icons/ri'
import { RiRefreshLine } from 'react-icons/ri'
import Button from '../UI/Button'

function TodoActions({ resetTodos, delCompletedTodo, todoComletedExist}) {
  return (
    <>
      <Button title="Reset" onClick={resetTodos}>
        <RiRefreshLine />
      </Button>
      <Button title="Delete completed todo" onClick={delCompletedTodo} disabled={!todoComletedExist}>
        <RiDeleteBin2Line />
      </Button>
    </>
  )
}

export default TodoActions
