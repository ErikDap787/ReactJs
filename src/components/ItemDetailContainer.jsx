import { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';


const ItemDetailContainer = () => {
    const [productsList, setProductsList] = useState({})
    const [loading, setLoading] = useState(true)

    const seeProducts = () => {

        fetch("../consolas.json")
            .then((res) => res.json())
            .then((res) => {

                if (category) {
                    setLoading(false)
                    setProductsList(res.filter(product => product.category === category))
                } else {
                    setProductsList(res)
                    setLoading(false)
                }
            }
            )
    }

    useEffect(() => { seeProducts() }, [category])


    return (

        (!loading ? <ItemDetail productsList={productsList} /> : <h1>Loading...</h1>)

    )
}

export default ItemDetailContainer