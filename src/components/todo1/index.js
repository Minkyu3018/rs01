import { useEffect, useState } from "react";
import Todo1List from "./Todo1List";
import Todo1Input from "./Todo1Input";
import Todo1Read from "./Todo1Read";
import uuid from 'react-uuid'
import Todo1Saver from "./Todo1Saver";

const Todo1 = () => {

    const [todos, setTodos] = useState([])
    const [current, setCurrent] = useState(null)

    ///////Save All
    useEffect(() => {
        const jsonStr = localStorage.getItem("todos")

        if(jsonStr){
            setTodos(JSON.parse(jsonStr))
            
        }
    },[])

    const saveAll = () => {
        const str = JSON.stringify(todos)

        localStorage.setItem("todos", str)
        alert('Save All!')
    }
    ///////////////Save All end//////////////////////
    
    const addTodo = (todoObj) => {
        console.log(uuid(), todoObj)

        setTodos([...todos, {tno:uuid(), ...todoObj}])
   
    }

    const requestView = (tno) => {
        const target = todos.filter(todo => todo.tno === tno)[0]

        setCurrent(target)
   
    }

    // 삭제
    const remove = (tno) => {
        setTodos( todos.filter(todo => todo.tno !== tno))
        setCurrent(null)
    }

    // 수정
    const modify = (modifyTodo) => {

        console.log("modifyTodo", modifyTodo)
     

        const target = todos.filter(todo => todo.tno === modifyTodo.tno)[0] // 0번째
        console.log("target" , target)
        target.title = modifyTodo.title
        target.content = modifyTodo.content

        console.log([...todos])

        setTodos([...todos])
        setCurrent(null)

    }



    return (
        <>
            <div className="w-full h-[5vh] bg-gray-700 flex">

                <h1 className="text-4xl font-bold text-white m-auto">
                Todo Board
                </h1>

            </div>

            <div>
            
                <div className="flex pt-1 bg-yellow-50 border-2">
                <Todo1Input addTodo={addTodo}></Todo1Input>
                <Todo1Read className="w-auto " current={current} remove={remove} modify={modify}></Todo1Read>
                </div>
                
                <Todo1List requestView={requestView} todos={todos}></Todo1List>
                <Todo1Saver saveAll={saveAll}></Todo1Saver>
            
            </div>
        </>
       
    );
}

export default Todo1;