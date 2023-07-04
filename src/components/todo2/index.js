import { useState } from "react";
import { getList } from "../../api/todoAPI";
import Todo2List from "./Todo2List";
import Todo2Input from "./Todo2Input";
import Todo2Read from "./Todo2Read";


const Todo2 = () => {

    // 라우팅 설계
    const [cmd, setCmd] = useState("list")
    const [target, setTarget] = useState(0)

    const changeView = (value, tno) => {
        setCmd(value)

        if(tno) {
            setTarget(tno)
        }
    }

    const getView = () => {
        if(cmd === 'list') {
            return <Todo2List changeView={changeView}></Todo2List>
        }else if ( cmd === 'input'){
            return <Todo2Input changeView={changeView}></Todo2Input>
        }else if ( cmd === 'read'){
            return <Todo2Read target={target} changeView={changeView}></Todo2Read>
        }
    }




    return ( 
        <>
        <div className="w-full h-24 bg-yellow-100 flex justify-center">
            <div 
            className="w-32 border-2 font-bold text-center text-pink-400"
            onClick={() => changeView("list")}
            >LIST</div>
            
            <div className="w-32 border-2 font-bold text-center text-pink-400"
            onClick={() => changeView("input")}
            >INPUT</div>
            
        </div>
        <div>
            {getView()}
        </div>
        
        </>
     );
}
 
export default Todo2;