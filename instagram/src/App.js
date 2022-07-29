import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { injectGlobal } from "@emotion/css";
import Login from "./components/Login";
import Join from "./components/Join";
import Navigation from "./components/Navigation";
import RandomPost from "./components/RandomPost";
import Main from "./components/Main";
import RandomPost from "./components/RandomPost";

injectGlobal`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    border: none;
    box-sizing: border-box; 
  }
  textarea {
    resize: none;
  }
  button {
    cursor: pointer;
    background-color: inherit;
  } 
  ul {
    list-style: none;
  }
  li {
    list-style:none;
  }
  a, a:visited, a:link {
    color: inherit;
    text-decoration: none;
  }
`;

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/Join" element={<Join />}></Route>
        <Route path="/Navigation" element={<Navigation />}></Route>
        <Route path="/random" element={<RandomPost />}></Route>
        <Route path="/main" element={<Main />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
