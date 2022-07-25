import { NextPageContext } from "next";
import React from "react";

const SecretPage = () => {
  return <div>Top Secret Page!!!!</div>;
};

export async function getServerSideProps(ctx: NextPageContext) {
  //check permissions, if not permitted already, navigate to not-allowed page
  return {
    redirect: {
      destination: "/not-allowed",
      permenant: false,
    },
  };
}

export default SecretPage;
