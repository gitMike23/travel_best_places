import React, { FC } from "react";

import { IPlace } from "../../../../types/place";

import styles from "./PopularPlaces.module.scss";

interface IPopularPlaces {
  places: IPlace[];
}

const PopularPlaces: FC<IPopularPlaces> = ({ places }) => {
  return (
    <div className={styles.wrapper}>
      <h2>Popular places</h2>
      {places.map((place) => (
        <div
          key={place.slug}
          className={styles.item}
          style={{ backgroundImage: `url(${place.imagePath})` }}
        ></div>
      ))}
    </div>
  );
};

export default PopularPlaces;
