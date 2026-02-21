export const ProductCard = ({ imagen, nombre, precio, estado }) => {
  return (
    <div className="col-md-6 mb-3">
      <div className="card h-100 shadow-sm">

        <img
          src={import.meta.env.BASE_URL + imagen}
          className="card-img-top"
          alt={nombre}
        />

        <div className="card-body">
          <h5 className="card-title">{nombre}</h5>

          <p className="fw-bold">
            COP ${precio}
          </p>

          <span className="badge bg-success">
            {estado}
          </span>

          <div className="mt-3">
            <button className="btn btn-outline-primary btn-sm me-2">
              Editar
            </button>
            <button className="btn btn-outline-danger btn-sm">
              Eliminar
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}