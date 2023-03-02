import { Button, List, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";

const Cart = () => {
    const { cartItems, total, clearCart, removeItem } = useContext(CartContext);

    return (
        <div>
            {cartItems.length === 0 ? (
                <Text>Tu carrito está vacío</Text>
            ) : (
                <>
                    <ul>
                        {cartItems.map((item) => (
                            <List key={item.id}>
                                {item.title} - {item.price} - Cantidad: {item.quantity}
                                <Button onClick={() => removeItem(item.id)}>Eliminar</Button>
                            </List>
                        ))}
                    </ul>
                    <Text>Total: {total}</Text>
                    <Button onClick={clearCart}>Vaciar Carrito</Button>
                    <Link to="/checkout">

                        <Button>Ir a Checkout</Button>

                    </Link>
                </>
            )}
        </div>
    );
};

export default Cart;