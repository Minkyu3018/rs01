import { useEffect, useState } from "react";

const Todo1Read = ({current, remove, modify}) => {

    // 나한테 props로 전달되는 정보가 나한테는 상태가 됨
    const [todo, setTodo] = useState(current)

    // 용도 : 비동기 통신 / 상태가 유지되고 있는것이 있는데 props에 따라 상태를 바꿔주고 싶을 떄
    useEffect(() => {
        setTodo(current)
    },[current])

    if(!todo){
        return <></>
    } 

    return ( 
        <div className=" w-1/3 h-[56vh] ml-1 bg-yellow-50">
        
        <div className="text-3xl text-blue-700 font-bold">READ Page</div>
            
            <div className="p-2 text-xl font-bold">No</div>
            
                <div className="m-2 w-80 bg-slate-200 border-2 border-slate-400">
                {todo.tno}
                </div>
                       

            <div className="p-2 text-xl font-bold">제목</div>
                <input 
                className="m-2 p-1 w-80 bg-slate-200 border-2 border-slate-400"
                type="text" 
                name='title' 
                value={todo.title} 
                onChange={(e) => {
                    todo.title = e.target.value
                    setTodo({...todo})

                }}/>
            

            <div className="p-2 text-xl font-bold">내용</div>
            
                <textarea 
                className="m-2 p-2 h-56 w-80 bg-slate-200 border-2 border-slate-400"
                type="text" 
                name='content' 
                value={todo.content} 
                onChange={(e) => {
                    todo.content = e.target.value
                    setTodo({...todo})

                }}textarea/>
            
            

            <div className="">
                <button 
                className="m-2 p-2 w-20 bg-blue-800 text-white rounded-md"
                onClick={() => modify(todo)}
                >MOD</button>
                <button 
                className="m-2 p-2 w-20 bg-red-600 text-white rounded-md"
                onClick={() => remove(todo.tno)}
                >DEL</button>
            </div>
        </div>
     );
}
 
export default Todo1Read;