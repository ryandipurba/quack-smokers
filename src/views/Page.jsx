import React from "react";
import Footer from "../components/Footer/Index";
import Mint from "../components/Mint/Index";
import Roadmap from "../components/Roadmap";
import { reveal } from "../utils/reveal";

export default function Page() {
  window.addEventListener("scroll", reveal);
  return (
    <>
      <Mint />
      <Roadmap />
      <Footer />
    </>
  );
}
