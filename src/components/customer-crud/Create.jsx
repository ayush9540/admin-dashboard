import { useState } from "react";
import axios from "axios";
import {
  Box,
  Paper,
  TextField,
  Button,
  Typography,
  Alert,
  Stack
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Create() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  const handlePost = async (e) => {
    e.preventDefault();

    if (!name.trim() || !age) {
      alert("Please enter User Name & Age");
      return;
    }

    try {
      await axios.post(
        "https://688bad902a52cabb9f528ee0.mockapi.io/user/v1/CRUD-Operations",
        { name, age },
        { headers: { "Content-Type": "application/json" } }
      );

      setShowAlert(true);
      setTimeout(() => navigate("/read"), 2000);
    } catch (error) {
      console.error("Error posting data", error);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        p: 2,
      }}
    >
      <Paper
        elevation={3}
        sx={{
          width: { xs: "100%", sm: 400 },
          p: 4,
          borderRadius: 3,
          boxShadow: "0px 13px 20px 0 #80808029",
        }}
      >
        <Stack spacing={2}>
          <Typography variant="h5" align="center">
            Add User
          </Typography>

          {showAlert && (
            <Alert severity="success">
              <strong>{name}</strong> is added Successfully!
            </Alert>
          )}

          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <TextField
            label="Age"
            variant="outlined"
            type="number"
            fullWidth
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />

          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handlePost}
          >
            Add User
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
}
