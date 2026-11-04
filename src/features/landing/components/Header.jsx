import { NavLink } from "react-router-dom";

const navigationLinks = [
  { to: "/", label: "Inicio", end: true },
  { to: "/login", label: "Iniciar sesión" },
  { to: "/register", label: "Crear cuenta" },
  { to: "/api", label: "Rick & Morty" },
  { to: "/props", label: "Props" },
];

export const Header = () => (
  <header>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" aria-label="Navegación principal">
      <div className="container">
        <NavLink className="navbar-brand fw-bold text-uppercase" to="/">
          <span className="text-warning">Moto</span>Riders
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Mostrar u ocultar navegación"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {navigationLinks.map(({ to, label, end }) => (
              <li className="nav-item" key={to}>
                <NavLink
                  to={to}
                  end={end}
                  className={({ isActive }) =>
                    `nav-link${isActive ? " active text-warning" : ""}`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  </header>
);
