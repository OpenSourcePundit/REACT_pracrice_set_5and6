import "./styles.css";
import { PS5_1_ONLINEUSER } from "./PS5_1_ONLINEUSER";
import { PS5_2_PRODUCTS } from "./PS5_2_PRODUCTS";
import { fakeFetch } from "./fakefetch";
import { useState, useEffect } from "react";

export default function App() {
  return (
    <div className="App">
      <h1>Shashank's box</h1>
      <h2>write your app here</h2>
      <PS5_1_ONLINEUSER />
      <PS5_2_PRODUCTS />
    </div>
  );
}
