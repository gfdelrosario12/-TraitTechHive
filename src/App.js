import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import Examples from "./components/Examples";
import News from "./components/News";
import Gallery from "./components/Gallery";
import Application from "./components/Application";

function App() {
  return (
      <Routes>
        <Route exact path={"/"} element={<Home />} />
        <Route path={"/examples"} element={<Examples />} />
        <Route path={"/news"} element={<News />} />
        <Route path={"/gallery"} element={<Gallery />} />
        <Route path={"/application"} element={<Application />} />
      </Routes>
  );
}

export default App;
