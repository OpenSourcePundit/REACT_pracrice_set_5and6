import { fakeFetch1 } from "./fakefetch1";
import { useState, useEffect } from "react";

export const PS6_1_PRODUCT = () => {
  const [product, setProduct] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState({});

  const clickHandler = (nam) => {
    const selectedButton = nam.target.value;
    setSelectedProduct(product.find((obj) => obj.name === selectedButton));
  };

  const getData = async () => {
    try {
      const response = await fakeFetch1("https://example.com/api/products");
      setProduct(response.data.products);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      {product.map((prod) => {
        return (
          <button key={prod.name} onClick={clickHandler} value={prod.name}>
            {prod.name}
          </button>
        );
      })}
      <div
        style={{
          visibility: selectedProduct.name === undefined ? "hidden" : "visible"
        }}
      >
        <img src={selectedProduct.src} alt="image1123" />
        <h2>NAME: {selectedProduct.name}</h2>
        <h3>Price: Rs. {selectedProduct.price}</h3>
        <h3>Description: {selectedProduct.desc}</h3>
      </div>
    </div>
  );
};
