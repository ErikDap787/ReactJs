import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { useConsoles } from './ConsolesProvider';


const ItemListContainer = () => {

    const { category } = useParams()

    const { consolas } = useConsoles()


    const consolesList = category ? consolas.filter(consola => consola.category === category) : consolas

    return (



        <ItemList consolesList={consolesList} />


    )
}

export default ItemListContainer