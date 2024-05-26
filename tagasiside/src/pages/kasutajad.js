import React, { useEffect, useState } from "react";

function Kasutajad() {
  const [users, setUsers] = useState([]);
  const [dbUsers, setDbusers] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((json) => {
        setUsers(json || []);
        setDbusers(json || []);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, [url]);

  if (users?.length > 0) {
    findIndexForFirst("Lucio_Hettinger@annie.ca");
    findFirstUserwith("C");
    sumAllIds();
    allEmails();
  }

  function reset() {
    setUsers(dbUsers);
  }

  function filter10charOrMore() {
    const result = users.filter((a) => a.username.length >= 10);
    setUsers(result);
  }

  function remove(id) {
    setUsers(users.filter((user) => user.id !== id));
  }

  function findIndexForFirst(emailString) {
    const userIndex = users.findIndex((user) => user.email === emailString);
    console.log(`Index of the user with email ${emailString}: ${userIndex}`);
  }

  function findFirstUserwith(char) {
    const user = users.find((u) => u.name.startsWith(char));
    console.log(`First user with letter ${char} is ${user.name}`);
  }

  function sortByLat() {
    users.sort(
      (a, b) => parseFloat(a.address.geo.lat) - parseFloat(b.address.geo.lat)
    );
    setUsers(users.slice());
  }

  function filterByPositiveLng() {
    const result = users.filter(
      (user) => parseFloat(user.address.geo.lng) >= 0
    );
    setUsers(result);
  }

  function sumAllIds() {
    let sum = 0;
    users.forEach((u) => (sum = sum + u.id));
    console.log(`Sum of all IDs: ${sum}`);
  }

  function allEmails() {
    let emails = users.map((u) => u.email);
    console.log("Email array:", emails);
  }

  function replaceAllAsWithEs() {
    const result = users.map((u) => ({
      ...u,
      company: {
        ...u.company,
        catchPhrase: u.company.catchPhrase.replaceAll("a", "e"),
      },
    }));
    console.log("a=>e", result);

    setUsers(result);
  }

  return (
    <div>
      <h1>Kasutajad</h1>
      <div>
        <button onClick={reset}>Reset</button>

        <button onClick={filter10charOrMore}>username 10 char or more</button>
        <button onClick={sortByLat}>sort by Latitude</button>
        <button onClick={filterByPositiveLng}>
          users with positive Longitude
        </button>
        <button onClick={replaceAllAsWithEs}>
          Replace "a" with "e" in Catchpharse
        </button>
      </div>

      {users.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Street</th>
              <th>Suite</th>
              <th>City</th>
              <th>Zipcode</th>
              <th>Lat</th>
              <th>Lng</th>
              <th>Phone</th>
              <th>Website</th>
              <th>Company</th>
              <th>CatchPhrase</th>
              <th>BS</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.address.street}</td>
                <td>{user.address.suite}</td>
                <td>{user.address.city}</td>
                <td>{user.address.zipcode}</td>
                <td>{user.address.geo.lat}</td>
                <td>{user.address.geo.lng}</td>
                <td>000-{user.phone}</td>
                <td>{user.website}</td>
                <td>{user.company.name}</td>
                <td>{user.company.catchPhrase}</td>
                <td>{user.company.bs}</td>
                <td>
                  <button onClick={() => remove(user.id)}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No users found</p>
      )}
    </div>
  );
}

export default Kasutajad;
