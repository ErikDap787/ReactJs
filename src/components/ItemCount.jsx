import { Button, HStack, Text } from "@chakra-ui/react";
import { useState } from "react";

export function ItemCount({ stock, initial, onAdd }) {
    const [count, setCount] = useState(initial);

    const suma = () => count < stock && setCount(count + 1);

    const resta = () => count > initial && setCount(count - 1);

    return (
        <>
            <HStack alignItems="flex-end" justifyContent="space-evenly">
                <Text> Cantidad: {count} </Text>
                <Button colorScheme="orange" onClick={resta}>
                    {" "}
                    -{" "}
                </Button>
                <Button colorScheme="orange" onClick={suma}>
                    {" "}
                    +{" "}
                </Button>
            </HStack>
            <Button colorScheme="orange" onClick={() => onAdd(count)}>
                {" "}
                Agregar al Carrito
            </Button>
        </>
    );
}


















/*import { Button } from '@chakra-ui/react';
import React from 'react';
import { useState } from 'react';

export function ItemCount({ onAdd, initial, stock }) {
    //initial = 1; //El número inicial de un contador, por sentido común tiene que ser mayor o igual a 1
    //stock = 7; //Limita el count, pensado en el stock de un producto

    const [qty, setQty] = useState(initial);

    const addProduct = (num) => {
        setQty(qty + num);
    };

    return (
        <div>
            <div>
                <Button
                    onClick={() => addProduct(-1)}
                    disabled={qty === initial}
                >
                    -
                </Button>
                <span>{qty}</span>
                <Button
                    onClick={() => addProduct(+1)}
                    disabled={qty === stock}
                >
                    +
                </Button>
            </div>

            <Button
                onClick={() => {
                    onAdd(qty);
                }}
                disabled={stock === 0 ? true : null}
            >
                Agregar al carrito
            </Button>
        </div>
    );
};   */