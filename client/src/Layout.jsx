import Search from "./Search";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LuPencil } from "react-icons/lu";

import { SlTrash } from "react-icons/sl";
import AddUser from "./AddUser";
import profile from "../public/profile.png";

export default function Layout() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://crud-app-mern-psi.vercel.app/")
      .then((result) => setUsers(result.data))
      .catch((err) => console.log(err));
  }, []);
  const handleDelete = (id) => {
    axios
      .delete("https://crud-app-mern-psi.vercel.app/deleteUser/" + id)
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };
  return (
    <main>
      <SideBar />
      <div className="mainContent">
        <Search />
        <Outlet />
        <AddUser />
        <table width={700}>
          <thead className="titles">
            <tr>
              <th></th>
              <th className="name">Name</th>
              <th className="email">Email</th>
              <th className="number">Phone</th>
              <th className="enrole">EnrollNumber</th>
              <th className="date">Date of admission</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <div className="singleUser">
                  <td>
                    <img src={profile} alt="user" />
                  </td>
                  <td className="name">{user.name}</td>
                  <td className="email">{user.email}</td>
                  <td className="number">{user.phone}</td>
                  <td className="enrole">{user.enroll}</td>
                  <td className="date">08-Dec, 2021</td>
                  <td className="edit">
                    <Link to={`/update/${user._id}`}>
                      <LuPencil className="icon" />
                    </Link>
                    <SlTrash
                      className="icon"
                      onClick={() => handleDelete(user._id)}
                    />
                  </td>
                </div>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
