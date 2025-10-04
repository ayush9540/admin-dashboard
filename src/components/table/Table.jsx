import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Typography,
  Button,
  IconButton,
  Tooltip,
  TableSortLabel,
  TextField,
} from "@mui/material";
import { useTheme } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import "./Table.css";
import { useState } from "react";

const makeStyles = (status) => {
  if (status === "Approved") {
    return { background: "rgb(145 254 159 / 47%)", color: "green" };
  } else if (status === "Pending") {
    return { background: "#ffadad8f", color: "red" };
  } else {
    return { background: "#59bfff", color: "white" };
  }
};

function BasicTable({
  title,
  rows,
  onEdit,
  onDelete,
  addButton = false,
  addButtonLink = "",
  addSearchBox = false,
}) {
  const theme = useTheme();
  const mode = theme.palette.mode;
  const [search, setSearch] = useState("");
  const [order, setOrder] = useState("asc"); // asc | desc

  // Filter Customer based on search
  const filteredRows = rows.filter((row) =>
    row.name.toLowerCase().includes(search.toLowerCase())
  );

  // Sort Customer by Name
  filteredRows.sort((a, b) => {
    if (a.name.toLowerCase() < b.name.toLowerCase()) {
      return order === "asc" ? -1 : 1;
    }
    if (a.name.toLowerCase() > b.name.toLowerCase()) {
      return order === "asc" ? 1 : -1;
    }
    return 0;
  });

  function handleSort() {
    setOrder((prev) => (prev === "asc" ? "desc" : "asc"));
  }

  return (
    <div className="table">
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: 1,
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,
          bgcolor:
            theme.palette.mode === "light"
              ? theme.palette.grey[300]
              : theme.palette.grey[800],
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography
            variant="subtitle1"
            sx={{ color: theme.palette.text.primary, fontWeight: 600 }}
          >
            {title}
          </Typography>
        </Box>

        <Paper
          className="right-content"
          elevation={3}
          sx={{
            borderRadius: 3,
            overflow: "hidden",
            bgcolor: "background.paper",
            position: "relative",
          }}
        >
          {addSearchBox && (
            <div>
              <TextField
                variant="outlined"
                size="small"
                placeholder="Search Buyer..."
                value={search}
                className="search-input"
                onChange={(e) => setSearch(e.target.value)}
                sx={{
                  bgcolor: "background.paper"
                }}
              />
            </div>
          )}

          {addButton && addButtonLink && (
            <Link to={addButtonLink} style={{ textDecoration: "none" }}>
              <Button variant="contained" color="success" size="small">
                ADD
              </Button>
            </Link>
          )}
        </Paper>
      </Box>

      {/* <h3 style={{ margin: "0", padding: "5px 15px" }}>{title}</h3> */}
      <TableContainer
        component={Paper}
        style={{ boxShadow: "0px 13px 20px 0 #80808029" }}
      >
        <Table sx={{ minWidth: 650}}>
          <TableHead>
            <TableRow>
              <TableCell sortDirection={order}>
                <TableSortLabel
                  active={true}
                  direction={order}
                  onClick={handleSort}
                >
                  Name
                </TableSortLabel>
              </TableCell>
              <TableCell align="left">Tracking ID</TableCell>
              <TableCell align="left">Age</TableCell>
              <TableCell align="left">Status</TableCell>
              {(onEdit || onDelete) && (
                <TableCell align="left">Actions</TableCell>
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredRows.map((row, id) => (
              <TableRow key={id}>
                <TableCell>{row.name}</TableCell>
                <TableCell align="left">{row.trackingId}</TableCell>
                <TableCell align="left">{row.age}</TableCell>
                <TableCell align="left">
                  <span
                    className={`status ${mode}-mode`}
                    style={makeStyles(row.status)}
                  >
                    {row.status}
                  </span>
                </TableCell>
                {(onEdit || onDelete) && (
                  <TableCell align="left">
                    {onEdit && (
                      <Tooltip title="Edit">
                        <IconButton>
                          <EditIcon
                            color="success"
                            onClick={() => onEdit(row)}
                          />
                        </IconButton>
                      </Tooltip>
                    )}
                    {onDelete && (
                      <Tooltip title="Delete">
                        <IconButton>
                          <DeleteIcon
                            color="error"
                            onClick={() => onDelete(row)}
                          />
                        </IconButton>
                      </Tooltip>
                    )}
                  </TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default BasicTable;
