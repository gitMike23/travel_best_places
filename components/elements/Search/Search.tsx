import React, { FC, useState, useRef, KeyboardEvent } from "react";
import { IPlace } from "../../../types/place";
import { TypeSetState } from "../../../types/common";

import styles from "./Search.module.scss";

interface ISearch {
  setPlaces: TypeSetState<IPlace[]>;
}

const Search: FC<ISearch> = ({ setPlaces }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const inputRef = useRef(null);

  const searchClickHandler = () => {
    inputRef.current.focus();
  };

  const searchHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
    }
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
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search place..."
        onKeyDown={searchHandler}
      />
    </div>
  );
};

export default Search;
