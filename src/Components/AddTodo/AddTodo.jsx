import { useState } from "react";

function AddTodo({addTodos}) {
    const [todoText,setTodoText] = useState('');
    return(
        <>
            <input type="text" 
                   placeholder="Add your next todo ...."
                   onChange={(e)=>setTodoText(e.target.value)}
                   value={todoText}/>
            <button
                onClick={()=> addTodos(todoText)}
            >
                    Submit</button>
        </>
        
    )
}

export default AddTodo;