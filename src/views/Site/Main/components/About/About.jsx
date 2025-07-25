import React from "react";
import * as Style from "./About.styles";

const About = () => {
  return (
    <Style.Section>
      <div id="about" />
      <Style.Menu>
        <span>SOBRE</span>
      </Style.Menu>
      <Style.Content>
        <span>
          Desenvolvedor Front-End com 3 anos de experiência em JavaScript,
          TypeScript e React, onde atuei no desenvolvimento e manutenção de
          sistemas voltados à interpretação de dados, criando interfaces
          eficientes e responsivas que auxiliaram na análise de perfis de
          clientes no segmento de restaurantes.
        </span>
        <span>
          Apaixonado por tecnologia, estou sempre em busca de aprimoramento
          contínuo.
        </span>
      </Style.Content>
    </Style.Section>
  );
};

export default About;
