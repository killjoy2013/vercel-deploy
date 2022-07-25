import { NextPage, NextPageContext } from "next";
import React from "react";
import { IPageProps } from "../../interfaces/IPageProps";

const AboutPage: NextPage<IPageProps> = () => {
  return (
    <>
      <h2>Brand story... Can be generated in a static way on build time....</h2>
    </>
  );
};

export async function getStaticProps(context: NextPageContext) {
  return {
    props: {},
  };
}

export default AboutPage;
