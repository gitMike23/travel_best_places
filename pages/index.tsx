import { useState } from "react";
import { GetStaticProps, NextPage } from "next";
import Layout from "../components/common/Layout";
import SearchSection from "../components/elements/Home/SearchSection/SearchSection";
import Filters from "../components/elements/Filters/Filters";
import PopularPlaces from "../components/elements/Home/PopularPlaces/PopularPlaces";
import Search from "../components/elements/Search/Search";

import { IPlace } from "../types/place";
import { API_URL } from "../components/constants";

interface IHome {
  initialPlaces: IPlace[];
}

const Home: NextPage<IHome> = ({ initialPlaces }) => {
  const [places, setPlaces] = useState(initialPlaces);

  return (
    <Layout>
      <SearchSection />
      <div style={{ width: "80%", margin: "0 auto" }}>
        <Search setPlaces={setPlaces} initialPlaces={initialPlaces} />
        <Filters setPlaces={setPlaces} initialPlaces={initialPlaces} />
        <PopularPlaces places={places} />
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const result = await fetch(`${API_URL}/places`);
  const initialPlaces = await result.json();
  return {
    props: {
      initialPlaces,
    },
  };
};

export default Home;
