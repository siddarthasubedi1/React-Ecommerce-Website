
import { useContext, useEffect } from "react";
import { DataContext } from "../context/DataContext";

const Site_display = () => {
  const { fetchAllProducts, data } = useContext(DataContext);

  useEffect(() => {
    fetchAllProducts();
  }, [fetchAllProducts]);

  return (
    <div>
      <h1>Site Display</h1>

      {data.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <p>${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Site_display;
