import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { products } from "../consolas";
import { useEffect, useState } from "react";



const ItemList = () => {

    const { category } = useParams()
    const [myProducts, setMyProducts] = useState([])

    useEffect(() => {

        category === undefined

            ?

            setMyProducts(products)
            :
            setMyProducts(products.filter(product => product.category.toLowerCase === category.toLowerCase))
    }, [category])


    return (

        myProducts.map((product, index) => (

            <ItemDetail
                key={index}
                productsList={product}
            />

        )

        ))

}

export default ItemList