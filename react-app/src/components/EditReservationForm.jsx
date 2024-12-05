import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import API_ROUTE from "../utils/apiRoute";

const EditReservationForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const reservation = location.state?.reservation;

  const [formData, setFormData] = React.useState({
    date: reservation?.date || "",
    time: reservation?.time || "",
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
      if (!reservation?._id) {
        throw new Error("Trūksta rezervacijos ID.");
      }

      const response = await fetch(
        `${API_ROUTE}/reservations/${reservation._id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const updatedReservation = await response.json();
      navigate("/all-reservations", {
        state: { reservation: updatedReservation },
      });
    } catch (error) {
      console.error("Klaida atnaujinant rezervaciją:", error.message);
    }
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: "linear-gradient(to right, #f3f4f6, #e3e6ea)",
        padding: 2,
      }}
    >
      <Card sx={{ maxWidth: 400, width: "100%", padding: 2, boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom align="center">
            Koreguoti rezervaciją
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Data"
              type="date"
              name="date"
              value={formData.date.split("T")[0]}
              onChange={handleChange}
              fullWidth
              min={today}
              sx={{ marginBottom: 2 }}
              required
            />
            <TextField
              label="Laikas"
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              fullWidth
              sx={{ marginBottom: 2 }}
              required
            />
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: 2,
              }}
            >
              <Button
                variant="contained"
                color="primary"
                type="submit"
                sx={{ flex: 1, marginRight: 1 }}
              >
                Išsaugoti
              </Button>
              <Button
                variant="contained"
                color="error"
                onClick={() => navigate("/all-reservations")}
                sx={{ flex: 1 }}
              >
                Atšaukti
              </Button>
            </Box>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
};

export default EditReservationForm;
