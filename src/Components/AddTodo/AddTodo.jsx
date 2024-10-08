import { useContext, useState } from "react";
import TodoContext from "../../Context/TodoContext";

function AddTodo() {
    const [todoText,setTodoText] = useState('');
    const {todos,setTodos} =useContext(TodoContext);
    return(
        <>
            <input type="text" 
                   placeholder="Add your next todo ...."
                   onChange={(e)=>setTodoText(e.target.value)}
                   value={todoText}/>
            <button
                onClick={()=> {
                    let nextId = todos.length+1;
                    setTodos([...todos,{id: nextId,text: todoText,isFinished: false}])
                    setTodoText('');
                }}
            >
                    Submit</button>
        </>
        
    )
}

export default AddTodo;