import { React, useState } from "react";
import List from "./Component/List";
import "./navbar.css";

function App2() {
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  return (
    <div>
      <div className="searchbox1">
          <input
          className="pa3 ba b--white bg-lightest-white br4"
          type="search" 
          placeholder="Type: my skills"
          onChange={inputHandler}
        />
      </div>
      <div className="li1 li2">
      <List input={inputText} />
      </div>
    </div>
  );
}

export default App2;