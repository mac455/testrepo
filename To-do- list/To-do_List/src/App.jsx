import React,{useState} from 'react'
import TodoForm from './components/TodoForm'
import {v4 as uuidv4} from 'uuid'
uuidv4();

export default function App() {
  const[todos, setTodos] = useState([])

  const addTodo = (todo)  => {
    setTodos([...todos, {id:uuidv4(), task: todo, 
      completed:false, isEditing:false }])
  }
  return (
    <>
      <TodoForm addTodo={addTodo} tasks={todos}/>
    </>
  )
}
