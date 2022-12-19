import React from "react";
import { FC } from "react";
import Layout from "../../common/Layout";
import { IPlace } from "../../../types/place";

interface IPlacePage {
  place: IPlace;
}

export const Place: FC<IPlacePage> = ({ place }) => {
  return <Layout>Place {place.slug}</Layout>;
};
