import axios from "axios";
import { useEffect, useState } from "react";

// 기본값을 변수로 빼준다
const initState = {
    id:0,
    pname:'',
    price:0
}


const ProductDetail = ({target, requestBuy}) => {

    const [product, setProduct] = useState(initState)


    // 상품 데이터 가져오기, id값이 바뀌면 useEffect 실행
    useEffect(() => {
        
        console.log("use effect....", target)

        const id = target.pno

        if(id !== 0 ){
            axios.get(`http://localhost:80/products/${id}`)
            .then(res => { setProduct(res.data) })
        }

    },[ target ])

    return ( 

        <div>
            <div>Product Detail</div>
            <div>
                <div>ID: {product.id} </div>
                <div>PNAME: {product.pname} </div>
                <div>PRICE: {product.price} </div>                
            </div>
            <div>
                <button 
                className="bg-slate-500"
                onClick={() => requestBuy(product)}
                >
                    ADD Cart
                </button>
            </div>
        </div>
     );
}
 
export default ProductDetail;