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
  const [isloggedIn, setIsLoggedIn] = useState(
    localStorage.getItem(authKey) === "true"
  );

  const handleLogin = () => {
    localStorage.setItem(authKey, "true");
    setIsLoggedIn(true)
  }

   const handleLogout= () =>  {
    localStorage.removeItem(authKey);
    setIsLoggedIn(false)
  }

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
        {isloggedIn ? (
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
                <Sidebar onLogout= {handleLogout}/>
              </aside>
              <main className="main-content">
                <div className="dashboard-scrollable">
                  <MainDashboard />
                </div>
              </main>
              <aside>
                <RightPanel/>
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