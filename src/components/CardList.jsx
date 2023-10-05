import { useState } from "react";
import { getInitialData } from "../utils";
import Card from "./Card.jsx";

const CardList = ({ onView }) => {
  const [datas, setDatas] = useState(getInitialData());
  return (
    <>
      {datas.map((data) => (
        <Card
          key={data.id}
          id={data.id}
          image={data.image}
          title={data.title}
          capital={data.capital}
          onView={onView}
        />
      ))}
    </>
  );
};

export default CardList;
