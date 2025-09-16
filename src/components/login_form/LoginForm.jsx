import "./loginForm.css";
import { useState } from "react";
import Button from "@mui/material/Button";

const LoginForm = ({ onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [emailID, setEmailID] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    setIsLogin(true);
  };
  const handleSignUp = () => {
    setIsLogin(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (emailID === "ayush@demo.com" && password === "admin") {
      localStorage.setItem("isloggedIn", "true");
      onLogin();
    } else if (!emailID || !password) {
      alert("Please fill all fields");
      return;
    } else {
      alert("Invalid Credentials !");
    }
  };
  return (
    <div className="loginForm-container">
      <div className="container">
        <form action="" onSubmit={handleSubmit}>
          <div className="form-container">
            <div className="form-toggle">
              <Button
                variant="contained"
                onClick={() => handleLogin()}
                className={isLogin ? "active" : ""}
              >
                Login
              </Button>
              <Button
                variant="contained"
                onClick={() => handleSignUp()}
                className={!isLogin ? "active" : ""}
              >
                SignUp
              </Button>
            </div>
            {isLogin ? (
              <>
                <div className="form">
                  <h1>Login Form</h1>
                  <input
                    type="email"
                    placeholder="Email"
                    onChange={(e) => setEmailID(e.target.value)}
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <a href="#">Forgot Password</a>
                  <Button type="submit" variant="contained">
                    Login
                  </Button>
                  <p>
                    Not a Member?{" "}
                    <a href="#" onClick={() => setIsLogin(false)}>
                      SignUp Now
                    </a>
                  </p>
                </div>
              </>
            ) : (
              <>
                <div className="form">
                  <h2>SignUp Form</h2>
                  <input type="email" placeholder="Email" />
                  <input type="password" placeholder="Password" />
                  <input type="password" placeholder="Confirm Password" />
                  <Button variant="contained">SignUp</Button>
                </div>
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};
export default LoginForm;
