import Clubs from "./pages/Clubs";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/clubs" element={<Clubs />} />
      <Route path="/details" element={<Details />} />
    </Routes>
  );
}

export default App;
