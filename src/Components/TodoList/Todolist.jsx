import { useContext } from "react";
import Todo from "../Todo/Todo"
import TodoContext from "../../Context/TodoContext";

function Todolist(){

    const {todos,dispatch} = useContext(TodoContext)

    function onDeleteTodo(id) {
        dispatch({type: "delete_todo",payload : {id} })
    }
   
    function onEditTodo(id,newTodo){
        dispatch({type : "edit_todo",payload:{id,newTodo}});
    }

    function onFinishTodo(id,isFinished){
        dispatch({type:"finish_todo",payload:{id,isFinished}})
    }

    return(
           todos && 
                todos.map((todo) => 
                    <Todo key={todo.id} 
                          text={todo.text} 
                          isFinished={todo.isFinished}
                          deleteTodo={()=> onDeleteTodo(todo.id)}
                          editTodo={(newTodo)=>onEditTodo(todo.id,newTodo)}
                          finishTodo={(state)=>onFinishTodo(todo.id,state)}
                    />)
    )
}

export default Todolist