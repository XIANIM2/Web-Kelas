import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer";
import Progress from "./components/progress";
import Home from "./pages/home";
import Jadwal from "./pages/jadwal";
import Murid from "./pages/murid";

function App() {
  return (
    <BrowserRouter>
      <Progress />
      <Routes>
        <Route path="/" element={Home()} />
        <Route path="/students" element={Murid()} />
        <Route path="/schedule" element={Jadwal()} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
