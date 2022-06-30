import React, { useState, useEffect } from "react";
import axios from "axios";

const GetUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUser();
  });
  const getUser = () => {
    axios.get("getusers").then((res) => {
      setUsers(res.data);
      //console.log(res.data)
    });
  };
  const data = users.map((e) => {
    return (
      <tr key={e.idUser}>
        <th scope="row">{e.idUser}</th>
        <td>{e.FirstName}</td>
        <td>{e.Email}</td>
        <td>{e.Phone}</td>
        <td>{e.Country}</td>
        <td>
      
          <img src={require(`../../../../backend/images/${e.Image}`)} width="100" height="100" alt="" />
        </td>
      </tr>
    );
  });
  return (
    <table className="table table-dark">
      <thead>
        <tr>
          <th scope="col">ID Users</th>
          <th scope="col">First Name</th>
          <th scope="col">Email</th>
          <th scope="col">Phone</th>
          <th scope="col">Country</th>
          <th scope="col">Image</th>

        </tr>
      </thead>
      <tbody>{data}</tbody>
    </table>
  );
};
export default GetUsers;
