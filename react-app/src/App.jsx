import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Header from "./components/Header";
import ServicesPage from "./pages/ServicesPage";
import RegistrationPage from "./pages/RegistrationPage";
import ReservationsPage from "./pages/ReservationsPage";
import EditReservationForm from "./components/EditReservationForm";
import AllReservationsPage from "./pages/AllReservationsPage";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/reservations" element={<ReservationsPage />} />
        <Route path="/all-reservations" element={<AllReservationsPage />} />
        <Route path="/edit-reservation" element={<EditReservationForm />} />
      </Routes>
    </Router>
  );
}

export default App;
