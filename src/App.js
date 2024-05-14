import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import Examples from "./components/Examples/Examples";
import News from "./components/News/News";
import Gallery from "./components/Gallery/Gallery";
import Application from "./components/Application/Application";
import DeviceExamples from "./components/Examples/DeviceExamples";

function App() {
  return (
      <Routes>
        <Route exact path={"/"} element={<Home />} />
        <Route path={"/examples"} element={<Examples />} />
        <Route path={"/news"} element={<News />} />
        <Route path={"/gallery"} element={<Gallery />} />
        <Route path={"/application"} element={<Application />} />
        <Route path={"/examples/devices/:title"} element={<DeviceExamples />} />
        <Route path={"/examples/traits/:title"} element={<DeviceExamples />} />
      </Routes>
  );
}

export default App;
