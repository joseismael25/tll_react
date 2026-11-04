import { Link } from "react-router-dom";

export const ForgotPassword = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    window.alert("La recuperación de contraseña requiere un servicio de correo en el backend.");
  };

  return (
    <main className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-10 col-md-7 col-lg-5">
          <div className="card shadow-sm">
            <div className="card-body p-4 p-md-5">
              <h1 className="h2 fw-bold text-center">Recuperar contraseña</h1>
              <p className="text-secondary text-center mb-4">Ingresa tu correo electrónico.</p>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="forgotEmail" className="form-label">Correo electrónico</label>
                  <input id="forgotEmail" name="email" type="email" className="form-control" autoComplete="email" required />
                </div>
                <button type="submit" className="btn btn-warning w-100 fw-semibold">Enviar instrucciones</button>
              </form>
              <p className="text-center mt-4 mb-0"><Link to="/login">Volver al inicio de sesión</Link></p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
