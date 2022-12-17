import React, { FC, useState, useRef, ChangeEvent } from "react";
import { IPlace } from "../../../types/place";
import { TypeSetState } from "../../../types/common";

import styles from "./Search.module.scss";

interface ISearch {
  setPlaces: TypeSetState<IPlace[]>;
  initialPlaces: IPlace[];
}

const Search: FC<ISearch> = ({ setPlaces, initialPlaces }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const inputRef = useRef(null);

  const searchClickHandler = () => {
    inputRef.current.focus();
  };

  const searchHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value) {
      setPlaces(
        initialPlaces.filter(
          (place) =>
            place.location.city.toLowerCase().includes(value) ||
            place.location.country.toLowerCase().includes(value)
        )
      );
    } else setPlaces(initialPlaces);
  };

  return (
    <div className={styles.search}>
      <span className="material-icons-outlined" onClick={searchClickHandler}>
        search
      </span>
      <input
        ref={inputRef}
        type="text"
        value={searchTerm}
        onChange={searchHandler}
        placeholder="Search place..."
      />
    </div>
  );
};

export default Search;
