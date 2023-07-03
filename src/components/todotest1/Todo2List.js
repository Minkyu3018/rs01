

const Todo2List = ({todos, tnoCount}) => {
    return ( 
        
        <div className="m-10 text-white text-center">
            <ul className="">
            
            {todos.map( t => 
            <li
            className="border-2 border-gray-500 m-2"                
            onClick={() => todos(t.tno)} 
            key={t.tno}
            >
            <div>No: {t.tno} - {t.title}</div>

            </li> )}

        </ul>
        </div>
     );

}
export default Todo2List;