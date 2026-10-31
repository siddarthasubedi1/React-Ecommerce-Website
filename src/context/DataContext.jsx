
import {
    createContext,
    useState,
    useCallback,
    useContext
} from "react";

import axios from "axios";

export const DataContext = createContext(null);

export const DataProvider = ({ children }) => {

    // Store all products
    const [data, setData] = useState([]);

    // Store all categories
    const [category, setCategory] = useState([]);

    // Fetch all products
    const fetchAllProducts = useCallback(async () => {
        try {
            const res = await axios.get(
                "https://fakestoreapi.com/products?limit=20"
            );

            setData(res.data);

        } catch (error) {
            console.log(error);
        }
    }, []);

    // Fetch all categories
    const fetchAllCategory = useCallback(async () => {
        try {
            const res = await axios.get(
                "https://fakestoreapi.com/products/categories"
            );

            setCategory(res.data);

            console.log(res.data);

        } catch (error) {
            console.log(error);
        }
    }, []);

    return (
        <DataContext.Provider
            value={{
                data,
                setData,
                fetchAllProducts,

                category,
                setCategory,
                fetchAllCategory
            }}
        >
            {children}
        </DataContext.Provider>
    );
};

// Custom hook to access DataContext
export const getData = () => useContext(DataContext);
