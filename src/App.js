import "./styles.css";
import { PS5_1_ONLINEUSER } from "./PS5_1_ONLINEUSER";
import { PS5_2_PRODUCTS } from "./PS5_2_PRODUCTS";
import { PS5_4_USERPROFILE } from "./PS5_4_USERPROFILE";
import { PS5_5_USERFEED } from "./PS5_5_USERFEED";

export default function App() {
  return (
    <div className="App">
      <h1>Shashank's box</h1>
      <h2>write your app here</h2>
      <PS5_1_ONLINEUSER />
      <PS5_2_PRODUCTS />
      <PS5_4_USERPROFILE heading={"UserPROFILE"} width={200} height={150} />
      <PS5_5_USERFEED />
    </div>
  );
}
