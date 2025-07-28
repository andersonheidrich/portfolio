import * as Style from "./SiteDescription.styles";

const SiteDescription = () => {
  return (
    <Style.Section>
      <Style.Content>
        <span>
          Projeto criado com{" "}
          <a href="https://vite.dev/" target="_blank" rel="noopener noreferrer">
            Vite
          </a>
          . Utilizei{" "}
          <a
            href="https://react.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>{" "}
          para a construção da interface e{" "}
          <a
            href="https://styled-components.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Styled Components
          </a>{" "}
          e{" "}
          <a href="https://mui.com/" target="_blank" rel="noopener noreferrer">
            MUI
          </a>{" "}
          para a estilização e criação dos componentes visuais. Todo o
          desenvolvimento foi feito no{" "}
          <a
            href="https://code.visualstudio.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            VS Code
          </a>{" "}
          e o deploy foi realizado via{" "}
          <a
            href="https://vercel.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vercel
          </a>
          .
        </span>
      </Style.Content>
    </Style.Section>
  );
};

export default SiteDescription;
