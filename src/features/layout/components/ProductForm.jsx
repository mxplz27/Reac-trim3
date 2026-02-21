const ProductForm = () => {
  return (
    <div className="col-md-3">
      <div className="card shadow-sm w-100" style={{ minWidth: "350px" }}>
        <div className="card-header bg-primary text-white">
          Agregar producto
        </div>

        <div className="card-body">
          <form>

            <div className="mb-3">
              <label className="form-label">
                Nombre del producto
              </label>
              <input type="text" className="form-control" />
            </div>

            <div className="row mb-3">
              <div className="col">
                <label className="form-label">Precio</label>
                <input type="number" className="form-control" />
              </div>

              <div className="col">
                <label className="form-label">Stock</label>
                <input type="number" className="form-control" />
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">
                Categoría
              </label>
              <select className="form-select">
                <option>Selecciona una categoría</option>
                <option>Tecnología</option>
                <option>Hogar</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label">
                URL de imagen
              </label>
              <input type="text" className="form-control" />
            </div>

            <div className="mb-3">
              <label className="form-label">
                Descripción
              </label>
              <textarea className="form-control"></textarea>
            </div>

            <div className="d-grid gap-2">
              <button className="btn btn-success">
                Agregar al catálogo
              </button>

              <button type="reset" className="btn btn-outline-secondary">
                Limpiar
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  )
}

export default ProductForm;