import { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';


const ItemDetailContainer = () => {
    const [productsList, setProductsList] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)

        fetch("../consolas.json")
            .then((res) => res.json())
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