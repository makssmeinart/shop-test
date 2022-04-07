import React, { useEffect } from "react";
import "./App.css";
import { Header, PageHolder } from "../../f1.main/m1.components";
import {
  getCartLocalStorage,
  setCartLocalStorage,
} from "../../f1.main/m4.utils/handleCartLocalStorage";

function App() {
  const cartLs = getCartLocalStorage();

  useEffect(() => {
    if (cartLs === null) {
      setCartLocalStorage([]);
    }
  }, []);

  return (
    <div className="App">
      <Header />
      <PageHolder />
    </div>
  );
}

export default App;
