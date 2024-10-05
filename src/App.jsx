
import './App.css'
import Todolist from './Components/TodoList/Todolist'

function App() {
 
  const todos = [
    {id: 1,text: "todo1" ,isFinished: true},
    {id: 2,text: "todo2" ,isFinished: false}
  ]

  return (
    <>
     <Todolist todos={todos}/>
    </>
  )
}

export default App
