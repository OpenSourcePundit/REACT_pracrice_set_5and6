import { fakeFetch } from "./fakefetch";
import { useState, useEffect } from "react";

export const PS5_4_USERPROFILE = ({ heading, width, height }) => {
  const [data, setData] = useState({});

  const getData = async () => {
    try {
      const response = await fakeFetch("https://example.com/api/user");
      if (response.status === 200) {
        setData(response.data);
      }
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  const { name, image, likes, comments } = data;
  return (
    <div style={{ textAlign: "left" }}>
      <h3>{heading}</h3>
      <img src={image} alt="Loading" height={height} width={width} />
      <h4>NAME:{name}</h4>
      <h4>LIKES:{likes}</h4>
      <h4>COMMENTS:{comments}</h4>
    </div>
  );
};
