

const Todo1Saver = ({saveAll}) => {
    return ( 
        <div className="w-full h-[5vh] bg-orange-300 text-white flex ">
            <button 
            className="w-full text-3xl font-bold m-auto "
            onClick={()=>saveAll()}
            
            >SAVE All</button>
        </div>

     );
}
 
export default Todo1Saver;