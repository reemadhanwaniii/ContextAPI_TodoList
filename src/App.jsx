
import { useState } from 'react'
import './App.css'
import AddTodo from './Components/AddTodo/AddTodo'
import Todolist from './Components/TodoList/Todolist'
import TodoContext from './Context/TodoContext';

function App() {
 
  const [todos,setTodos] = useState([
    {id: 1,text: "todo1" ,isFinished: true},
    {id: 2,text: "todo2" ,isFinished: false}
  ]);


  return (
    <>
    <TodoContext.Provider value={{todos,setTodos}}>
      <AddTodo/>
      <Todolist/>
    </TodoContext.Provider>
    </>
  )
}

export default App
