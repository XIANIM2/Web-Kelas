import { Route, Routes, BrowserRouter } from "react-router-dom";
import Footer from "./components/footer";
import MissingPage from "./pages/404";
import Home from "./pages/home";
import Jadwal from "./pages/jadwal";
import Activity from "./pages/kegiatan";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/schedule" element={<Jadwal />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="*" element={<MissingPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
