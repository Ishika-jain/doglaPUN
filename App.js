import React from "react";

import Mainbar from "./components/Mainbar/Mainbar";
import Dekho from "./components/Dekho/Dekho";
import Diseases from "./components/Diseases/Diseases";
import Search from "./components/search/Search";
import Selects from "./components/Selects/Selects";
import ImgCarousel from "./components/Carousel/ImgCarousel";
import Footer from "./components/Footer/Footer";
import Signin from "./components/Signin/Signin";
import { AuthContextProvider } from "./Context/AuthContext";

function App() {
  return (
    <div>
      <AuthContextProvider>
        <Mainbar />
        <Dekho />
        <Diseases />
        <Search />
        <Selects />
        <ImgCarousel />
        <Signin />
        <Footer />
      </AuthContextProvider>
    </div>
  );
}

export default App;
