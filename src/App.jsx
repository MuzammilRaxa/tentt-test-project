import { useState } from "react";
import Header from "./components/layouts/header/Header";
import ProductSection from "./components/layouts/products/ProductContent";

function App() {
  return (
    <div className="overflow-hidden">
      <Header />
      <ProductSection />
    </div>
  );
}

export default App;
