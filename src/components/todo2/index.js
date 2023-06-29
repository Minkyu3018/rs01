import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

const Todo2 = () => {

    //배열 생성 훅스
    const [ todo , setTodo ] = useState([])

    const addTodo = obj => {
        setTodo([...todo ,  obj])
    }

    const deleteTodo = (tno) => {
        setTodo(todo.filter( todoItem => todoItem.tno !== tno ))
    }



    return ( 
        <>
            <div>
                <TodoInput addTodo={addTodo}></TodoInput>
                <TodoList arr={todo} deleteTodo={deleteTodo}></TodoList>
            </div>
        </>
    );
}
 
export default Todo2;