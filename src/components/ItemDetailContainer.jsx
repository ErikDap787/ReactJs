import { useState, useEffect } from 'react';
import { ItemDetail } from './ItemDetail';
import { customFetch } from '../helpers/customFetch';
import { products } from '../helpers/products';


const ItemDetailContainer = () => {
    const [productsList, setProductsList] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        customFetch(products)
            .then(res => {
                setLoading(false)
                setProductsList(res.find(item => item.id === 1))

            })
    }, [])

    return (

        (!loading ? <ItemDetail productsList={productsList} /> : <h1>Loading...</h1>)

    )
}

export default ItemDetailContainer