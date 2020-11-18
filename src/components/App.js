import React from "react";
import { Route, Switch } from "react-router-dom";
import NotesPage from "./notes/NotesPage";

function App() {
  return (
    <div className="container-fluid">
      <Switch>
        <Route path="/notes" component={NotesPage} />
      </Switch>
    </div>
  );
}

export default App;
