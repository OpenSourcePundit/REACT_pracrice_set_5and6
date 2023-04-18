import { fakeFetch } from "./fakefetch";
import { useState, useEffect } from "react";

export const PS5_5_USERFEED = () => {
  const [data, setData] = useState([]);
  const [loading, setIsLoading] = useState(true);

  const getData = async () => {
    try {
      const response = await fakeFetch("https://example.com/api/users");
      if (response.status === 200) {
        setIsLoading(false);
        setData(response.data);
        console.log(data);
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div style={{ textAlign: "left" }}>
      <h2>USERS FeeD</h2>
      <h3 style={{ display: loading ? "block" : "none" }}>LOADING....</h3>
      <ul>
        {data.map(({ name, image, likes, comments }) => {
          return (
            <li key={name} style={{ listStyle: "none" }}>
              <img src={image} alt="pic" height="200" width="200" />
              <h2>{name}</h2>
              <p>LIKES:{likes}</p>
              <p>COMMENTS:{comments}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
