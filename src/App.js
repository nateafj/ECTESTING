import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HeaderFooter from "./components/HeaderFooter";
import Product from "./components/Product";
import Home from "./components/Home";
import Contact from "./components/Contact";




function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route  element={<HeaderFooter/>}>
        <Route path="/" element={<Home/>}/> 
        <Route path="/products" element={<Product/>}/>
        <Route path="/contact" element={<Contact/>}/>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
