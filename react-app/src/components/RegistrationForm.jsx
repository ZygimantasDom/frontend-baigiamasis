import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import API_ROUTE from "../utils/apiRoute";
import "../scss/registrationForm.scss";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    serviceId: "",
    date: "",
    time: "",
  });
  const [services, setServices] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(`${API_ROUTE}/services`);
        const data = await response.json();
        setServices(data);
      } catch (error) {
        console.error("Klaida gaunant paslaugas:", error);
      }
    };
    fetchServices();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_ROUTE}/reservations`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.message || "Klaida registruojant rezervaciją."
        );
      }

      const data = await response.json();
      navigate("/reservations", { state: { reservation: data } });
    } catch (error) {
      console.error("Klaida registruojant rezervaciją:", error);
      alert(`Klaida: ${error.message}`);
    }
  };

  const today = new Date().toISOString().split("T")[0]; // Dabartinė data YYYY-MM-DD formatu

  return (
    <div className="registration-form-container">
      <h2>Registracijos forma</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Vardas:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Pavardė:
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          El. paštas:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Telefonas:
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            pattern="[0-9]*"
            required
          />
        </label>
        <label>
          Paslauga:
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
          >
            <option value="">Pasirinkite paslaugą</option>
            {services.map((service) => (
              <option key={service._id} value={service.name}>
                {service.name}
              </option>
            ))}
          </select>
        </label>
        <label>
          Data:
          <input
            type="date"
            name="date"
            value={formData.date}
            min={today}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Laikas:
          <input
            type="time"
            name="time"
            value={formData.time}
            step="900"
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Registruotis</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
