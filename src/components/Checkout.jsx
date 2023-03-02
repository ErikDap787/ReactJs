import { Button, FormLabel, Input } from "@chakra-ui/react";
import { useState } from "react";
import { Form } from "react-router-dom";
import "firebase/firestore";
import { db } from "./db/firebase.config";

function CheckoutForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [zip, setZip] = useState("");
    const [country, setCountry] = useState("");
    const [orderCode, setOrderCode] = useState("");

    /* firebase.initializeApp(firebaseConfig);*/

    const handleSubmit = (e) => {
        e.preventDefault();

        const order = {
            name,
            email,
            address,
            city,
            zip,
            country,
            orderCode,
            date: new Date(),
        };

        /*const db = firebase.firestore();*/

        db.collection("orders")
            .add(order)
            .then((docRef) => {
                console.log("Order added with ID: ", docRef.id);
            })
            .catch((error) => {
                console.error("Error adding order: ", error);
            });

        const code = generateOrderCode();
        setOrderCode(code);
    };

    const generateOrderCode = () => {

        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        let code = "";
        for (let i = 0; i < 8; i++) {
            code += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return code;
    };

    return (
        <div>
            <h2>Checkout</h2>
            <Form onSubmit={handleSubmit}>
                <div>
                    <FormLabel htmlFor="name">Name:</FormLabel>
                    <Input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <FormLabel htmlFor="email">Email:</FormLabel>
                    <Input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <FormLabel htmlFor="address">Direccion:</FormLabel>
                    <Input
                        type="text"
                        id="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </div>
                <div>
                    <FormLabel htmlFor="city">Ciudad:</FormLabel>
                    <Input
                        type="text"
                        id="city"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                </div>
                <div>
                    <FormLabel htmlFor="zip">Codigo postal:</FormLabel>
                    <Input
                        type="text"
                        id="zip"
                        value={zip}
                        onChange={(e) => setZip(e.target.value)}
                    />
                </div>
                <div>
                    <FormLabel htmlFor="country">Pais:</FormLabel>
                    <Input
                        type="text"
                        id="country"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                    />
                </div>
                <Button type="submit">Pagar</Button>
            </Form>
            {orderCode && <p>Tu codigo de confirmacion de compra es {orderCode}</p>}
        </div>
    );
}

export default CheckoutForm;
