import { Link } from "react-router-dom";

export const Footer = () => (
  <footer className="bg-dark text-white py-4 mt-auto">
    <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
      <Link className="navbar-brand fw-bold mb-0" to="/">
        <span className="text-warning">Moto</span>Riders
      </Link>
      <p className="small text-white-50 mb-0">© {new Date().getFullYear()} MotoRiders. Todos los derechos reservados.</p>
      <a className="link-light" href="mailto:contacto@motoriders.example">Contáctanos</a>
    </div>
  </footer>
);
