import { fakeFetch } from "./fakefetch";
import { useState, useEffect } from "react";

export const PS5_6_CHATS = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      const response = await fakeFetch("https://example.com/api/userchat");
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
  return (
    <div style={{ textAlign: "left" }}>
      <ul>
        {data.map(({ name, messages }) => {
          return (
            <div>
              <li>
                <strong> {name}'s CHAT</strong>{" "}
              </li>
              <ul>
                {messages.map(({ from, message }) => {
                  return (
                    <li>
                      {from}:{message}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
