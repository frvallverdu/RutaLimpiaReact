import { Link } from "react-router-dom";

function Inicio() {
    return (
        <main className="container py-4 py-md-5 home-page">
            <section className="home-hero rounded-4">
                <div className="row align-items-stretch g-0">
                    <div className="col-12 col-lg-7 d-flex align-items-center">
                        <div className="home-hero-copy p-4 p-md-5">
                            <p className="home-eyebrow mb-3">Ruta Limpia · consumo consciente</p>
                            <h1 className="fw-bold mb-3">Reciclar puede empezar en casa</h1>
                            <p className="lead text-secondary mb-4">
                                Encuentra productos para separar tus residuos y coordina un retiro de forma sencilla.
                            </p>
                            <div className="d-flex flex-column flex-sm-row gap-2">
                                <Link className="btn btn-success btn-lg" to="/productos">Explorar productos</Link>
                                <Link className="btn btn-outline-success btn-lg" to="/retiro">Cotizar retiro</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-5 home-visual" aria-hidden="true">
                        <span className="home-visual-icon">♻</span>
                    </div>
                </div>
            </section>

            <section className="row g-3 g-lg-4 mt-3 mt-md-4" aria-label="Servicios de Ruta Limpia">
                <div className="col-12 col-md-4">
                    <article className="home-service h-100">
                        <span className="service-icon" aria-hidden="true">🛍️</span>
                        <h2 className="h5 fw-bold">Productos útiles</h2>
                        <p className="text-secondary mb-0">Alternativas para reducir residuos y organizar el reciclaje en tu hogar.</p>
                    </article>
                </div>
                <div className="col-12 col-md-4">
                    <article className="home-service h-100">
                        <span className="service-icon" aria-hidden="true">🚚</span>
                        <h2 className="h5 fw-bold">Retiro coordinado</h2>
                        <p className="text-secondary mb-0">Cuéntanos qué material tienes y solicita una cotización.</p>
                    </article>
                </div>
                <div className="col-12 col-md-4">
                    <article className="home-service h-100">
                        <span className="service-icon" aria-hidden="true">🌱</span>
                        <h2 className="h5 fw-bold">Un cambio cercano</h2>
                        <p className="text-secondary mb-0">Separar los materiales es un primer paso para que tengan una nueva vida.</p>
                    </article>
                </div>
            </section>
        </main>
    );
}

export default Inicio;
