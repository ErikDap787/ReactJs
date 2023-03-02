import { Button, List, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";

const Cart = () => {
    const { cartItems, total, clearCart, removeFromCart } = useContext(CartContext);

    return (
        <div>
            {cartItems.length === 0 ? (
                <Text>Tu carrito está vacío</Text>
            ) : (
                <>
                    <ul>
                        {cartItems.map((item) => (
                            <List key={item.id}>
                                <div>
                                    {item.nombre} - {item.price} - Cantidad: {item.quantity}
                                    <Button onClick={() => removeFromCart(item.id)}>Eliminar</Button>
                                </div>
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