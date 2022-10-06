import "./App.css";
import News from "./components/News";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [btnText, setBtnText] = useState("💡 Dark");

  const [darkTheme, setDarkTheme] = useState({
    color: "white",
    background: "black",
  });
  const toggleStyle = () => {
    if (darkTheme.color == "white") {
      setBtnText("🌙 Dark");
      setDarkTheme({
        color: "black",
        background: "white",
      });
    } else {
      setBtnText("💡 Light");
      setDarkTheme({
        color: "white",
        background: "black",
      });
    }
  };
  return (
    <div >
      
      <Router>
        <div className="my-3" >
        <NavBar style={darkTheme}/>
        <button onClick={toggleStyle}  className="text-xl dark:bg-gray-60 dark:text-gray-900  bg-white border rounded-full px-2 py-1 hover:shadow-lg">{btnText}</button>


        </div>

        <Switch>
          <Route exact path="/">
            <News style={darkTheme} key="science" pageSize={6} country="in" category="science" />
          </Route>
          <Route exact path="/business">
            <News
            style={darkTheme}
              key="business"
              pageSize={6}
              country="in"
              category="business"
            />
          </Route>
          <Route exact path="/entertainment">
            <News
            style={darkTheme}
              key="entertainment"
              pageSize={6}
              country="in"
              category="entertainment"
            />
          </Route>
          <Route exact path="/science">
            <News style={darkTheme} key="science" country="in" category="science" />
          </Route>
          <Route exact path="/sports">
            <News style={darkTheme} key="sports" pageSize={6} country="in" category="sports" />
          </Route>
          <Route exact path="/health">
            <News style={darkTheme} key="health" pageSize={6} country="in" category="health" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
