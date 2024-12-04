const [search, setSearch] = useState("");

const filteredUsers = users.filter(
  (user) =>
    user.name.toLowerCase().includes(search.toLowerCase()) ||
    user.email.toLowerCase().includes(search.toLowerCase())
);

return (
  <div className="users-page">
    <h1>Vartotojų sąrašas</h1>
    <input
      type="text"
      placeholder="Ieškoti pagal vardą ar el. paštą"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      style={{ marginBottom: "20px", padding: "10px", width: "100%" }}
    />
    {loading ? (
      <p>Įkeliama...</p>
    ) : error ? (
      <p className="error">{error}</p>
    ) : filteredUsers.length === 0 ? (
      <p className="no-users">Vartotojų nerasta pagal įvestą paiešką.</p>
    ) : (
      <table>{/* ... */}</table>
    )}
  </div>
);
