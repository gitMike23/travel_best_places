import { GetServerSideProps, GetStaticProps, NextPage } from "next";
import Layout from "../components/common/Layout";
import SearchSection from "../components/elements/Home/SearchSection/SearchSection";

import styles from "../styles/Home.module.css";
import { IPlace } from "../types/place";

interface IHome {
  places: IPlace[];
}

const Home: NextPage<IHome> = ({ places }) => {
  return (
    <Layout>
      <SearchSection />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const result = await fetch("http://localhost:3000/api/places");
  const places = await result.json();
  return {
    props: {
      places,
    },
  };
};

export default Home;
