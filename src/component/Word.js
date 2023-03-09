import React from "react";
import { useState, useEffect } from "react";
import "./Word.css";
import { nanoid } from "nanoid";

function Word() {
  const list = ["C", "A", "C", "T", "U", "S"];
  const [isActive, setIsActive] = useState("active");
  const [alphabet, setAlphabet] = useState([]);
  const handleclick = (event) => {
    setIsActive("active");
    console.log("A");
  };
  useEffect(() => {
    setAlphabet((current) =>
      list.map((item) => (
        <span key={nanoid()} className={isActive} onClick={handleclick()}>
          {item}
        </span>
      ))
    );
    console.log("b");
  }, []);
  useEffect(() => {}, []);

  //   const clickend = (event) => {
  //     setIsActive((current) => false);
  //   };

  //   const alphabet = list.map((item) => (
  //     <span onClick={setIsActive((current) => true)}>item</span>
  //   ));

  return <div className="word">{alphabet}</div>;
}

export default Word;
