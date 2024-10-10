
import { useReducer } from 'react'
import './App.css'
import AddTodo from './Components/AddTodo/AddTodo'
import Todolist from './Components/TodoList/Todolist'
import TodoContext from './Context/TodoContext';
import TodoReducer from './Reducers/TodoReducer';

function App() {
 

  const [todos,dispatch] = useReducer(TodoReducer,[]);


  return (
    <>
    <TodoContext.Provider value={{todos,dispatch}}>
      <AddTodo/>
      <Todolist/>
    </TodoContext.Provider>
    </>
  )
}

export default App
