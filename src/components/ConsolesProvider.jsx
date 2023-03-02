import { collection, getDocs } from "firebase/firestore";
import React, { useState, createContext, useEffect, useContext } from "react";
import { db } from "./db/firebase.config";

const ConsolesContext = createContext({
    consolas: [], loading: true
});

export const ConsolesProvider = ({ children }) => {
    const [consolas, setConsolas] = useState([]);
    const consolasCollectionRef = collection(db, 'consolas');

    const getConsolas = async () => {

        const querySnapshot = await getDocs(consolasCollectionRef);
        const docs = querySnapshot.docs.map(doc => doc.data());
        setConsolas(docs);

    };

    useEffect(() => { getConsolas() }, []);

    return (
        <ConsolesContext.Provider value={{ consolas }}>
            {children}
        </ConsolesContext.Provider>
    )
}

export const useConsoles = () => {
    return useContext(ConsolesContext);
}