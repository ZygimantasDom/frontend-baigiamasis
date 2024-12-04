import React, { useEffect, useState } from "react";
import axios from "axios";
import API_ROUTE from "../../utils/apiRoute";
import "../../scss/servicesPage.scss";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import massage1 from "../../assets/massage1.jpg";
import massage2 from "../../assets/massage2.jpg";
import massage3 from "../../assets/massage3.jpg";
import massage4 from "../../assets/massage4.jpg";
import massage5 from "../../assets/massage5.jpg";

const ServicesPage = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const images = [massage1, massage2, massage3, massage4, massage5];

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get(`${API_ROUTE}/services`);
        setServices(response.data);
      } catch (err) {
        setError("Nepavyko gauti paslaugų.");
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (loading) return <div className="loading">Įkeliama...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="services-page">
      <h1>Paslaugos</h1>
      <div className="services-list">
        {services.map((service, index) => (
          <Card key={service._id} sx={{ maxWidth: 345, margin: 2 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={images[index % images.length]}
                alt={service.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {service.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {service.description || "Aprašymas nėra pateiktas."}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: "text.primary", marginTop: 1 }}
                >
                  {service.price} €
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
