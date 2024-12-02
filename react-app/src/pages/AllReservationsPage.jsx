import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AllReservationsPage = () => {
  const [reservations, setReservations] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response = await fetch("http://localhost:3000/reservations");
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
    if (!window.confirm("Ar tikrai norite ištrinti šią rezervaciją?")) {
      return;
    }

    try {
      const response = await fetch(`http://localhost:3000/reservations/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Nepavyko ištrinti rezervacijos.");
      }

      setReservations((prev) =>
        prev.filter((reservation) => reservation._id !== id)
      );
    } catch (error) {
      console.error("Klaida ištrinant rezervaciją:", error);
      alert("Klaida ištrinant rezervaciją.");
    }
  };
  const handleEdit = (reservation) => {
    navigate("/edit-reservation", { state: { reservation } });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Visos rezervacijos</h1>
      {reservations.length === 0 ? (
        <p>Rezervacijų nerasta.</p>
      ) : (
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            marginTop: "20px",
          }}
        >
          <thead>
            <tr>
              <th style={{ border: "1px solid #ccc", padding: "10px" }}>
                Vardas
              </th>
              <th style={{ border: "1px solid #ccc", padding: "10px" }}>
                El. paštas
              </th>
              <th style={{ border: "1px solid #ccc", padding: "10px" }}>
                Telefonas
              </th>
              <th style={{ border: "1px solid #ccc", padding: "10px" }}>
                Data
              </th>
              <th style={{ border: "1px solid #ccc", padding: "10px" }}>
                Laikas
              </th>
              <th style={{ border: "1px solid #ccc", padding: "10px" }}>
                Paslauga
              </th>
              <th style={{ border: "1px solid #ccc", padding: "10px" }}>
                Veiksmai
              </th>
            </tr>
          </thead>
          <tbody>
            {reservations.map((reservation) => (
              <tr key={reservation._id}>
                <td style={{ border: "1px solid #ccc", padding: "10px" }}>
                  {reservation.userId?.name || "Nežinomas"}
                </td>
                <td style={{ border: "1px solid #ccc", padding: "10px" }}>
                  {reservation.userId?.email || "Nežinomas"}
                </td>
                <td style={{ border: "1px solid #ccc", padding: "10px" }}>
                  {reservation.userId?.phone || "Nežinomas"}
                </td>
                <td style={{ border: "1px solid #ccc", padding: "10px" }}>
                  {new Date(reservation.date).toLocaleDateString()}
                </td>
                <td style={{ border: "1px solid #ccc", padding: "10px" }}>
                  {reservation.time}
                </td>
                <td style={{ border: "1px solid #ccc", padding: "10px" }}>
                  {reservation.serviceId?.name || "Nežinoma"}
                </td>
                <td style={{ border: "1px solid #ccc", padding: "10px" }}>
                  <button
                    onClick={() => handleEdit(reservation)}
                    style={{
                      marginRight: "10px",
                      backgroundColor: "#4CAF50",
                      color: "white",
                      border: "none",
                      padding: "5px 10px",
                    }}
                  >
                    Koreguoti
                  </button>
                  <button
                    onClick={() => handleDelete(reservation._id)}
                    style={{
                      backgroundColor: "red",
                      color: "white",
                      border: "none",
                      padding: "5px 10px",
                    }}
                  >
                    Ištrinti
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
