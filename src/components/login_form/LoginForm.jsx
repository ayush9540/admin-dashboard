import "./loginForm.css";
import { useState } from "react";
import Button from "@mui/material/Button";

const LoginForm = ({ onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [emailID, setEmailID] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // 🔹 Login Submit Handler
 const handleLoginSubmit = (e) => {
  e.preventDefault();

  const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
  console.log("All Stored Users:", storedUsers);

  const matchedUser = storedUsers.find(
    (user) => user.email === emailID && user.password === password
  );

  if (matchedUser) {
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("currentUser", JSON.stringify(matchedUser));
    onLogin(matchedUser);
  } else {
    alert("Invalid Credentials!");
  }
};



  // 🔹 SignUp Submit Handler
  const handleSignUpSubmit = (e) => {
  e.preventDefault();

  if (!emailID || !password || !confirmPassword) {
    alert("Please fill all fields");
    return;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  const newUser = {
    email: emailID,
    password,
    name: emailID.split("@")[0],
  };

  const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

  // Check if email already exists
  const userExists = storedUsers.some(user => user.email === emailID);
  if (userExists) {
    alert("Email is already registered. Please log in.");
    return;
  }

  storedUsers.push(newUser);

  localStorage.setItem("users", JSON.stringify(storedUsers));
  localStorage.setItem("isLoggedIn", "true");
  localStorage.setItem("currentUser", JSON.stringify(newUser));

  onLogin(newUser);

  setEmailID("");
  setPassword("");
  setConfirmPassword("");
};



  return (
    <div className="loginForm-container">
      <div className="container">
        <div className="form-container">
          <div className="form-toggle">
            <Button
              variant="contained"
              onClick={() => setIsLogin(true)}
              className={isLogin ? "active" : ""}
            >
              Login
            </Button>
            <Button
              variant="contained"
              onClick={() => setIsLogin(false)}
              className={!isLogin ? "active" : ""}
            >
              SignUp
            </Button>
          </div>

          {isLogin ? (
            <form className="form" onSubmit={handleLoginSubmit}>
              <h1>Login Form</h1>
              <input
                type="email"
                placeholder="Email"
                value={emailID}
                onChange={(e) => setEmailID(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
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
            </form>
          ) : (
            <form className="form" onSubmit={handleSignUpSubmit}>
              <h2>SignUp Form</h2>
              <input
                type="email"
                placeholder="Email"
                value={emailID}
                onChange={(e) => setEmailID(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <Button type="submit" variant="contained">
                SignUp
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
