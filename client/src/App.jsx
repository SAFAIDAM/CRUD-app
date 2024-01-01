import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import CreateUser from "./components/CreatUser";
import UpdateUser from "./components/UpdatUser";
import Layout from "./components/Layout";
import Login from "./components/Login";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Login />}></Route> */}
          <Route path="/" element={<Layout />}></Route>
          {/* <Route path="/Login" element={<Login />}></Route> */}
          <Route path="/create" element={<CreateUser />}></Route>
          <Route path="/update/:id" element={<UpdateUser />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
