import "./App.css";
import { useEffect, useState } from "react";
import imgDiscord from "./icons8-discord-48.png";
import imgTwitter from "./icons8-twitter-48.png";

const ethAmount = "0.03/0.05";
const image =
  "https://pbs.twimg.com/profile_images/1560257862123024385/G8gP6vdh_400x400.jpg";
const Title = "Netizens";
const supply = 1971;

function App() {
  return (
    <div className={"AppContainer"}>
      <header>
        <div>
          <h1 className="title">{Title}</h1>
        </div>
        <nav>
          <ul>
            <li>
              <img src={imgTwitter} alt="" />
            </li>
            <li>
              <img src={imgDiscord} alt="" />
            </li>
          </ul>
        </nav>
      </header>
      <div className="App">
        <div>
          <img className="image" src={image} alt={"projectImage"} />
        </div>
        <div>
          <div className="amount">Amount - {ethAmount}</div>
          {/* <button>Connect Wallet</button> */}
          <a href="/">
            <button class="button g">Connect Wallet</button>
          </a>
          <div className={"lineContainer"}>
            <div className={"line"}></div>
            <div className={"circleOnLine"}></div>
          </div>
          <div className="amount">{`${supply} / ${supply}`}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
