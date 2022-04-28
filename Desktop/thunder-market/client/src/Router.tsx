import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Join from "./pages/Join";
import Upload from "./pages/Upload";
import Login from "./pages/Login";
import ProductDetail from "./pages/ProductDetail";
import { IUser } from "./atoms";
import Shop from "./pages/Shop";


const Router = ({ isLogIn }: IUser) => {
  return (
    <>
      {isLogIn ? (
        <Routes>
          <Route path="/" element={<Home isLogIn={isLogIn} />} />
          <Route path="/upload" element={<Upload isLogIn={isLogIn} />} />
          <Route path="/product/:id" element={<ProductDetail isLogIn={isLogIn} />} />
          <Route path="/shop" element={<Shop isLogIn={isLogIn} />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Home isLogIn={isLogIn} />} />
          <Route path="/join" element={<Join isLogIn={isLogIn} />} />
          <Route path="/login" element={<Login isLogIn={isLogIn} />} />
          <Route path="/shop" element={<Shop isLogIn={isLogIn} />} />
          <Route path="/product/:id" element={<ProductDetail isLogIn={isLogIn} />} />
        </Routes>
      )}
    </>
  );
};

export default Router;
