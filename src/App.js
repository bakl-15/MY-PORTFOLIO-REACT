import React from "react";
import "./App.css";
import "boxicons/css/boxicons.min.css";

import Cover from "./components/Cover";
 import Book from "./components/Book";
import  TurnContextProvider  from "./porvider/TurnPageContext";

const App = () => {
  return (
    <TurnContextProvider>
     <div className="wrapper">
        <Cover />
        <Book />
      
    </div>
    </TurnContextProvider>
  
  );
};

export default App;