import { NextPage, NextPageContext } from "next";
import React from "react";
import { IPageProps } from "../../interfaces/IPageProps";

const About: NextPage<IPageProps> = ({ host, variant }) => {
  return (
    <>
      <div>About</div>
      <div>{host}</div>
    </>
  );
};

export async function getServerSideProps(
  ctx: NextPageContext
): Promise<{ props: IPageProps }> {
  return {
    props: {
      host: ctx?.req?.headers.host as string,
    },
  };
}

export default About;
