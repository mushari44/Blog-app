import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Create from "./Pages/Create";
import NavBar from "./Components/NavBar";
import Favorite from "./Pages/Favorite";
function App() {
  return (
    <div>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/create" element={<Create />}></Route>
        <Route path="/favorites" element={<Favorite />}></Route>
      </Routes>
    </div>
  );
}

export default App;
