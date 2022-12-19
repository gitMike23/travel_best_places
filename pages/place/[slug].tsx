import React from "react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { API_URL } from "../../components/constants";
import { Place } from "../../components/screens/place";
import { IPlace } from "../../types/place";

// This component needs to load all data from the server  for rendering a page

interface IPlacePage {
  place: IPlace;
}

const PlacePage: NextPage<IPlacePage> = ({ place }) => {
  return <Place place={place} />;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`${API_URL}/places`);
  const places = await res.json();

  const paths = places.map((place) => ({
    params: { slug: place.slug },
  }));

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await fetch(`${API_URL}/places/${params.slug}`);
  const place = await res.json();

  return {
    props: { place },
  };
};

export default PlacePage;
