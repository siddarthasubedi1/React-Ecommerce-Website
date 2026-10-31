
import { getData } from "../context/DataContext";
import { useEffect } from "react";

const Category = () => {

    // Get categories and fetch function from Context
    const { category, fetchAllCategory } = getData();

    // Fetch categories when component loads
    useEffect(() => {
        fetchAllCategory();
    }, [fetchAllCategory]);

    return (
        <div className="bg-[#101829]">

            <div className="max-w-7xl mx-auto flex gap-5 text-2xl items-center justify-around px-4 py-7 mt-5">

                {category.map((category, index) => {
                    return (
                        <div key={index}>
                            <button className="text-white uppercase bg-gradient-to-r from-red-500 to-purple-500 px-3 py-2 rounded-md cursor-pointer">
                                {category}
                            </button>
                        </div>
                    );
                })}

            </div>

        </div>
    );
};

export default Category;
