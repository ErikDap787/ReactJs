import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { useConsoles } from './ConsolesProvider';


const ItemDetailContainer = () => {

    const { id } = useParams()

    const { consolas } = useConsoles()

    const consolesList = id ? consolas.find(consola => consola.id === Number(id)) : consolas


    return (

        <ItemDetail consolesList={consolesList} />


    )
}

export default ItemDetailContainer