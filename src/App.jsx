import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./component/layout/Header";
import Footer from "./component/layout/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
