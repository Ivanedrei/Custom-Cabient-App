import "./Veras.css"
import React from "react"
import { Route, Routes } from "react-router-dom"
import { NavBar } from "./nav/NavBar"
import { ApplicationViews } from "../ApplicationViews"

export const Veras = () => {
  return <>
    <h2>
      Hello World!
    </h2>
    <Routes render={() => {
      <>
        <Route>
          <NavBar />
          <ApplicationViews />
        </Route>
      </>
    }} />

  </>
}



// import logo from './logo.svg';
// import './Veras.css';

// function Veras() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default Veras;


