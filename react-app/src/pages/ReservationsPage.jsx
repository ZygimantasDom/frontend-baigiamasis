import { useLocation, useNavigate } from "react-router-dom";

const ReservationsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const reservation = location.state?.reservation;

  const handleDelete = async () => {
    if (!window.confirm("Ar tikrai norite ištrinti šią rezervaciją?")) {
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:3000/reservations/${reservation._id}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Nepavyko ištrinti rezervacijos.");
      }
      navigate("/register");
    } catch (error) {
      console.error("Klaida ištrinant rezervaciją:", error);
    }
  };

  const handleEdit = () => {
    navigate("/edit-reservation", { state: { reservation } });
  };

  if (!reservation) {
    return (
      <div style={{ padding: "20px" }}>
        <h1>Visos rezervacijos</h1>
        <p>Jokių rezervacijų nerasta.</p>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Visos rezervacijos</h1>
      <div
        style={{
          border: "1px solid #ccc",
          padding: "10px",
          marginTop: "20px",
        }}
      >
        <h2>Nauja rezervacija</h2>
        <p>
          <strong>Naudotojo vardas:</strong>{" "}
          {reservation.userId?.name || "Nežinomas"}
        </p>
        <p>
          <strong>El. paštas:</strong>{" "}
          {reservation.userId?.email || "Nežinomas"}
        </p>
        <p>
          <strong>Telefono numeris:</strong>{" "}
          {reservation.userId?.phone || "Nežinomas"}
        </p>
        <p>
          <strong>Data:</strong>{" "}
          {new Date(reservation.date).toLocaleDateString()}
        </p>
        <p>
          <strong>Laikas:</strong> {reservation.time}
        </p>
        <p>
          <strong>Paslauga:</strong> {reservation.serviceId?.name || "Nežinoma"}
        </p>
        <p>
          <strong>Kaina:</strong> {reservation.serviceId?.price || "Nenurodyta"}{" "}
          €
        </p>
        <button
          onClick={handleEdit}
          style={{ marginRight: "10px", marginTop: "20px" }}
        >
          Koreguoti
        </button>
        <button
          onClick={handleDelete}
          style={{ backgroundColor: "red", color: "white", marginTop: "20px" }}
        >
          Ištrinti
        </button>
      </div>
    </div>
  );
};

export default ReservationsPage;
