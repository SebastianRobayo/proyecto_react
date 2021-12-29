import Listar from "./components/Listar";
import Crear from "./components/Crear";
import Editar from "./components/Editar";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand navbar-light bg-light">
          <div className="nav navbar-nav">
              <Link className="nav-item nav-link active" to={"/"}>System</Link>
              <Link className="nav-item nav-link" to={"/crear"}>Create employee</Link>
              <Link className="nav-item nav-link" to={"/editar"}>Edit employee</Link>
          </div>
      </nav>
    <div className="container"> 
    <br></br>      

      <Route exact path="/" component={Listar}></Route>
      <Route path="/crear" component={Crear}></Route>
      <Route path="/editar" component={Editar}></Route>

    </div>
    </Router>
  );
}

export default App;
