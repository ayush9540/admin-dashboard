import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import "./Table.css";

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
}) {
  const theme = useTheme();
  const mode = theme.palette.mode;

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
          elevation={3}
          sx={{
            borderRadius: 3,
            overflow: "hidden",
            bgcolor: "background.paper",
            position: "relative",
          }}
        >
          {addButton && addButtonLink && (
            <Link to={addButtonLink} style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                color="success"
                size="small"
              >
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
              <TableCell>Name</TableCell>
              <TableCell align="left">Tracking ID</TableCell>
              <TableCell align="left">Age</TableCell>
              <TableCell align="left">Status</TableCell>
              {(onEdit || onDelete) && (
                <TableCell align="left">Actions</TableCell>
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, id) => (
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
