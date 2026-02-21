import { ProductCard } from "./Cards"

const ProductList = () => {
  return (
    <div className="col-md-12">
      <div className="card shadow-sm h-100 w-100 mb-4 ">
        <div className="card-header bg-secondary text-white">
          Productos
        </div>

        <div className="card-body">
          <div className="row">

            <ProductCard 
              imagen="/img/auriculares.webp"
              nombre="Auriculares Bluetooth"
              precio="159.900"
              estado="En stock"
            />

            <ProductCard 
              imagen="/img/teclado.jpg"
              nombre="Teclado Mecánico"
              precio="249.000"
              estado="Pocas unidades"
            />

            <ProductCard 
              imagen="/img/mouse.jpg"
              nombre="Mouse alambrico"
              precio="49.900"
              estado="En stock"
            />

            <ProductCard 
              imagen="/img/camara.jpg"
              nombre="Cámara Compacta"
              precio="1.099.000"
              estado="Agotado"
            />

          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductList;