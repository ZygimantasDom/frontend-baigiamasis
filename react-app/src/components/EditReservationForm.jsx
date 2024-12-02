import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const EditReservationForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const reservation = location.state?.reservation;

  const [formData, setFormData] = useState({
    date: reservation?.date || "",
    time: reservation?.time || "",
    status: reservation?.status || "confirmed",
  });

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
      const response = await fetch(
        `http://localhost:3000/reservations/${reservation._id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Nepavyko atnaujinti rezervacijos.");
      }
      const updatedReservation = await response.json();
      navigate("/all-reservations", {
        state: { reservation: updatedReservation },
      });
    } catch (error) {
      console.error("Klaida atnaujinant rezervaciją:", error);
    }
  };

  return (
    <div style={{ maxWidth: "500px", margin: "0 auto", padding: "20px" }}>
      <h2>Koreguoti rezervaciją</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label>
            Data:
            <input
              type="date"
              name="date"
              value={formData.date.split("T")[0]}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>
            Laikas:
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <button type="submit" style={{ marginRight: "10px" }}>
          Išsaugoti
        </button>
        <button type="button" onClick={() => navigate("/reservations")}>
          Atšaukti
        </button>
      </form>
    </div>
  );
};

export default EditReservationForm;
