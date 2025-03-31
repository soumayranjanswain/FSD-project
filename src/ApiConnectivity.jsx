import axios from "axios";
import { useEffect, useState } from "react";

function ApiConnectivity() {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://jsonplaceholder.typicode.com/users");
        setUser(response.data);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching users:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <table
        border={1}
        width={"100%"}
        style={{ textAlign: "center", color: "green" }}
      >
        <thead>
          <tr>
            <th>Sl No.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>UserName</th>
            <th>Website</th>
            <th>Company Name</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {user.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>{item.username}</td>
              <td>{item.website}</td>
              <td>{item.company.name}</td>
              <td>
                <p>Street: {item.address.street}</p>
                <p>City: {item.address.city}</p>
                <p>Zipcode: {item.address.zipcode}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default ApiConnectivity;