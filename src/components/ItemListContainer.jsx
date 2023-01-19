import { useState, useEffect } from 'react';
import { customFetch } from '../helpers/customFetch';
import { products } from '../helpers/products';
import { ItemList } from './ItemList';

const ItemListContainer = ({ greeting }) => {

    const [productsList, setProductsList] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        customFetch(products)

            .then(res => {
                setLoading(false)
                setProductsList(res)
            })
    }, [])


    return (
        
    <
        <h1>{greeting}</h1>
        
        (!loading ? <ItemList productsList={productsList} /> : <h1>Loading...</h1>)

        />
    )
    }

export default ItemListContainer