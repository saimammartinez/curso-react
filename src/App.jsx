import React from "react";
import Header from "./components/Header";
import Wishlist from "./components/Wishlist";

function App(props) {
  return (
    <>
      <Header origen="mi componente App" />
      <Wishlist />
    </>
  );
}

export default App;
