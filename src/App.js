import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Navbar/Header";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Checkout from "./pages/Checkout";
import Products from "./pages/Products";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/categories" exact>
          <Category />
        </Route>
        <Route path="/checkout" exact>
          <Checkout />
        </Route>
        <Route path="/products" exact>
          <Products />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
