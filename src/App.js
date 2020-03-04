import React from "react";
import Hello from "./HelloWorld/HelloWorld";
import Bomb from "./Bomb/Bomb";
import Accordion from "./Accordion/Accordion";

const sections = [
  {
    title: "Section 1",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    title: "Section 2",
    content:
      "Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!"
  },
  {
    title: "Section 3",
    content:
      "Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?"
  }
];

function App() {
  return (
    <main className="App">
      <div className="Hello">
        <Hello />
      </div>
      <div className="Bomb">
        <Bomb />
      </div>
      <div className="RouletteGun">{/*<RouletteGun />*/}</div>
      <div className="Accordion">
        <Accordion sections={sections} />
      </div>
    </main>
  );
}

export default App;
