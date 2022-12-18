import React from "react";
import { FC, useState } from "react";
import { TypeSetState } from "../../../types/common";
import { IPlace } from "../../../types/place";

import styles from "./Filters.module.scss";
const countries = [
  { location: "France" },
  { location: "Italy" },
  { location: "Japan" },
  { location: "Norway" },
  { location: "Brazil" },
  { location: "USA" },
];

interface IFilters {
  setPlaces: TypeSetState<IPlace[]>;
  initialPlaces: IPlace[];
}

const Filters: FC<IFilters> = ({ setPlaces, initialPlaces }) => {
  const [filter, setFilter] = useState("");

  const handleFilter = (location: string) => {
    if (filter === location) {
      setPlaces(initialPlaces);
      setFilter("");
    } else {
      setPlaces(
        initialPlaces.filter(
          (place) =>
            place.location.country.toLowerCase() === location.toLowerCase()
        )
      );
      setFilter(location);
    }
  };

  return (
    <div className={styles.wrapper}>
      {countries.map((country) => (
        <button
          key={country.location}
          onClick={() => handleFilter(country.location)}
          className={filter === country.location ? styles.active : ""}
        >
          {country.location}
        </button>
      ))}
    </div>
  );
};

export default Filters;
