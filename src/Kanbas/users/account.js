import * as client from "./client";
import { useState, useEffect } from "react";
import { useNavigate, Link, useParams} from "react-router-dom";
function Account() {
  const { id } = useParams();
  const [account, setAccount] = useState(null);
  const navigate = useNavigate();
  const fetchAccount = async () => {
    const account = await client.account();
    setAccount(account);
  };
  const save = async () => {
    await client.updateUser(account);
  };
  const findUserById = async (id) => {
    const user = await client.findUserById(id);
    setAccount(user);
  };
  const signout = async () => {
    await client.signout();
    navigate("/Kanbas/signin");
  };
  useEffect(() => {
    if (id) {
        findUserById(id);
      } else {
        fetchAccount();
      }
  }, []);
  return (
    <div className="w-50">
      <h1>Account</h1> 
      {account && (
        <div>
        <h4>Password</h4>
          <input className="form-control" value={account.password}
            onChange={(e) => setAccount({ ...account,
              password: e.target.value })}/> <br/>
        <h4>First Name</h4>      
          <input className="form-control"  value={account.firstName}
            onChange={(e) => setAccount({ ...account,
              firstName: e.target.value })}/> <br/>
        <h4>Last Name</h4>
          <input className="form-control"  value={account.lastName}
            onChange={(e) => setAccount({ ...account,
              lastName: e.target.value })}/> <br/>
        <h4>Date of Birth</h4>
          <input className="form-control"  value={account.dob}
            onChange={(e) => setAccount({ ...account,
              dob: e.target.value })}/> <br/>
        <h4>Email</h4>
          <input className="form-control"  value={account.email}
            onChange={(e) => setAccount({ ...account,
              email: e.target.value })}/> <br/>
        <h4>Role</h4>
          <select onChange={(e) => setAccount({ ...account,
              role: e.target.value })}>
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </select> <br/>
          <button className="btn btn-primary" onClick={save}>Save</button> 
          <button className="btn btn-danger" onClick={signout}>Signout</button>
          <Link to="/kanbas/users" className="btn btn-warning">
            Users</Link>
        </div>
      )}
    </div>
  );
}
export default Account;