import { Route, Routes } from "react-router-dom";

import login from "./page/login";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element ={<login />} />      
      </Routes>
    </div>
  );
}

export default App;