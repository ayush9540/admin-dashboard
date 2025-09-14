import "./Cards.css";
import { cardsData } from "../../data/data";
import Card from "../card/Card";

const Cards = () => {
  return (
    <div className="cards">
      {cardsData.map((card, index) => {
        return (
          <div className="parent-container" key={index}>
            <Card
              title={card.title}
              color={card.color}
              barValue={card.barValue}
              value={card.value}
              png={card.png}
              series={card.series}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
