import "./Sidebar.css";
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import { sidebarData } from "../../data/data";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useTheme } from "@mui/material";

const Sidebar = ({onLogout}) => {
  const [selected, setSelected] = useState(0);
  const [expanded, setExpaned] = useState(true);

  const theme = useTheme();
  const mode = theme.palette.mode;

  const sidebarVariants = {
    true: {
      left: "0",
    },
    false: {
      left: "-60%",
    },
  };

  return (
    <>
      <div
        className={`bars ${mode}-mode`}
        style={expanded ? { left: "48%", top: 60, opacity: "1" } : { left: "9px", top: 60, opacity: ".6" }}
        onClick={() => setExpaned(!expanded)}
      >
        <MenuIcon style={{fontSize: "32px"}}/>
      </div>
      <motion.div
        className={`sidebar ${mode}-mode`}
        variants={sidebarVariants}
        animate={window.innerWidth <= 768 ? `${expanded}` : ""}
      >
        <div className="logo">
          <LocalShippingOutlinedIcon style={{fontSize: "56px"}}/>
          <span>
            Sh<span>o</span>ps
          </span>
        </div>

        {/* Menu Items */}
        <div className="menu">
          {sidebarData.map((item, index) => {
            return (
              <NavLink
                onClick={() => setSelected(index)}
                key={index}
                to={item.path}
                className={
                  selected === index ? "menu-item this-active" : "menu-item"
                }
              >
                <item.icon />
                <span>{item.heading}</span>
              </NavLink>
            );
          })}
          <div onClick={onLogout} className="menu-item" style={{marginTop: "3.5rem"}}>
            <ExitToAppIcon/> <span>Logout</span>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;