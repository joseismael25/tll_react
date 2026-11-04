const motorcycles = [
  {
    id: 1,
    name: "Naked 650",
    category: "Naked",
    engine: "649 cc",
    power: "68 HP",
    price: "$32.900.000",
    image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=900&h=600&fit=crop&q=80",
    alt: "Motocicleta tipo naked estacionada en carretera",
  },
  {
    id: 2,
    name: "Adventure 800",
    category: "Adventure",
    engine: "799 cc",
    power: "95 HP",
    price: "$48.500.000",
    image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=900&h=600&fit=crop&q=80",
    alt: "Motocicleta adventure preparada para viajar",
  },
  {
    id: 3,
    name: "Sport 600",
    category: "Deportiva",
    engine: "599 cc",
    power: "120 HP",
    price: "$45.700.000",
    image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=900&h=600&fit=crop&q=80",
    alt: "Motocicleta deportiva de alto rendimiento",
  },
];

export const Main = () => (
  <main>
    <section className="bg-dark text-white py-5">
      <div className="container py-5 text-center">
        <span className="badge text-bg-warning mb-3">PASIÓN SOBRE DOS RUEDAS</span>
        <h1 className="display-3 fw-bold">ENCUENTRA TU PRÓXIMA MOTO</h1>
        <p className="lead text-white-50 mx-auto mb-4 col-12 col-md-9 col-lg-8">
          Explora motocicletas para la ciudad, la aventura y la velocidad.
          Compara sus características y encuentra la que va contigo.
        </p>
        <a className="btn btn-warning btn-lg fw-semibold" href="#catalogo">
          Ver catálogo
        </a>
      </div>
    </section>

    <section className="py-4 bg-light">
      <div className="container">
        <div className="row g-3 text-center">
          <div className="col-12 col-md-4">
            <div className="p-3 h-100">
              <div className="fs-2" aria-hidden="true">🏍️</div>
              <h2 className="h5 fw-bold">Variedad</h2>
              <p className="mb-0 text-dark">Modelos para cada estilo de conducción.</p>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="p-3 h-100">
              <div className="fs-2" aria-hidden="true">🛠️</div>
              <h2 className="h5 fw-bold">Asesoría</h2>
              <p className="mb-0 text-dark">Información clara para elegir mejor.</p>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="p-3 h-100">
              <div className="fs-2" aria-hidden="true">🛡️</div>
              <h2 className="h5 fw-bold">Seguridad</h2>
              <p className="mb-0 text-dark">Recomendaciones para rodar responsablemente.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="catalogo" className="container py-5">
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-end gap-2 mb-4">
        <div>
          <p className="text-warning fw-bold text-uppercase mb-1">Catálogo destacado</p>
          <h2 className="display-6 fw-bold mb-1">MOTOCICLETAS</h2>
          <p className="text-dark mb-0">Conoce algunos modelos de nuestra selección.</p>
        </div>
        <span className="badge text-bg-dark fs-6">{motorcycles.length} modelos</span>
      </div>

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {motorcycles.map((motorcycle) => (
          <div className="col" key={motorcycle.id}>
            <article className="card h-100 shadow-sm">
              <div className="ratio ratio-3x2">
                <img
                  src={motorcycle.image}
                  className="w-100 h-100 object-fit-cover"
                  alt={motorcycle.alt}
                  width="900"
                  height="600"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="card-body d-flex flex-column">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <span className="badge text-bg-warning">{motorcycle.category}</span>
                  <span className="text-dark small">Ref. {String(motorcycle.id).padStart(3, "0")}</span>
                </div>
                <h3 className="card-title h4 fw-bold">{motorcycle.name}</h3>
                <div className="row g-2 text-dark small mb-3">
                  <div className="col-6"><strong className="text-dark">Motor:</strong> {motorcycle.engine}</div>
                  <div className="col-6"><strong className="text-dark">Potencia:</strong> {motorcycle.power}</div>
                </div>
                <div className="mt-auto border-top pt-3">
                  <p className="h4 fw-bold mb-3">{motorcycle.price} <span className="fs-6 fw-normal text-dark">COP</span></p>
                  <a className="btn btn-outline-dark w-100" href="#contacto">
                    Solicitar información
                  </a>
                </div>
              </div>
            </article>
          </div>
        ))}
      </div>
    </section>

    <section id="contacto" className="bg-warning py-5">
      <div className="container text-center">
        <h2 className="fw-bold">TU PRÓXIMA AVENTURA COMIENZA AQUÍ</h2>
        <p className="mb-2">¿Tienes dudas sobre un modelo? Explora sus características y compara antes de elegir.</p>
        <p className="mb-0">Usa siempre casco certificado y equipo de protección.</p>
      </div>
    </section>
  </main>
);
