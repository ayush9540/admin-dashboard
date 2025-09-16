import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import MainDashboard from "./components/main-dash/MainDashboard";
import RightPanel from "./components/right-panel/RightPanel";
import { createTheme, ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { useState } from "react";
import LoginForm from "./components/login_form/LoginForm";

function App() {
  const authKey = "isLoggedIn";

  const [mode, setMode] = useState("light");
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem(authKey) === "true"
  );

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("currentUser")) || null
  );

  const handleLogin = (userData) => {
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("currentUser", JSON.stringify(userData));
    setIsLoggedIn(true);
    setUser(userData);
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("currentUser");
    setIsLoggedIn(false);
    setUser(null);
  };

  const theme = createTheme({
    palette: {
      mode,
      ...(mode === "dark"
        ? {
            background: { default: "#121212", paper: "#1e1e1e" },
            text: { primary: "#e0e0e0", secondary: "#a0a0a0" },
          }
        : {
            background: { default: "#fafafa", paper: "#fff" },
            text: { primary: "#333", secondary: "#666" },
          }),
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div className={`App ${mode}-mode`}>
        {isLoggedIn ? (
          <>
            <div style={{ width: "100%" }}>
              <CssBaseline />

              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <IconButton
                  onClick={() => setMode(mode === "light" ? "dark" : "light")}
                  color="inherit"
                >
                  {mode === "light" ? <Brightness4 /> : <Brightness7 />}
                </IconButton>
              </div>
            </div>

            <div className={`app-glass ${mode}-mode`}>
              <aside>
                <Sidebar onLogout={handleLogout} />
              </aside>
              <main className="main-content">
                <h1>{`Welcome, ${user?.name.charAt(0).toUpperCase() + user?.name.slice(1) + " !" || "User"}`}</h1>
                <div className="dashboard-scrollable">
                  <MainDashboard />
                </div>
              </main>
              <aside>
                <RightPanel />
              </aside>
            </div>
          </>
        ) : (
          <LoginForm onLogin={handleLogin} />
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
