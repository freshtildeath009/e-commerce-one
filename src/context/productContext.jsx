import { createContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const ProductContext = createContext()

function ProductContextProvider(props) {
    const [products, setProducts] = useState([])


    const values = {
        products,
        setProducts
    }

    const params = useParams()

    // useEffect 1
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])



    return (
        <ProductContext.Provider value={values}>
            {props.children}
        </ProductContext.Provider>
    )
}

export default ProductContextProvider