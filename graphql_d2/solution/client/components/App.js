import React from "react";
import GodsList from "./gods/GodsList";
import { Route, Switch } from "react-router-dom";
import GodCreate from "./create/GodCreate";
import EmblemCreate from "./create/EmblemCreate";
import AbodeCreate from "./create/AbodeCreate";
import Create from "./create/AllCreate";
import NavBar from "./nav/nav";
import GodDetail from "./gods/GodDetail";

const App = () => (
  <div>
    <NavBar />
    <Switch>
      <Route path="/gods/:id" component={GodDetail} />
      <Route path="/new" component={ Create } />
      <Route exact path="/" component={ GodsList } />
    </Switch>
    
  </div>
);

export default App;