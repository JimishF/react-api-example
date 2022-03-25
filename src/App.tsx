/* eslint-disable-next-line no-use-before-define */
import React from "react";
import NavBar from "./components/common/Navbar";
import ProductsPage from "./pages/ProductsPage";
import "./styles.css";

export default function App() {
  return (
    <div  className="bg-gray-800 min-h-screen ">
      <NavBar />
      <main>
        <ProductsPage />
      </main>
    </div>
  );
}
