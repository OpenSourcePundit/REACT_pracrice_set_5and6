import { fakeFetch1 } from "./fakefetch1";
import { useState, useEffect } from "react";

export const PS6_2_TODOS = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      const response = await fakeFetch1("https://example.com/api/todos");
      if (response.status === 200) {
        setData(response.data.todos);
      }
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <ul style={{ listStyle: "none" }}>
        {data.map(({ title, desc, todos }) => {
          return (
            <li key={title}>
              <p>
                {title} : <h3>{desc}</h3>
              </p>
              <ol style={{ textAlign: "left" }}>
                {todos.map((task) => {
                  return <li key={task}>{task}</li>;
                })}
              </ol>
              <hr />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
