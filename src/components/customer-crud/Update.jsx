import axios from "axios";
import { useEffect, useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Alert,
  Stack,
  Paper,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Update = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setId(localStorage.getItem("id") || "");
    setName(localStorage.getItem("name") || "");
    setAge(localStorage.getItem("age") || "");
  }, []);

  function handleUpdateUser(e) {
    e.preventDefault();
    if (!name.trim() || !age) {
      alert("Please enter User Name & Age");
      return;
    }
    try {
      axios.put(
        `https://688bad902a52cabb9f528ee0.mockapi.io/user/v1/CRUD-Operations/${id}`,
        { name, age },
        { headers: { "Content-Type": "application/json" } }
      );
      setShowAlert(true);
      setTimeout(() => {
        navigate("/read");
      }, 2000);
    } catch (error) {
      console.log("Error updating data", error);
    }
  }

  return (
    <Box
      component="form"
      onSubmit={handleUpdateUser}
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
          <Typography variant="h5" textAlign="center">
            Update User
          </Typography>
          {showAlert && (
            <Alert severity="success">
              <strong>{name}</strong> is updated Successfully!
            </Alert>
          )}
          <TextField
            label="Name"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
            required
          />

          <TextField
            label="Age"
            type="number"
            variant="outlined"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            fullWidth
            required
          />

          <Button type="submit" variant="contained" color="primary">
            Update
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
};

export default Update;
