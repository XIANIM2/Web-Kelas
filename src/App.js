import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer";
import Progress from "./components/progress";
import MissingPage from "./pages/404";
import Home from "./pages/home";
import Jadwal from "./pages/jadwal";
import Activity from "./pages/kegiatan";
import Murid from "./pages/murid";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={Home()} />
        <Route path="/students" element={Murid()} />
        <Route path="/schedule" element={Jadwal()} />
        <Route path="/activity" element={Activity()} />
        <Route path="*" element={MissingPage()} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
