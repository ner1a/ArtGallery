import { Header, Footer, Home, Products, About } from "./components/"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import "./bootstrap-5.0.0-beta1-dist/css/bootstrap.min.css";
import "./css/style.css";

function App() {
  return <>
    <Router>
      <Header/>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/urunler" component={Products}/>
            <Route exact path="/hakkimda" component={About}/>
        </Switch>
      <Footer/>
    </Router>
  </>
}

export default App;