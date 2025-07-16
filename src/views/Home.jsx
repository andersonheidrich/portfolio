import { Navbar } from "../components";
import Main from "./Site/Main";
import * as Style from "./Home.styles";

const Home = () => {
  return (
    <Style.Container>
      <Navbar />
      <Main />
    </Style.Container>
  );
};

export default Home;
