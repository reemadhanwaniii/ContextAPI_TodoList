import Todo from "../Todo/Todo"

function Todolist({todos}){
    return(
           todos && 
                todos.map((todo) => 
                    <Todo key={todo.key} 
                          text={todo.text} 
                          isFinished={todo.isFinished}
                    />)
    )
}

export default Todolist