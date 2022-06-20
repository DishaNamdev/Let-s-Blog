import Topbar from "./components/topbar/Topbar.jsx";
import Home from "./pages/home/Home.jsx";
import Write from './pages/write/Write.jsx';
import Single from "./pages/single/Single.jsx";
import Settings from "../src/pages/settings/Settings.jsx";
import Login from "../src/pages/login/Login.jsx";
import Register from "./pages/register/Register.jsx";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from "react-router-dom";

// ./ means current folder

function App() {
  const user = false;
  return (
    <Router>
         <>
         <Topbar/>
         
         <Switch>
             <Route exact path="/">
               <Home />
            </Route>

            <Route path="/register">
               <Register/>
            </Route>

            
            <Route path="/write">
                <Write />
            </Route>

            <Route path="/single">
              <Single />
            </Route>

            <Route path="/settings">
              <Settings />
            </Route>

            <Route path="/login">
              <Login />
            </Route>

         </Switch>
         </>
    </Router>
  );
}

export default App;
