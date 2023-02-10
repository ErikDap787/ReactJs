import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { products } from "../consolas";
import { useEffect, useState } from "react";
import { useConsoles } from "./ConsolesProvider";



const ItemList = () => {

    const { consolas } = useConsoles()
    const { category } = useParams()

    const consolesList = category ? consolas.filter(consola => consola.category.toLowerCase() === category.toLowerCase()) : consolas


    return (

        consolesList
            .map((consola, index) => (

                <ItemDetail
                    key={index}
                    productsList={consola}
                />

            )

            ))

}

export default ItemList