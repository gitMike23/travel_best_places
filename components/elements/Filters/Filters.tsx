import React from "react";
import { FC, useState } from "react";
import { TypeSetState } from "../../../types/common";
import { IPlace } from "../../../types/place";

import styles from "./Filters.module.scss";
const cities = [
  { location: "Paris" },
  { location: "Bora Bora" },
  { location: "Maui" },
  { location: "Tahiti" },
  { location: "Brazil" },
  { location: "Norway" },
];

interface IFilters {
  setPlaces: TypeSetState<IPlace[]>;
}

const Filters: FC<IFilters> = ({ setPlaces }) => {
  const [filter, setFilter] = useState("");
  const buttonClickHandler = (e) => {
    const filter = e.target as HTMLElement;
    return filter.innerText;
  };
  return (
    <div className={styles.wrapper}>
      {cities.map((city) => (
        <button
          key={city.location}
          onClick={(e) => setFilter(buttonClickHandler(e))}
          className={filter === city.location ? styles.active : ""}
        >
          {city.location}
        </button>
      ))}
    </div>
  );
};

export default Filters;
