import ProductList from "./ProductList";
import ProductForm from "./ProductForm";

const ProductPage = () => {
  return (
    <div className="container-fluid px-4 my-5">
      <div className="row g-4">

        <div className="col-12 col-lg-8">
          <ProductList />
        </div>

        <div className="col-12 col-lg-4">
          <ProductForm />
        </div>

      </div>
    </div>
  );
};

export default ProductPage;