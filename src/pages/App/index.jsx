import logo from './logo.svg';
import './App.css';
import { ENTER_KEY } from "../../utils/Constants";
import {Link, Route, Routes} from "react-router-dom";
import LandingPage from "../LandingPage";
import {MY_LIST_PAGE} from "../../Routes";

function App() {



    const handleClick = () => {
        alert("I was clicked");
    }

    const handleEnter = (event) => {
        console.log("Mouse enter");
    }

    const handleKeyDown = (event) => {
        console.log("On Key down ", event.key.toUpperCase());
        if(event.key.toUpperCase() === ENTER_KEY) {
            // add item to the list
            console.log("Entered");
        }
    }

  return (
      <div className="App">
          <div className="header">
              This is the header
              <a href="my-lists" target="_blank" style={{color: "red"}}>Got to lists</a>

              <Link to={MY_LIST_PAGE} style={{color: "yellow"}}>Got to lists</Link>
          </div>
          <div className="main-container">
              <Routes>
                  <Route path={MY_LIST_PAGE} element={<LandingPage />} />
                  <Route path="*" element={<p>Nothing selected</p>} />
              </Routes>
          </div>
          <div className="footer">
              This is the footer
          </div>
      </div>
  );
}

export default App;
