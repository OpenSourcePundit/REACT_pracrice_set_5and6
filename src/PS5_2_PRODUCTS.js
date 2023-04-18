import { fakeFetch } from "./fakefetch";
import { useState, useEffect } from "react";

export const PS5_2_PRODUCTS = () => {
  const [data, setData] = useState([]);
  const productMoreThan20 = () => {
    setData(data.filter(({ quantity }) => quantity > 20));
  };
  const filterByPrice = () => {
    setData(data.filter(({ price }) => price < 100));
  };

  const getData = async () => {
    try {
      const response = await fakeFetch("https://example.com/api/products");
      if (response.status === 200) {
        setData(response.data.products);
        console.log(data);
      }
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    console.log("tanay");
    getData();
  }, []);
  return (
    <div>
      <button onClick={productMoreThan20}>
        Show products with qty more than 20
      </button>
      <button onClick={filterByPrice}>FILTER by PRICE (lessthan100)</button>
      <ul>
        {data.map(({ name, price, quantity }) => {
          return (
            <li>
              {name}-Rs.{price}-Quantity:{quantity}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
