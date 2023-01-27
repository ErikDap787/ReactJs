import { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import customFetch from '../customFetch.js';
import { products } from '../consolas.js';


const ItemDetailContainer = () => {
    const [productsList, setProductsList] = useState({})
    const [loading, setLoading] = useState(true)
    const { id } = useParams()

    const seeProducts = () => {

        customFetch(products).then((res) => {

            setLoading(true)

            if (id) {
                setLoading(false)
                setProductsList(res.find(product => product.id === 2))

            } else {
                setProductsList(res)
                setLoading(false)
            }
        }
        )
    }

    useEffect(() => { seeProducts() }, [])


    return (


        (!loading ? <ItemDetail productsList={productsList} /> : <h1>Loading...</h1>)



    )
}

export default ItemDetailContainer