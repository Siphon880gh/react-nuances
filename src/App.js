import React, {useState, useEffect} from "react";
import logo from './logo.svg';
import './App.css';

function App() {

  // useEffect that changes on a variable change a, b, or c
  // var [a, setA] = useState("")
  // var [b, setB] = useState("")
  // var [c, setC] = useState("")

  // useEffect(()=>{
  //   setTimeout(()=>{
  //     setName ([...nameArray, "N"]);
  //     // name = "E D";
  //   }, 2000);
  // }, [a,b,c])

  // useEffect that runs once
  useEffect(()=>{

    setTimeout(()=>{
      setName ([...nameArray, "N"]);
      // name = "E D";
    }, 2000);

  }, []) // runs once because [], similar to document ready

  // useEffect would run whenever something rerenders?
  // useEffect(()=>{
  // })

  // var [name, setName] = useState("Eric");
  // useState returns an array
  var useStateArray = useState(["E", "D"]);
  var nameArray = useStateArray[0];
  var setName = useStateArray[1];


  // var [name] = useState("E");
  // var name = "E"
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hi {nameArray.join(".")}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
