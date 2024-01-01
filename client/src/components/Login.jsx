import { Link } from "react-router-dom";

export default function Login() {

  return (
    <div className="login">
      <div className="container">
        <h1>CRUD OPERATIONS</h1>
        <h2>Sign In</h2>
        <p>Enter your credentials to access your account</p>
        <form>
          <h3 className="email">Email</h3>
          <input type="email" placeholder="Enter Your Email" />
          <h3 className="passwrd">Password</h3>
          <input type="password" placeholder="Enter Your Password" />
          <Link to='/add'><button>SIGN IN</button></Link>
        </form>
        <p>
          forget your password ? <span>Reset Password</span>
        </p>
      </div>
    </div>
  );
}
