import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./components/Login";
import PrivateRoute from './components/PrivateRoute'
import BubblePage from './components/BubblePage'
import "./styles.scss";

function App() {
  const [colorList, setColorList] = useState([]);
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        <PrivateRoute path='/bubblepage' component={props => {
          return <BubblePage {...props} />
        }} />
      </div>
    </Router>
  );
}

export default App;
