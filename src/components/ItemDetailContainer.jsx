import { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';


const ItemDetailContainer = () => {
    const [productsList, setProductsList] = useState({})
    const [loading, setLoading] = useState(true)
    const { id } = useParams()

    const seeProductDetail = () => {

        fetch("../consolas.json")
            .then((res) => res.json())
            .then((res) => {

                if (id) {
                    setLoading(false)
                    setProductsList(res.find(product => product.id === id))
                } else {
                    setProductsList(res)
                    setLoading(false)
                }
            }
            )
    }

    useEffect(() => { seeProductDetail() }, [id])


    return (

        (!loading ? <ItemDetail productsList={productsList} /> : <h1>Loading...</h1>)

    )
}

export default ItemDetailContainer