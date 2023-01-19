import { useState, useEffect } from 'react';
import { ItemList } from './ItemList';

const ItemListContainer = ({ greeting }) => {

    const [productsList, setProductsList] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)

        fetch("../consolas.json")
            .then((res) => res.json())
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