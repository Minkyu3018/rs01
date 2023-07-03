import { useEffect, useState } from "react";
import { getList } from "../../api/todoAPI";

const initState = {dtoList:[]}


const Todo2List = ({changeView}) => {

    const [data, setData] = useState(initState)

    // 한번만 일어나게 한다
    useEffect(() => {
        getList().then(result => {
            console.log(result)
            setData(result)
        })

    },[])


    return ( 
        <div className="w-full h-[100vh] bg-sky-200">
            <div className="text-3xl">Todo2 List
                <button 
                onClick={() => changeView('input')}>INPUT</button>
            </div>

            <ul>
                {data.dtoList.map( todo => <li key={todo.tno}>{todo.tno}-{todo.title}</li>)}
                
            </ul>
        </div>
     );
}
 
export default Todo2List;