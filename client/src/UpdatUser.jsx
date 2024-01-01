import { useState } from "react";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import AddUser from "./AddUser";
import Search from "./Search";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";
import { BsUpload } from "react-icons/bs";


function UpdateUser() {
  const { id } = useParams();

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [enroll, setEnroll] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8000/getUser" + id)
      .then((result) => {
        console.log(result);

        setName(result.data.name);
        setEmail(result.data.email);
        setPhone(result.data.phone);
        setEnroll(result.data.enroll);
      })
      .catch((err) => console.log(err));
  }, []);

  const update = (e) => {
    e.preventDefault();
    axios.put("http://localhost:8000/updateUser/"+id, {name, email, phone, enroll})
    .then(result => {
      console.log(result)
      navigate('/add')
    })
    .catch(err => console.log(err))

  }

  return (
  
    <main >
      <SideBar />
      <div className="mainContent">
        <Search />
        <Outlet />
        <AddUser form />
        
    <div className="formContainer">
      <form onSubmit={update}>
      <h2>Update Student</h2>
       
          <label htmlFor="">Name</label>
          <input type="text" placeholder="" value={name} onChange={(e) => setName(e.target.value)} />
       
        
          <label htmlFor="">Email</label>
          <input type="text" placeholder="" value={email} onChange={(e) => setEmail(e.target.value)} />
       
      
          <label htmlFor="">Phone number</label>
          <input type="text" placeholder="" value={phone} onChange={(e) => setPhone(e.target.value)} />
       
      
          <label htmlFor="">Enroll number</label>
          <input type="text" placeholder="" value={enroll} onChange={(e) => setEnroll(e.target.value)} />

          <p>Photo de profil</p>
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
        
        <button>UPDATE STUDENT</button>
        
      </form>
    </div>
    </div>

    </main>
     
 
    
  );
}

export default UpdateUser;
