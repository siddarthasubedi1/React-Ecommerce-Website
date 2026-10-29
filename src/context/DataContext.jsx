// import { createContext, useState } from "react";
// import axios from "axios";


// export const DataContext = createContext(null)

// export const DataProvider = ({ children }) => {
//     const [data, setData] = useState()

//     // fetching all products from api
//     const fetchAllProducts = async () => {
//         try {
//             const res = await axios.get('https://fakestoreapi.com/products?limit=20')
//             console.log(res)

//         } catch (error) {
//             console.log(error)
//         }
//     }

//     return <DataContext.Provider value={{ data, setData, fetchAllProducts }}>
//         {children}
//     </DataContext.Provider>
// }


import { createContext, useState, useCallback } from "react";
import axios from "axios";

export const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
    const [data, setData] = useState([]);

    // Fetching all products from API
    const fetchAllProducts = useCallback(async () => {
        try {
            const res = await axios.get(
                "https://fakestoreapi.com/products?limit=20"
            );

            console.log(res.data);
            setData(res.data);

        } catch (error) {
            console.log(error);
        }
    }, []);

    return (
        <DataContext.Provider
            value={{ data, setData, fetchAllProducts }}
        >
            {children}
        </DataContext.Provider>
    );
};
