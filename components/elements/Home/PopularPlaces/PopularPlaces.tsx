import React, { FC } from "react";
import Link from "next/link";
import { IPlace } from "../../../../types/place";
import styles from "./PopularPlaces.module.scss";

interface IPopularPlaces {
  places: IPlace[];
}

const PopularPlaces: FC<IPopularPlaces> = ({ places }) => {
  return (
    <div className={styles.wrapper}>
      <h2>Popular places</h2>

      {places.length ? (
        places.map((place) => (
          <Link href={`place/${place.slug}`} key={place.slug}>
            <a
              className={styles.item}
              style={{ backgroundImage: `url(${place.imagePath})` }}
            >
              <span className={styles.heading}>
                {`${place.location.city} ${place.location.country}`}
              </span>
            </a>
          </Link>
        ))
      ) : (
        <div
          style={{
            marginTop: "-2rem",
            color: "#e8e8e8",
            textAlign: "center",
            fontWeight: "bold",
            fontStyle: "italic",
          }}
        >
          Not found
        </div>
      )}
    </div>
  );
};

export default PopularPlaces;
