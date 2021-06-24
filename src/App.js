import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import AddPlan from "./components/AddPlan";
import Plan from "./components/Plan";
import PlansList from "./components/PlansList";

function App() {
  return (
    <div className="App">
          <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark d-flex mb-3">
        <a href="/plans" className="navbar-brand mx-3 p-2">
          Móbrasa
        </a>
        <div className="navbar-nav mr-auto p-2">
          <li className="nav-item">
            <Link to={"/add"} className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/plans"} className="nav-link">
              Planos
            </Link>
          </li>
        </div>
        <div className="text-dark ms-auto p-2 mx-3 bg-white border border-dark rounded">
          Mariana {/* nome exemplo de user logado */}
        </div>
      </nav>

      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/plans"]} component={PlansList} />
          <Route exact path="/add" component={AddPlan} />
          <Route path="/Plans/:id" component={Plan} />
        </Switch>
      </div>
    </div>
    </div>
  );
}

export default App;
