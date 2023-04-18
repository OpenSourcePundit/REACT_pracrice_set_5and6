import "./styles.css";
import { PS5_1_ONLINEUSER } from "./PS5_1_ONLINEUSER";
import { PS5_2_PRODUCTS } from "./PS5_2_PRODUCTS";
import { PS5_4_USERPROFILE } from "./PS5_4_USERPROFILE";
import { PS5_5_USERFEED } from "./PS5_5_USERFEED";
//import { PS5_6_CHATS } from "./PS5_6_CHATS";
//import { PS5_7_COMMENTS } from "./PS5_7_COMMENTS";
import { fakeFetch } from "./fakefetch";
import { useState, useEffect } from "react";

const PS5_6_CHATS = () => {
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

const PS5_7_COMMENTS = () => {
  const [data, setData] = useState([]);
  const deleteComment = () => {};
  const getData = async () => {
    try {
      const response = await fakeFetch("https://example.com/api/comments");
      if (response.status === 200) {
        setData(response.data.comments);
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
      <h2>COMMENTS:</h2>
      {data.map(({ name, text }) => {
        return (
          <div>
            <h3>
              <strong>{name}</strong>
            </h3>
            <p>{text}</p>
            <button onClick={deleteComment}>DELETE</button>
          </div>
        );
      })}
    </div>
  );
};

export default function App() {
  return (
    <div className="App">
      <h1>Shashank's box</h1>
      <h2>write your app here</h2>
      <PS5_1_ONLINEUSER />
      <PS5_2_PRODUCTS />
      <PS5_4_USERPROFILE heading={"UserPROFILE"} width={200} height={150} />
      <PS5_5_USERFEED />
      <PS5_6_CHATS />
      <PS5_7_COMMENTS />
    </div>
  );
}
