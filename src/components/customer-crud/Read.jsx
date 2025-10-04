import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BasicTable from "../table/Table";
import { Box, Paper, Typography, Alert } from "@mui/material";

const Read = () => {
  const [data, setData] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [deletedUserName, setDeletedUserName] = useState("");
  const navigate = useNavigate();

  const API_URL =
    "https://688bad902a52cabb9f528ee0.mockapi.io/user/v1/CRUD-Operations";

  async function readData() {
    try {
      const res = await axios.get(API_URL);
      const formatted = res.data.map((u) => ({
        id: u.id,
        name: u.name,
        age: u.age,
        trackingId: u.id,
        date: u.createdAt ? u.createdAt.slice(0, 10) : "N/A",
        status: "Active",
      }));
      setData(formatted);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  }

  useEffect(() => {
    readData();
  }, []);

  function handleDeleteUser(row) {
    axios.delete(`${API_URL}/${row.id}`).then(() => {
      readData();
      setDeletedUserName(row.name);
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 2000);
    });
  }

  function handleEditUser(row) {
    localStorage.setItem("id", row.id);
    localStorage.setItem("name", row.name);
    localStorage.setItem("age", row.age);
    navigate("/update");
  }

  return (
    <div id="read_form">
      <Box
        sx={{
          flex: 1,
          px: 3,
          py: 2,
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
          <Typography variant="h5" fontWeight={600}>
            Customers
          </Typography>
        </Box>

        <Paper
          elevation={3}
          sx={{
            borderRadius: 3,
            overflow: "hidden",
            bgcolor: "background.paper",
            position: "relative"
          }}
        >
           
          {showAlert && (
            <Alert severity="error">
              <strong>{deletedUserName}</strong> deleted successfully!
            </Alert>
          )}
          
          <BasicTable
            title="Recent Buyers"
            rows={data}
            onEdit={handleEditUser}
            onDelete={handleDeleteUser}
            addButton= {true}
            addSearchBox= {true}
            addButtonLink="/create"
          />
        </Paper>
      </Box>
    </div>
  );
};

export default Read;
