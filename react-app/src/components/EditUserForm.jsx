import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

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
      const response = await fetch(`http://localhost:3000/users/${user._id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Nepavyko atnaujinti vartotojo.");
      }

      alert("Vartotojas sėkmingai atnaujintas.");
      navigate("/users");
    } catch (error) {
      console.error("Klaida atnaujinant vartotoją:", error);
      alert("Klaida atnaujinant vartotoją.");
    }
  };

  return (
    <div style={{ maxWidth: "500px", margin: "0 auto", padding: "20px" }}>
      <h2>Koreguoti vartotoją</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label>
            Vardas:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div style={{ marginBottom: "10px" }}>
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
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>
            Telefonas:
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <button type="submit" style={{ marginRight: "10px" }}>
          Išsaugoti
        </button>
        <button type="button" onClick={() => navigate("/users")}>
          Atšaukti
        </button>
      </form>
    </div>
  );
};

export default EditUserForm;
