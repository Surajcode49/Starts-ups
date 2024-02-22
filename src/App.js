import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./styles/app.scss";
import "./styles/Header.scss";
import Home from "./components/home/Home";
import Headers from "./components/layout/Header";

function App() {
  return (
  <Router>
    <Headers/>
   <Routes>
      <Route path="/"element= {<Home/>}/>



   </Routes>


  </Router>
  )
}

export default App;
