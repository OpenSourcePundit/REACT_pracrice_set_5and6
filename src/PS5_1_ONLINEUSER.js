import { fakeFetch } from "./fakefetch";
import { useState } from "react";

export const PS5_1_ONLINEUSER = () => {
  const [data1, getData1] = useState([]);

  const getData = async () => {
    try {
      const { data, status } = await fakeFetch(
        "https://example.com/api/users/status"
      );
      if (status === 200) {
        getData1(data.users);
        // console.log(data1);
      }
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <div>
      <button onClick={getData}>GET</button>
      <h3>ONLINE USERS:</h3>
      <ul style={{ listStyle: "none" }}>
        {data1.map(({ name, status }) => {
          return (
            <li
              key={name}
              style={{ color: status === "Online" ? "green" : "red" }}
            >
              {name}-{status}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
