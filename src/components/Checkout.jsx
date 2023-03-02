import { Button, FormLabel, Input } from "@chakra-ui/react";
import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { db } from "./db/firebase.config";

function CheckoutForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [zip, setZip] = useState("");
    const [country, setCountry] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const order = {
            name,
            email,
            address,
            city,
            zip,
            country,
            date: new Date(),
        };

        const ordersCollection = collection(db, "orders");

        addDoc(ordersCollection, order)

            .then(({ id }) => alert("EL ID DE COMPRA ES " + id))

    };

    return (
        <div>
            <h2>Checkout</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <FormLabel htmlFor="name">Nombre:</FormLabel>
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
            </form>
        </div>
    );
}

export default CheckoutForm;

