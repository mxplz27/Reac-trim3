import { Header } from "./features/layout/components/Header";
import { Content } from "./features/layout/components/Content";
import { Footer } from "./features/layout/components/Footer";
import Article from "./features/layout/components/Article";
import Props from "./features/layout/components/Props";
import ProductPage from "./features/layout/components/ProductPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/articles" element={<Article />} />
        <Route path="/props" element={<Props />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/" element={<ProductPage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;