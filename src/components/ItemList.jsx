const ItemList = ({ productsList }) => {
    return (
        <div>
            <h1>{productsList.nombre}</h1>
            <p>{productsList.precio}</p>

        </div>
    );
}

export default ItemList