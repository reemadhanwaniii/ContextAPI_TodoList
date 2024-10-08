import Todo from "../Todo/Todo"

function Todolist({todos,setTodos}){

    function onDeleteTodo(id) {
        const newTodoList = todos.filter(todo => todo.id !== id);
        setTodos(newTodoList);
    }

    function onEditTodo(id,newTodo) {
        const todoList = todos.map((todo)=>{
            if(todo.id === id){
                todo.text = newTodo;
            }
            return todo;
        })
        setTodos(todoList);
    }

    function onFinishTodo(id,state) {
        const todoList = todos.map((todo)=>{
            if(todo.id === id){
                todo.isFinished = state;
            }
            return todo;
        })
        setTodos(todoList);
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