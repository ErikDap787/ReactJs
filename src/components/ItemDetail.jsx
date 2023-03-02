import { Card, Image, Stack, CardBody, Text, CardFooter, Button, Heading, HStack } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { CartContext } from './CartContext';
import { ItemCount } from "./ItemCount";


let ItemDetail = ({ consolesList }) => {

    const [added, setAdded] = useState(false);
    const { addToCart } = useContext(CartContext);

    const onAdd = (qty) => {
        addToCart(consolesList, qty);
        setAdded(true);
    };

    return (
        <>
            <Card
                variant="outline"
                m="10"
                backgroundColor="#F0ECCF"
                boxShadow='2xl'
            >
                <Image
                    pl="3"
                    borderRadius="lg"
                    objectFit="fill"
                    maxW={{ base: "100%", sm: "200px" }}
                    src={consolesList.img}
                    alt={consolesList.id}
                />
                <Stack>
                    <CardBody>
                        <Heading size="md">{consolesList.nombre}</Heading>
                        <Text py="2">
                            {consolesList.category}
                        </Text>
                        <Text py="2">0
                            {consolesList.description}
                        </Text>
                        <Text color="blue.600" fontSize="2xl">
                            $ {consolesList.precio}
                        </Text>
                    </CardBody>
                    {added ? (
                        <HStack alignItems="flex-end" justifyContent="space-evenly" p="5">
                            <NavLink to="/cart">
                                <Button colorScheme="orange" p="5" ml="3">
                                    Ir al Carrito
                                </Button>
                            </NavLink>
                            <NavLink to="/">
                                <Button colorScheme="orange" p="5" ml="3">
                                    Ir a Home
                                </Button>
                            </NavLink>
                        </HStack>
                    ) : (
                        <Stack pl="6" flexDirection="row">
                            <ItemCount stock={100} initial={1} onAdd={onAdd} />
                        </Stack>
                    )}
                </Stack>
            </Card>
        </>
    );
}

export default ItemDetail;

