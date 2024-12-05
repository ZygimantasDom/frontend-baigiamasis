import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API_ROUTE from "../../utils/apiRoute";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import "../../scss/allReservationsPage.scss";

const AllReservationsPage = () => {
  const [reservations, setReservations] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response = await fetch(`${API_ROUTE}/reservations`);
        if (!response.ok) {
          throw new Error("Nepavyko gauti rezervacijų.");
        }
        const data = await response.json();
        setReservations(data);
      } catch (error) {
        console.error("Klaida gaunant rezervacijas:", error);
      }
    };

    fetchReservations();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${API_ROUTE}/reservations/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Nepavyko ištrinti rezervacijos.");
      }

      setReservations((prev) => prev.filter((res) => res._id !== id));
    } catch (error) {
      console.error("Klaida ištrinant rezervaciją:", error);
    }
  };

  return (
    <div
      className="reservations-page"
      style={{
        background: reservations.length === 0 ? "#f4f4f4" : "inherit",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: reservations.length === 0 ? "center" : "flex-start",
      }}
    >
      <h1>Visos rezervacijos</h1>
      {reservations.length === 0 ? (
        <p style={{ fontSize: "18px", color: "#888" }}>Rezervacijų nėra</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Vardas</th>
              <th>El. paštas</th>
              <th>Telefonas</th>
              <th>Data</th>
              <th>Laikas</th>
              <th>Paslauga</th>
              <th>Veiksmai</th>
            </tr>
          </thead>
          <tbody>
            {reservations.map((reservation) => (
              <tr key={reservation._id}>
                <td data-label="Vardas">{reservation.userId?.name}</td>
                <td data-label="El. paštas">{reservation.userId?.email}</td>
                <td data-label="Telefonas">{reservation.userId?.phone}</td>
                <td data-label="Data">
                  {new Date(reservation.date).toLocaleDateString()}
                </td>
                <td data-label="Laikas">{reservation.time}</td>
                <td data-label="Paslauga">{reservation.serviceId?.name}</td>
                <td className="actions" data-label="Veiksmai">
                  <button
                    className="edit-btn"
                    onClick={() =>
                      navigate("/edit-reservation", { state: { reservation } })
                    }
                  >
                    <FaEdit />
                  </button>
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(reservation._id)}
                  >
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AllReservationsPage;
