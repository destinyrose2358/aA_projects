import React from "react";
import GodsList from "./gods/GodsList";
import { Route } from "react-router-dom";
import GodCreate from "./create/GodCreate";

const App = () => (
  <div>
    <Route exact path="/" component={ GodsList } />
    <Route path="/gods/new" component={ GodCreate } />
  </div>
);

export default App;