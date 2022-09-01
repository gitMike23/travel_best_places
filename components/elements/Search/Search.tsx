import React, { FC, useState, useRef } from "react";

import styles from "./Search.module.scss";

const Search: FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const inputRef = useRef(null);

  const searchClickHandler = () => {
    inputRef.current.focus();
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
      />
    </div>
  );
};

export default Search;
