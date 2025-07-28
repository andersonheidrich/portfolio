import * as Style from "./Main.styles";
import { About, Experience, Projects, SiteDescription } from "./components";

const Main = () => {
  return (
    <Style.Container>
      <About />
      <Experience />
      <Projects />
      <SiteDescription />
    </Style.Container>
  );
};

export default Main;
