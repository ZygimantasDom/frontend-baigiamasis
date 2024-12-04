import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import API_ROUTE from "../../utils/apiRoute";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import Divider from "@mui/material/Divider";

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
        `${API_ROUTE}/reservations/${reservation._id}`,
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
        <Typography variant="h4" gutterBottom>
          Visos rezervacijos
        </Typography>
        <Typography variant="body1">Jokių rezervacijų nerasta.</Typography>
      </div>
    );
  }

  return (
    <div
      style={{
        paddingBlock: "210px",
        paddingInline: "50px",
      }}
    >
      <Typography variant="h4" gutterBottom>
        Visos rezervacijos
      </Typography>
      <Card sx={{ maxWidth: 600, margin: "0 auto", marginTop: "20px" }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Nauja rezervacija
          </Typography>
          <Divider sx={{ marginBottom: "15px" }} />
          <Typography variant="body1">
            <strong>Naudotojo vardas:</strong>{" "}
            {reservation.userId?.name || "Nežinomas"}
          </Typography>
          <Typography variant="body1">
            <strong>El. paštas:</strong>{" "}
            {reservation.userId?.email || "Nežinomas"}
          </Typography>
          <Typography variant="body1">
            <strong>Telefono numeris:</strong>{" "}
            {reservation.userId?.phone || "Nežinomas"}
          </Typography>
          <Typography variant="body1">
            <strong>Data:</strong>{" "}
            {new Date(reservation.date).toLocaleDateString()}
          </Typography>
          <Typography variant="body1">
            <strong>Laikas:</strong> {reservation.time}
          </Typography>
          <Typography variant="body1">
            <strong>Paslauga:</strong>{" "}
            {reservation.serviceId?.name || "Nežinoma"}
          </Typography>
          <Typography variant="body1">
            <strong>Kaina:</strong>{" "}
            {reservation.serviceId?.price || "Nenurodyta"} €
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "flex-end", padding: "16px" }}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleEdit}
            sx={{ marginRight: "10px" }}
          >
            Koreguoti
          </Button>
          <Button variant="contained" color="error" onClick={handleDelete}>
            Ištrinti
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default ReservationsPage;
