import React from "react";
import * as Style from "./About.styles";

const About = () => {
  return (
    <Style.Section>
      <div id="about" />
      <Style.Content>
        <p style={{ margin: "12px 0 40px" }}>
          Desenvolvedor Front-End com 3 anos de experiência em React.js,
          JavaScript e TypeScript, onde atuei no desenvolvimento e manutenção de
          sistemas voltados à interpretação de dados, criando interfaces
          eficientes e responsivas que auxiliaram na análise de perfis de
          clientes no segmento de restaurantes.
        </p>
        <p style={{ marginBottom: "40px" }}>
          Apaixonado por tecnologia, estou sempre em busca de aprimoramento
          contínuo.
        </p>
      </Style.Content>
    </Style.Section>
  );
};

export default About;
