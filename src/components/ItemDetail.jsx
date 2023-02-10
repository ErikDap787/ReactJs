import { Card, Image, Stack, CardBody, Text, CardFooter, Button, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";


let ItemDetail = ({ productsList }) => {

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
                    src={productsList.img}
                    alt={productsList.id}
                />
                <Stack>
                    <CardBody>
                        <Heading size="md">{productsList.nombre}</Heading>
                        <Text py="2">
                            {productsList.category}
                        </Text>
                        <Text py="2">0
                            {productsList.description}
                        </Text>
                        <Text color="blue.600" fontSize="2xl">
                            $ {productsList.precio}
                        </Text>
                    </CardBody>
                    <CardFooter>
                        <Link to={`/item/${productsList.id}`}>
                            <Button variant="solid" colorScheme="green">
                                Detalles del producto
                            </Button>
                        </Link>
                    </CardFooter>
                </Stack>
            </Card>
        </>
    );
}

export default ItemDetail;

