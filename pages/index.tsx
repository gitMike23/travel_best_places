import { GetServerSideProps, GetStaticProps, NextPage } from "next";
import Layout from "../components/common/Layout";
import SearchSection from "../components/elements/Home/SearchSection/SearchSection";
import Filters from "../components/elements/Filters/Filters";
import PopularPlaces from "../components/elements/Home/PopularPlaces/PopularPlaces";
import Search from "../components/elements/Search/Search";

import { IPlace } from "../types/place";
import { API_URL } from "../components/constants";

interface IHome {
  places: IPlace[];
}

const Home: NextPage<IHome> = ({ places }) => {
  return (
    <Layout>
      <SearchSection />
      <div style={{ width: "80%", margin: "0 auto" }}>
        <Search />
        <Filters />
        <PopularPlaces places={places} />
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const result = await fetch(`${API_URL}/places`);
  const places = await result.json();
  return {
    props: {
      places,
    },
  };
};

export default Home;
