import React, { useState } from "react";
// import axios from "axios";
import "./App.css";
function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  // const getData = useEffect(() => {
  //   const fetchUsers = async () => {
  //     setLoading(true);
  //     const res = await axios.get("https://reqres.in/api/users?page=1");
  //     setUsers(res.data.data);
  //     setLoading(false);
  //   };

  //   fetchUsers();
  // }, []);
  const getData = async () => {
    setLoading(true);
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    setUsers(data);
    setLoading(false);
  };
  return (
    <div className="App">
      <nav>
        <h1>DXT Pvt Ltd</h1>
        <button onClick={getData}>Get Users</button>
      </nav>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="card-grid">
          {users.map((user) => (
            <div key={user.id} className="card">
              <h2>{`${user.name}`}</h2>
              <p>username:-{user.username}</p>
              <p>email:-{user.email}</p>
              <p>Phone:-{user.phone}</p>
              <p>Website:-{user.Website}</p>
              <p>Company:-{user.company.name}</p>
              <p>City:-{user.address.city}</p>
              <p>zipcode:-{user.address.zipcode}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
