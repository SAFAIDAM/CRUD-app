import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AddUser from "./AddUser";
import { BsUpload } from "react-icons/bs";
import Search from "./Search";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";

function CreateUser() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [enroll, setEnroll] = useState();

  const navigate = useNavigate();

  const Submit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/createUser", { name, email, phone, enroll })
      .then((result) => {
        console.log(result);
        navigate("/add");
      })
      .catch((err) => console.log(err));
  };

  return (
    <main>
      <SideBar />
      <div className="mainContent">
        <Search />
        <Outlet />
        <AddUser form />
        <div className="formContainer">
          <form onSubmit={Submit}>
            <h2>New Student</h2>

            <label htmlFor="">Name</label>
            <input
              type="text"
             
              onChange={(e) => setName(e.target.value)}
            />

            <label htmlFor="">Email</label>
            <input
              type="email"
             
              onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="">Phone number</label>
            <input
              type="text"
              
              onChange={(e) => setPhone(e.target.value)}
            />

            <label htmlFor="">Enroll number</label>
            <input
              type="text"
              
              onChange={(e) => setEnroll(e.target.value)}
            />
            <label>Photo de profil</label>
            <div className="uploadImage">
              <div className="uploadIcon">
                <BsUpload className="upicn" />
              </div>
              <div className="imagePromps">
                <p>
                  Glisser-déposez le fichier ici, ou <span>Parcourir</span>
                </p>
                <p className="second">
                  Format JPG, JPEG ou PNG de moins de 1Mo
                </p>
              </div>
            </div>

            <button>ADD STUDENT</button>
          </form>
        </div>
      </div>
    </main>
  );
}

export default CreateUser;
