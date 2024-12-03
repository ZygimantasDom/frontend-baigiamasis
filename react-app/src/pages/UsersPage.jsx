import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:3000/users");
        if (!response.ok) {
          throw new Error("Nepavyko gauti vartotojų.");
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Klaida gaunant vartotojus:", error);
      }
    };

    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/users/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Nepavyko ištrinti vartotojo.");
      }

      setUsers((prev) => prev.filter((user) => user._id !== id));
    } catch (error) {
      console.error("Klaida ištrinant vartotoją:", error);
    }
  };

  const handleEdit = (user) => {
    navigate("/edit-user", { state: { user } });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Vartotojų sąrašas</h1>
      {users.length === 0 ? (
        <p>Vartotojų nerasta.</p>
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
                Veiksmai
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td style={{ border: "1px solid #ccc", padding: "10px" }}>
                  {user.name}
                </td>
                <td style={{ border: "1px solid #ccc", padding: "10px" }}>
                  {user.email}
                </td>
                <td style={{ border: "1px solid #ccc", padding: "10px" }}>
                  {user.phone}
                </td>
                <td style={{ border: "1px solid #ccc", padding: "10px" }}>
                  <button
                    onClick={() => handleEdit(user)}
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
                    onClick={() => handleDelete(user._id)}
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

export default UsersPage;
