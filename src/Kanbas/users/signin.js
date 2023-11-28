import * as client from "./client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Signin() {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const signin = async () => {
    await client.signin(credentials);
    navigate("/Kanbas/account");
  };
  const signup = async () => {
    navigate("/Kanbas/signup");
  };
  return (
    <div className="container mt-6">
    <div className="row d-flex justify-content-center ">
        <div className="col-6 ">
      <h2 className="mt-6">Signin</h2>
      <h5>Username: </h5>
      <input className="form-control kb-select" value={credentials.username} onChange={(e) => setCredentials({...credentials, username: e.target.value})}/> <br/>
      <h5>Password: </h5>
      <input type="password" className="form-control kb-select" value={credentials.password} onChange={(e) => setCredentials({...credentials, password: e.target.value})}/> <br/>
      <button className="btn kb-button-grey" onClick={signin}> Signin </button>
      <button className="btn kb-button-grey" onClick={signup}> Signup </button>
      </div>
    </div>
    </div>
  );
}
export default Signin;