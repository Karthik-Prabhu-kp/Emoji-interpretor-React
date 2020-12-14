import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "🙂": "Happy",
  "😂": "Laughing",
  "😒": "unamused",
  "😴": "sleeping",
  "😭": "crying",
  "😋": "Face Savouring Delicious Food",
  "🤧": "Sneezing Face "
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "we dont have this in our database";
    }

    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Emoji Interpretor</h1>

      <input
        placeholder="Input emoji here or select from list below"
        onChange={() => emojiInputHandler(event)}
      />

      <div class="meaning"> Meaning of emoji : {meaning} </div>
      <div class="known"> Emoji's we know</div>
      <span>
        {emojisWeKnow.map(function (emoji) {
          return (
            <span
              onClick={() => emojiClickHandler(emoji)}
              class="emoji"
              key={emoji}
            >
              {emoji}
            </span>
          );
        })}
      </span>
    </div>
  );
}
