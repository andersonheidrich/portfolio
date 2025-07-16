import { useNavigate } from "react-router-dom";
import * as Style from "./Navbar.styles";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
// import LogoIMG from "../../images/logo.png";

const Header = () => {
  const navigate = useNavigate();

  return (
    <Style.Container>
      <Style.Top>
        <Style.Title>
          <h1>Anderson Heidrich</h1>
        </Style.Title>
        <Style.Subtitle>
          <h2>Desenvolvedor Front-End</h2>
        </Style.Subtitle>
        <Style.Navigation>
          <Style.Menu>
            <div className="nav-menu">
              <div
                className="menu-item"
                onClick={() => {
                  navigate("#about");
                }}
              >
                <span>SOBRE</span>
              </div>
              <div
                className="menu-item"
                onClick={() => {
                  navigate("#experience");
                }}
              >
                <span>EXPERIÊNCIA</span>
              </div>
              <div
                className="menu-item"
                onClick={() => {
                  navigate("#projects");
                }}
              >
                <span>PROJETOS</span>
              </div>
            </div>
          </Style.Menu>
        </Style.Navigation>
      </Style.Top>
      <Style.Contact>
        <a href="https://github.com/andersonheidrich/" target="_blank">
          <GitHubIcon
            style={{ width: "28px", height: "28px" }}
            className="contact-icon"
          />
        </a>
        <a href="https://www.linkedin.com/in/andersonheidrich/" target="_blank">
          <LinkedInIcon
            style={{ width: "28px", height: "28px" }}
            className="contact-icon"
          />
        </a>
        <a href="https://www.instagram.com/anderson_heidrich/" target="_blank">
          <InstagramIcon
            style={{ width: "28px", height: "28px" }}
            className="contact-icon"
          />
        </a>
      </Style.Contact>
    </Style.Container>
  );
};

export default Header;
