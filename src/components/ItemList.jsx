import Item from "./Item";
import { useParams } from "react-router-dom";
import { useConsoles } from "./ConsolesProvider";



const ItemList = () => {

    const { consolas } = useConsoles()
    const { category } = useParams()

    const consolesList = category ? consolas.filter(consola => consola.category.toLowerCase() === category.toLowerCase()) : consolas


    return (

        consolesList
            .map((consola, index) => (

                <Item
                    key={index}
                    consolesList={consola}
                />

            )

            ))

}

export default ItemList