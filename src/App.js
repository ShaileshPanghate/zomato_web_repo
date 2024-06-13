
import './App.css';
import { useState } from 'react';
import Table from './Table';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import LogIn from './Pages/LogIn';
import Product from './Pages/AddRestro';
import Cart from './Pages/Cart';
import Add_pay from './Pages/Add_pay';
import AddRestro from './Pages/AddRestro';


function App() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");

  let obj = {
    name: name,
    email: email,
    number: number,
    address: address,
  }

  return (
    <Router>
      <div className="App">

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<LogIn />} />
          <Route exact path="/addrestro" element={<AddRestro />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/address_payment" element={<Add_pay />} />
        </Routes>
        
      </div>
    </Router>


  );
}

export default App;

