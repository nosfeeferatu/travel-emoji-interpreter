import "./styles.css";
import React, { useState } from "react";

var travelDictionary = {
  "⛰️": "Mountain",
  "🌋": "Volcano",
  "🏜️": "Desert",
  "🏦": "Bank",
  "🏰": "Castle",
  "🛤️": "Railway track"
};

var placesWeKnow = Object.keys(travelDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("Input an emoji or click from below");
  function eventHandler() {
    var userInput = event.target.value;
    if (userInput === "") {
      return setMeaning("Input an emoji or click from below");
    }
    var meaning = travelDictionary[userInput];
    if (meaning === undefined) {
      meaning = "Yeah we don't know where your friend is either.";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    setMeaning(travelDictionary[emoji]);
  }

  return (
    <div className="App">
      <h1>Travel Emoji Interpreter</h1>
      <h4>
        Where exactly <em>is</em> your friend saying he is at?
      </h4>
      <input onChange={eventHandler} />
      <p>{meaning}</p>
      <h4>Places we know:</h4>
      {placesWeKnow.map((item) => {
        return (
          <span key={item} onClick={() => emojiClickHandler(item)}>
            {item}
          </span>
        );
      })}
    </div>
  );
}
