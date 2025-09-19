import { LayoutGroup, motion } from "framer-motion";
import { useState } from "react";
import "./Card.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import CloseIcon from "@mui/icons-material/Close";
import Chart from "react-apexcharts";
import { useTheme } from "@mui/material";

const Card = (props) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <LayoutGroup>
      {expanded ? (
        <ExpandedCard param={props} setExpanded={() => setExpanded(false)} />
      ) : (
        <CompactCard param={props} setExpanded={() => setExpanded(true)} />
      )}
    </LayoutGroup>
  );
};

// Compact Card
const CompactCard = ({ param, setExpanded }) => {
  const theme = useTheme();
  const mode = theme.palette.mode;
  const Png = param.png;
  return (
    <motion.div
      className={`compact-card ${mode}-mode`}
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
      onClick={setExpanded}
      layoutId={`expandableCard-${param.title}`} // 🔑 unique id per card
      transition={{ layout: { duration: 0.5, type: "spring" } }}
    >
      <div className="radialBar">
        <CircularProgressbar
          value={param.barValue}
          text={`${param.barValue} %`}
        />
        <span>{param.title}</span>
      </div>
      <div className="detail">
        <Png />
        <span>{param.value}</span>
        <span>Last 24 Hours</span>
      </div>
    </motion.div>
  );
};

// Expanded Card
const ExpandedCard = ({ param, setExpanded }) => {
  const data = {
    options: {
      chart: { type: "area", height: "auto" },
      fill: { colors: ["#fff"], type: "gradient" },
      dataLabels: { enabled: false },
      stroke: { curve: "smooth", colors: ["white"] },
      tooltip: { x: { format: "dd/MM/yy HH:mm" } },
      grid: { show: true },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z",
        ],
      },
    },
  };

  return (
    <motion.div
      className="expanded-card"
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
      layoutId={`expandableCard-${param.title}`} // 🔑 match Compact version
      transition={{ layout: { duration: 0.5, type: "spring" } }}
    >
      <div
        style={{ alignSelf: "flex-end", cursor: "pointer", color: "#fff", position: "absolute", top: "5px", right: "5px" }}
        onClick={setExpanded}
      >
        <CloseIcon />
      </div>
      <span>{param.title}</span>
      <div className="chart-container">
        <Chart series={param.series} type="area" options={data.options} />
      </div>
      <span>Last 24 Hours</span>
    </motion.div>
  );
};

export default Card;
