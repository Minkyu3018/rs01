
const Todo1List = ({ todos, changeView, requestView }) => {
    return (

        <div className="w-full h-auto bg-gray-300 mt-1">
            <div className="text-3xl text-blue-700 p-2 font-bold">LIST Page</div>

            {/* <ul className="">
            
                {todos.map( t => 
                <li
                className="border-2 border-gray-500 m-2"                
                onClick={() => requestView(t.tno)} 
                key={t.tno}
                >
                <div>No: {t.tno}</div>
                <div>제목: {t.title}</div>
                <div>내용: {t.content}</div>
                </li> )}

            </ul> */}

            <table>
                <thead>
                    <tr>
                        <th className="border-2 border-gray-500 m-2">No</th>
                        <th className="border-2 border-gray-500 m-2"
                        style={{ width: '15%' }}>제목</th>
                        <th className="border-2 border-gray-500 m-2"
                        style={{ width: '85%' }}>내용</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map(t => (
                        <tr
                            className="border-2 border-gray-500 m-2"
                            onClick={() => requestView(t.tno)}
                            key={t.tno}
                        >
                            <td className="border-2 border-gray-500 m-2">{t.tno}</td>
                            <td className="border-2 border-gray-500 m-2">{t.title}</td>
                            <td className="border-2 border-gray-500 m-2">{t.content}</td>
                        </tr>
                    ))}
                </tbody>
            </table>


        </div>
    );
}

export default Todo1List;