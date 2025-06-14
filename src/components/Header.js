import React from "react";
import { TypeAnimation } from "react-type-animation";

function Header({ name }) {
  return (
    <header style={{ textAlign: "center" }}>
      <h1>
        <a href="" style={{ textDecoration: "none", color: "inherit" }} target="_self">
          {name}
        </a>
      </h1>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
        <TypeAnimation
          sequence={[
            "Discover Hidden Gems in Nairobi.",
            500,
            "Explore unique Restaurants.",
            1000,
            "Explore unique Sights.",
            1000,
            "Explore unique Activities.",
            1000,
            "Explore unique Events.",
            1000,
          ]}
          speed={50}
          style={{
            fontSize: ["5em", "5em", "5em", "8em"],
            color: "whitesmoke",
          }}
          repeat={Infinity}
        />
      </div>
    </header>
  );
}

export default Header;
