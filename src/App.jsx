
import { useState } from 'react'
import './App.css'
import AddTodo from './Components/AddTodo/AddTodo'
import Todolist from './Components/TodoList/Todolist'

function App() {
 
  const [todos,setTodos] = useState([
    {id: 1,text: "todo1" ,isFinished: true},
    {id: 2,text: "todo2" ,isFinished: false}
  ]);

  function addTodos(todoText) {
      let nextId = todos.length;
      setTodos([...todos,{id: nextId,text: todoText,isFinished: false}])
  }


  return (
    <>
     <AddTodo addTodos={addTodos}/>
     <Todolist todos={todos}/>
    </>
  )
}

export default App
