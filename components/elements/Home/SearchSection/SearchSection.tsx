import React, { FC } from "react";
import Search from "../../Search/Search";
import Filters from "../../Filters/Filters";
import mapImg from "../../../../assets/images/map.png";

import styles from "./SearchSection.module.scss";

const SearchSection: FC = () => {
  return (
    <section
      className={styles.section}
      style={{
        backgroundImage: `url('${mapImg.src}')`,
      }}
    >
      <div>
        <h1>best places for trip</h1>
        <Search />
        <Filters />
      </div>
    </section>
  );
};

export default SearchSection;
