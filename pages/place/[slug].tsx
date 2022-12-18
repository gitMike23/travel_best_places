import React from "react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { API_URL } from "../../components/constants";
import Layout from "../../components/common/Layout";
import { IPlace } from "../../types/place";

interface IPlacePage {
  place: IPlace;
}

const Place: NextPage<IPlacePage> = ({ place }) => {
  return <Layout>Place/{place.slug}</Layout>;
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

export default Place;
