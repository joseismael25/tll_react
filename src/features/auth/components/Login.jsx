import { Link } from "react-router-dom";

export const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    window.alert("La autenticación todavía no está conectada a un servidor.");
  };

  return (
    <main className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-10 col-md-7 col-lg-5">
          <div className="card shadow-sm">
            <div className="card-body p-4 p-md-5">
              <h1 className="h2 fw-bold text-center">Iniciar sesión</h1>
              <p className="text-secondary text-center mb-4">Accede a tu cuenta MotoRiders.</p>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="loginEmail" className="form-label">Correo electrónico</label>
                  <input id="loginEmail" name="email" type="email" className="form-control" autoComplete="email" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="loginPassword" className="form-label">Contraseña</label>
                  <input id="loginPassword" name="password" type="password" className="form-control" autoComplete="current-password" required />
                </div>
                <button type="submit" className="btn btn-warning w-100 fw-semibold">Entrar</button>
              </form>
              <p className="text-center mt-4 mb-0">¿No tienes cuenta? <Link to="/register">Regístrate</Link></p>
              <p className="text-center mt-2 mb-0"><Link to="/forgot-password">Olvidé mi contraseña</Link></p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
