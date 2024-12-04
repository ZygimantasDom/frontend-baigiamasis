import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import AboutPage from "./pages/about/AboutPage";
import Header from "./components/Header";
import ServicesPage from "./pages/servicesPage/ServicesPage";
import RegistrationPage from "./pages/registration/RegistrationPage";
import ReservationsPage from "./pages/reservations/ReservationsPage";
import EditReservationForm from "./components/EditReservationForm";
import AllReservationsPage from "./pages/reservations/AllReservationsPage";
import EditUserForm from "./components/EditUserForm";
import Footer from "./components/Footer";
import UsersPage from "./pages/users/UsersPage";
import NotFoundPage from "./pages/notFound/NotFoundPage";

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
        <Route path="/users" element={<UsersPage />} />
        <Route path="/edit-user" element={<EditUserForm />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
