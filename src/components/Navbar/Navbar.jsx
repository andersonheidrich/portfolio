import * as Style from "./Navbar.styles";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const Header = () => {
  return (
    <Style.Container>
      <Style.Top>
        <Style.Title>Anderson Heidrich</Style.Title>
        <Style.Subtitle>Desenvolvedor Front-End</Style.Subtitle>
        <Style.Navigation>
          <Style.Menu>
            <div className="nav-menu">
              <div className="menu-item">
                <span>
                  <a href="#about">SOBRE</a>
                </span>
              </div>
              <div className="menu-item">
                <span>
                  <a href="#experience">EXPERIÊNCIA</a>
                </span>
              </div>
              <div className="menu-item">
                <span>
                  <a href="#projects">PROJETOS</a>
                </span>
              </div>
            </div>
          </Style.Menu>
        </Style.Navigation>
      </Style.Top>
      <Style.Contact>
        <a
          href="https://github.com/andersonheidrich/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon
            style={{ width: "32px", height: "32px" }}
            className="contact-icon"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/andersonheidrich/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon
            style={{ width: "32px", height: "32px" }}
            className="contact-icon"
          />
        </a>
        <a
          href="https://www.instagram.com/anderson_heidrich/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon
            style={{ width: "32px", height: "32px" }}
            className="contact-icon"
          />
        </a>
      </Style.Contact>
    </Style.Container>
  );
};

export default Header;
