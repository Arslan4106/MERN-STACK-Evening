import { useState, useCallback, useEffect } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(10);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) {
      str += "0123456789";
    }
    if (charAllowed) {
      str += "!@#$%^&*_-[]{}";
    }
    for (let i = 1; i <= length; i++) {
      // Math.random
      // Math.trunc()  -----Remove the Decimal, 4.5 => 4, 6.3 => 6, -5.9, -5
      // Math.floor()  -----Nearest Down,  4.9 => 4, 4.3 => 4, -5.9 => -6
      // Math.ceil()   -----Nearest Up,  5.9 => 6, 4.5 => 5, -5.9 => -5
      // Math.round()  -----Round About, 6.7 => 7, 5.8 => 6
      let char = Math.floor(Math.random() * str.length);
      // 32
      // 10
      pass += str.charAt(char);
      //pass = str.charAt(32)
      //pass = fJ
    }
    setPassword(pass);
    // for (let i = 1; i <= length; i++) {
    //   let char = Math.floor(Math.random() * str.length);
    //   pass += str.charAt(char);
    // }
    // setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, charAllowed, setPassword]);

  // useEffect(() => {
  //   generatePassword();
  // }, [length, numberAllowed, charAllowed, generatePassword]);

  // let myJob = "MERNSTACKDEVELOPER";
  // let mern = myJob.charAt(0);
  // mern = myJob.charAt(1);
  // mern = myJob.charAt(2);
  // mern = myJob.charAt(3);
  // console.log(mern);
  // generatePassword();
  return (
    <>
      <div className="password">
        <h1>Password Generator</h1>
        <div className="input">
          <input type="text" value={password} placeholder="Password" readOnly />
          <button className="btn">Copy</button>
        </div>
        <br />
        <br />
        <div className="dependencies">
          <div className="range">
            <input
              type="range"
              min={0}
              max={200}
              value={length}
              onChange={(e) => {
                setLength(e.target.value);
                // console.log(e.target.value);
              }}
            />
          </div>
          <div className="length">
            <label htmlFor="">Length: {length}</label>
          </div>
          <div className="numbers">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
              // defaultChecked={numberAllowed}
              // id="numberInput"
              // onChange={() => {
              //   setNumberAllowed((prev) => !prev);
              // }}
            />
            <label htmlFor="">Numbers</label>
          </div>
          <div className="characters">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="charInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
              // defaultChecked={charAllowed}
              // id="charInput"
              // onChange={() => {
              //   setCharAllowed((prev) => !prev);
              // }}
            />
            <label htmlFor="">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
