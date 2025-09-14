import "./Updates.css";
import { UpdatesData } from "../../data/data";
import { useTheme } from "@mui/material";

const Updates = () => {

  const theme = useTheme();
  const mode = theme.palette.mode;

  return (
    <div className={`updates ${mode}-mode`}>
      {UpdatesData.map((update, index) => {
        return (
          <div className="update" key={index}>
            <img src={update.img} alt="" />
            <div className="notification">
              <div style={{ marginBottom: ".5rem" }}>
                <span>{update.name}</span>
                <span>{update.noti}</span>
              </div>
              <span>{update.time}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Updates;
