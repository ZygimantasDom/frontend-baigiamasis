import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import API_ROUTE from "../utils/apiRoute";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const EditUserForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const user = location.state?.user;

  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    phone: user?.phone || "",
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
      const response = await fetch(`${API_ROUTE}/users/${user._id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Nepavyko atnaujinti vartotojo.");
      }

      navigate("/users");
    } catch (error) {
      console.error("Klaida atnaujinant vartotoją:", error);
    }
  };

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
            Koreguoti vartotoją
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Vardas"
              name="name"
              value={formData.name}
              onChange={handleChange}
              fullWidth
              sx={{ marginBottom: 2 }}
              required
            />
            <TextField
              label="El. paštas"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              sx={{ marginBottom: 2 }}
              required
            />
            <TextField
              label="Telefonas"
              name="phone"
              type="tel"
              value={formData.phone}
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
                type="submit"
                sx={{
                  flex: 1,
                  marginRight: 1,
                  backgroundColor: "#B1C29E",
                  "&hover": {
                    backgroundColor: "#DEAA79",
                  },
                }}
              >
                Išsaugoti
              </Button>
              <Button
                variant="contained"
                onClick={() => navigate("/users")}
                sx={{
                  flex: 1,
                  backgroundColor: "#659287",
                  "&hover": {
                    backgroundColor: "#FFE6A9",
                  },
                }}
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

export default EditUserForm;
