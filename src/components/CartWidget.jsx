import { Flex, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { CartContext } from "./CartContext";

export function CartWidget() {
  const { totalQuantity } = useContext(CartContext);

  return (
    <>
      <Flex
        p="4"
        flexDirection={"row"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <NavLink to="/cart">
          <FaShoppingCart /> {totalQuantity > 0 && <Text>{totalQuantity}</Text>}
        </NavLink>
      </Flex>
    </>
  );
}

export default CartWidget;