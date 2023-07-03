import { useState } from "react";


const Todo1Input = ({addTodo}) => {

    const [todo, setTodo] = useState({title: '',content: ''})

    return ( 
        <div className="w-2/3 h-[56vh] bg-gray-200"
        
        >

            <div className="text-3xl p-2 text-blue-700 font-bold">
                INPUT Page
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
                }}>                    
                </input>                
            
            <div>
            <div className="p-2 text-xl font-bold">내용</div>
            
                <textarea 
                className="m-2 p-2 h-56 w-80 bg-slate-200 border-2 border-slate-400"
                type="text" 
                name='content' 
                value={todo.content} 
                onChange={(e) => {
                    todo.content = e.target.value
                    setTodo({...todo})
                }}>                    
                </textarea>

            </div>

            <div>
            <button 
                className=" bg-slate-700 m-2 p-2 border-2 text-white rounded-md "
                onClick={ () => {
                    addTodo(todo)
                    setTodo({title:'',content:''})
                }}
                >ADD Todo</button>
            </div>

            
        </div>
     );
}
 
export default Todo1Input;