import { useState } from "react";
import { postTodo } from "../../api/todoAPI";

const initState = {
    title:''
}


const Todo2Input = ({changeView}) => {

    const [todo,setTodo] = useState(initState)

    const handleChangeTodo = (e) => {
        todo[e.target.name] = e.target.value
        setTodo({...todo})
    }

    return ( 
        <div className="w-full h-[100vh] bg-gray-200">
            <div className="text-3xl">Todo2 Input</div>
            
            <div className="text-2xl m-2 p-2 border-2">
                <input type="text" name="title" value={todo.title} onChange={handleChangeTodo}></input>
            </div>

            <div>
                <button
                className="m-2 p-2 w-20 bg-slate-700 text-white rounded-md" 
                onClick={() =>{ 
                    postTodo(todo).then(newTodo => {
                    alert("새로운 Todo: " + newTodo.tno)
                    changeView("list")
                    })
                }}>
                        Register
                </button>
            </div>
        </div>
     );
}
 
export default Todo2Input;