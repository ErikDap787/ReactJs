import { Text } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';


const ItemListContainer = ({ greeting }) => {

    const [productsList, setProductsList] = useState([])
    const [loading, setLoading] = useState(true)
    const { category } = useParams()

    const seeProducts = () => {

        fetch("../consolas.json")
            .then((res) => res.json())
            .then((res) => {

                if (category) {
                    setLoading(false)
                    setProductsList(res.filter(product => product.category === category))
                } else {
                    setListaProductos(res)
                    setLoading(false)
                }
            }
            )
    }

    useEffect(() => { seeProducts() }, [category])

    return (

        <Text>{greeting}</Text>,



        (!loading ? <ItemList productsList={productsList} /> : <h1>Loading...</h1>)


    )
}

export default ItemListContainer