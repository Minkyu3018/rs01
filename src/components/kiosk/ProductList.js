import axios from "axios";
import { useState } from "react";

const ProductList = () => {

    const [obj, setObj] = useState(null)

    console.log(obj)

    axios.get('https://swapi.dev/api/people/1').then(res => {
        console.log(res.data)
        setObj(res.data)
    })

    return ( 
        <>
        </>
     );
}
 
export default ProductList;