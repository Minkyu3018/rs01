import { useState } from "react";
import Todo2Input from "./Todo2Input";
import Todo2List from "./Todo2List";




const TodoTest1 = () => {

    const [todos, setTodos] = useState([{tno:'',title:''}])
    const [tnoCount, setTnoCount] = useState(1);

    const addTodo = (todoObj) => {
        //console.log(uuid(), todoObj)

        

        setTodos([...todos, {tno:tnoCount, ...todoObj}])
        setTnoCount(tnoCount+1)
    }

    
    
    return (
        <>
        
        
        <div className="w-full h-[80vh] bg-gray-800 ">
           
            <div className="p-4 text-5xl text-white font-bold text-center">Todo List</div>        
        
            <div className="w-full h-[15vh] bg-gray-800 text-white">
                <Todo2Input addTodo={addTodo}></Todo2Input>
            </div>
        
            <div>
                <Todo2List todos={todos} tnoCount={tnoCount}></Todo2List>
            </div>
                


        </div>
        
        
        </>
     );
}
 
export default TodoTest1;