import { fakeFetch } from "./fakefetch";
import { useState, useEffect } from "react";

export const PS5_7_COMMENTS = () => {
  const [data, setData] = useState([]);
  const deleteComment = () => {};
  const getData = async () => {
    try {
      const response = await fakeFetch("https://example.com/api/comments");
      if (response.status === 200) {
        setData(response.data.comments);
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
      <h2>COMMENTS:</h2>
      {data.map(({ name, text }) => {
        return (
          <div>
            <h3>
              <strong key={name}>{name}</strong>
            </h3>
            <p>{text}</p>
            <button onClick={deleteComment}>DELETE</button>
          </div>
        );
      })}
    </div>
  );
};
