import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API_ROUTE from "../../utils/apiRoute";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import "../../scss/usersPage.scss";

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(`${API_ROUTE}/users`);
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Klaida gaunant vartotojus:", error);
      }
    };

    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Ar tikrai norite ištrinti šį vartotoją?")) {
      return;
    }

    try {
      const response = await fetch(`${API_ROUTE}/users/${id}`, {
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

  return (
    <div className="users-page">
      <h1>Vartotojų sąrašas</h1>
      <table>
        <thead>
          <tr>
            <th>Vardas</th>
            <th>El. paštas</th>
            <th>Telefonas</th>
            <th>Veiksmai</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td className="actions">
                <button
                  className="edit-btn"
                  onClick={() => navigate("/edit-user", { state: { user } })}
                >
                  <FaEdit />
                </button>
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(user._id)}
                >
                  <FaTrashAlt />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersPage;
