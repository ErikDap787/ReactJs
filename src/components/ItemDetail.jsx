const ItemDetail = ({ productsList }) => {
    return (
        <div>
            <h1>{productsList.name}</h1>
            <p>{productsList.description}</p>
        </div>
    );
}