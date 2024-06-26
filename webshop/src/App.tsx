import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import AddProduct from "./pages/admin/AddProduct";
import AdminHome from "./pages/admin/AdminHome";
import BookSupplier from "./pages/admin/BookSupplier";
import EditProduct from "./pages/admin/EditProduct";
import MaintainCategories from "./pages/admin/MaintainCategories";
import MaintainImages from "./pages/admin/MaintainImages";
import MaintainProducts from "./pages/admin/MaintainProducts";
import MaintainShops from "./pages/admin/MaintainShops";
import Supplier from "./pages/admin/Supplier";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Cart from "./pages/global/Cart";
import { ContactUs } from "./pages/global/ContactUs";
import HomePage from "./pages/global/HomePage";
import NotFound from "./pages/global/NotFound";
import Shops from "./pages/global/Shops";
import SingleProduct from "./pages/global/SingleProduct";
import { AuthContext } from "./store/AuthContext";

function App() {
  const { loggedIn } = useContext(AuthContext);

  return (
    <div className="App">
      <NavigationBar />

      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="contactus" element={<ContactUs />} />
        <Route path="shops" element={<Shops />} />
        <Route path="cart" element={<Cart />} />
        {/* <Route path="product/:productId" element={<SingleProduct />} /> */}
        <Route path="product/:productTitle" element={<SingleProduct />} />
        {loggedIn && (
          <>
            <Route path="admin" element={<AdminHome />} />
            <Route path="admin/add-product" element={<AddProduct />} />
            <Route path="admin/edit-product/:index" element={<EditProduct />} />
            <Route
              path="admin/maintain-products"
              element={<MaintainProducts />}
            />
            <Route path="admin/supplier" element={<Supplier />} />
            <Route path="admin/book-supplier" element={<BookSupplier />} />
            <Route
              path="admin/maintain-categories"
              element={<MaintainCategories />}
            />
            <Route path="admin/maintain-shops" element={<MaintainShops />} />
            <Route path="admin/maintain-images" element={<MaintainImages />} />
          </>
        )}

        {loggedIn === false && (
          // <Route path="admin/*" element={<Login />} />
          <Route path="admin/*" element={<Navigate to={"/login"} />} />
        )}

        {/* loggedIn === false, siis näita neid */}
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        {/* loggedIn === true, siis manuaalselt /login või /signup lehele minnes, suuna /admin */}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
