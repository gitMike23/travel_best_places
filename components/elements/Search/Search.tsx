import React, { FC, useState } from "react";

import styles from "./Search.module.scss";

const Search: FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className={styles.search}>
      <span className="material-icons-outlined">search</span>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search place..."
      />
    </div>
  );
};

export default Search;
