import { collection, getDocs } from "firebase/firestore";
import React, { useState, createContext, useEffect, useContext } from "react";
import { db } from "./db/firebase.config";

const ConsolesContext = createContext({
    consolas: [], loading: true
});

//useState para loading seteado en true al inicio y luego seteado en false cuando se termina de cargar la data

export const ConsolesProvider = ({ children }) => {
    const [consolas, setConsolas] = useState([]);
    const consolasCollectionRef = collection(db, 'consolas');

    const getConsolas = async () => {
        /*  const [loading, setLoading] = useState(true); */
        const querySnapshot = await getDocs(consolasCollectionRef);
        const docs = querySnapshot.docs.map(doc => doc.data());
        setConsolas(docs);
        /* setLoading(false);*/
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