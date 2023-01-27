import { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import customFetch from '../customFetch.js';
import { products } from '../consolas.js';


const ItemListContainer = () => {

    const [productsList, setProductsList] = useState([])
    const [loading, setLoading] = useState(true)
    const { category } = useParams()

    const seeProducts = () => {

        customFetch(products).then((res) => {

            setLoading(true)

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



        (!loading ? <ItemList productsList={productsList} /> : <h1>Loading...</h1>)


    )
}

export default ItemListContainer