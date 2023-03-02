import { Card, Image, Stack, CardBody, Text, CardFooter, Button, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";


let Item = ({ consolesList }) => {

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
                    </CardBody>
                    <CardFooter>
                        <Link to={`/item/${consolesList.id}`}>
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

export default Item;