import React from "react";
import "../assets/styles/character.css";

const characters = [
  { name: "Barack Obama", role: "44th President of the United States", image: "/images/barack_o.png" },
  { name: "Harry Potter", role: "Wizard, main character", image: "/images/harry_p.png" },
  { name: "Santa Claus", role: "Gift-bringer, holiday icon", image: "/images/santa_o.png" },
  { name: "Kim Kardashian", role: "Reality TV star", image: "/images/kim_k.png" },
  { name: "Sheldon Cooper", role: "Physicist, Big Bang Theory", image: "/images/sheldon_c.png" }
];

const Characters = () => {
  return (
    <div className="container text-center">
      <h1>Characters</h1>
      <div className="row">
        {characters.map((char, index) => (
          <div key={index} className="col char_bubble">
            <button className="btn btn-primary">Spark a Conversation!</button>
            <img src={char.image} className="img-fluid" alt={char.name} />
            <h2>{char.name}</h2>
            <h4>{char.role}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Characters;
