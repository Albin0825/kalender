import BG from './background.jpg';
import {Route, Routes} from "react-router-dom"
import Hamburger from "./Hamburger"
import './App.css';

function App() {

  return <div>
      <div className="con">
        <img src={BG} alt="background image"/>
        <div className="window blur">
          <Routes>
            <Route path="/" element={<Hamburger />} />
          </Routes>
        </div>
      </div>
  </div>
}

export default App;
