import React from "react";
import { useState, useEffect } from "react";
import "./Word.css";
import { nanoid } from "nanoid";

function Word() {
  const [ba, setBa] = useState(true);
  const [list, setList] = useState([
    { letter: "C", key: "1", active: false },
    { letter: "A", key: "2", active: false },
    { letter: "C", key: "3", active: false },
    { letter: "T", key: "4", active: false },
    { letter: "U", key: "5", active: false },
    { letter: "S", key: "6", active: false },
  ]);

  const [alphabet, setAlphabet] = useState([]);

  const handleclick = (props) => {
    setList((prevState) =>
      prevState.map((prev) => {
        if (prev.key == props.key) {
          console.log(props.key);
          return { letter: prev.letter, key: prev.key, active: true };
        } else {
          return { letter: prev.letter, key: prev.key, active: prev.active };
        }
      })
    );
    console.log("clicked");
    console.log(list[0].active);
  };
  const handleafterclick = (props) => {
    setList((prevState) =>
      prevState.map((prev) => {
        if (prev.key == props.key) {
          console.log(props.key);
          return { letter: prev.letter, key: prev.key, active: false };
        } else {
          return { letter: prev.letter, key: prev.key, active: prev.active };
        }
      })
    );
  };

  useEffect(() => {
    setAlphabet((current) =>
      list.map((item) => (
        <span
          key={item.key}
          className={item.active ? "active" : ""}
          onClick={() => handleclick(item)}
          onAnimationEnd={() => handleafterclick(item)}
        >
          {item.letter}
        </span>
      ))
    );
  }, [list]);
  useEffect(() => {
    const timer = setTimeout(() => {
      setList((prevState) =>
        prevState.map((item) => ({
          letter: item.letter,
          key: item.key,
          active: true,
        }))
      );
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return <div className="word">{alphabet}</div>;
}

export default Word;
