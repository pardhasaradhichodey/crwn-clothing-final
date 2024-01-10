import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/homepage";
import Header from "./components/header/header.component";
import ShopPage from "./pages/shop/shop.component";
import CollectionPage from "./pages/collection/CollectionPage";
import ContactUs from "./pages/contactus/ContactUs";
function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/shop" element={<ShopPage/>}/>
        <Route path="/shop/:collectionName" element={<CollectionPage />} />
        <Route path="/contact" element={<ContactUs/>} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
