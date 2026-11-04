import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./features/landing/components/Header.jsx";
import { Main } from "./features/landing/components/Main.jsx";
import { Footer } from "./features/landing/components/Footer.jsx";
import { Rickandmorty } from "./features/landing/components/Rickandmorty.jsx";
import { Props } from "./features/landing/components/Props.jsx";
import { Login } from "./features/auth/components/Login.jsx";
import { Register } from "./features/auth/components/Register.jsx";
import { ForgotPassword } from "./features/auth/components/ForgotPassword.jsx";

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, "")}>
      <div className="d-flex flex-column min-vh-100">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/api" element={<Rickandmorty />} />
          <Route path="/props" element={<Props />} />
          <Route path="*" element={<Main />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
