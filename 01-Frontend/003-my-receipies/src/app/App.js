import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../styles/App.css";
import NavBar from "../components/layout/navbar/NavBar";
import Content from "../components/layout/content/Content";
import Footer from "../components/layout/footer/Footer";
import HomeScreen from "../screens/homeScreen/HomeScreen";
import ImpressumScreen from "../screens/impressumScreen/ImpressumScreen";

function App() {
  //HIER ist JS Logik
  // RETURN gibt UI Komponente wieder.
  return (
    <BrowserRouter>
      <NavBar />
      <Content>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/impressum" element={<ImpressumScreen />} />
        </Routes>
      </Content>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
