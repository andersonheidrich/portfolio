import React from "react";
import * as Style from "./Main.styles";
import { About, Experience, Projects } from "./components";

const Main = () => {
  return (
    <Style.Container>
      <About />
      <Experience />
      <Projects />
    </Style.Container>
  );
};

export default Main;
