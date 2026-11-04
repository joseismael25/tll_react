import { Link } from "react-router-dom";

export const Register = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    window.alert("El registro visual está listo, pero aún requiere conexión a un backend.");
  };

  return (
    <main className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-10 col-md-8 col-lg-6">
          <div className="card shadow-sm">
            <div className="card-body p-4 p-md-5">
              <h1 className="h2 fw-bold text-center">Crear cuenta</h1>
              <p className="text-secondary text-center mb-4">Únete a la comunidad MotoRiders.</p>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="registerName" className="form-label">Nombre completo</label>
                  <input id="registerName" name="name" className="form-control" autoComplete="name" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="registerEmail" className="form-label">Correo electrónico</label>
                  <input id="registerEmail" name="email" type="email" className="form-control" autoComplete="email" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="registerPassword" className="form-label">Contraseña</label>
                  <input id="registerPassword" name="password" type="password" minLength={8} className="form-control" autoComplete="new-password" required />
                  <div className="form-text">Usa al menos 8 caracteres.</div>
                </div>
                <button type="submit" className="btn btn-warning w-100 fw-semibold">Crear cuenta</button>
              </form>
              <p className="text-center mt-4 mb-0">¿Ya tienes cuenta? <Link to="/login">Inicia sesión</Link></p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
