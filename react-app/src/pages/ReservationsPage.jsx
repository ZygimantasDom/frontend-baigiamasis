import { useLocation, useNavigate } from "react-router-dom";

const ReservationsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const reservation = location.state?.reservation;

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
        <button
          onClick={() => navigate("/register")}
          style={{ marginTop: "20px" }}
        >
          Grįžti į registracijos formą
        </button>
      </div>
    </div>
  );
};

export default ReservationsPage;
