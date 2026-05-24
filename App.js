import React from "react";
import './styles/App.css';
import './styles/reset.css'
import {
    Header,
    TodoApp,
    Footer
} from "./component";

function App() {
  return (
      <div className="App">
        <Header />
        <TodoApp/>
        <Footer/>
      </div>
  );
}

export default App;
