import { Grid } from "@chakra-ui/react";
import ItemDetail from "./ItemDetail";


const ItemList = ({ productsList }) => {

    return (

        <>
            <Grid
                justifyContent="center"
                templateRows={"repeat(1, 1fr)"}
                templateColumns={"repeat(4, 3fr)"}
                gap="3">

                {productsList.map((product) => (

                    <ItemDetail
                        key={product.id}
                        image={product.img}
                        nombre={product.nombre}
                        precio={product.precio}
                        description={product.description}
                        category={product.category}
                    />

                ))}
            </Grid>
        </>
    )

}

export default ItemList