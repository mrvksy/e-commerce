import "./App.css";

import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


import Products from "./pages/Products";
import ProductsDetail from "./pages/ProductsDetail";

function App() {
  

  return (
    <Router>
        <div>
          <Navbar />

          <div id="content">
            <Switch>
              <Route path="/" component={Products} />
              <Route path="/:products_id" component={ProductsDetail} />
            </Switch>
          </div>
        </div>
    </Router>
  );
}

export default App;
