import React from "react";
import * as Style from "./Experience.styles";

const Experience = () => {
  return (
    <Style.Section>
      <div id="experience" />
      <a href="https://www.instagram.com/labenu_/" target="_blank">
        <Style.Card>
          <Style.Period>MAI 2021 — NOV 2021</Style.Period>
          <Style.Content>
            <Style.Title>
              Curso de Desenvolvedor Front-End com React · Labenu
            </Style.Title>
            <Style.Text>
              <ul>
                <li>
                  Programa com 500 horas de prática guiada em desenvolvimento
                  Front-End.
                </li>
                <li>
                  Aprendizado de tecnologias como HTML, CSS, JavaScript, React,
                  React Hooks, Styled Components e consumo de APIs RESTful.
                </li>
                <li>Experiência com Git e GitHub em projetos colaborativos.</li>
              </ul>
            </Style.Text>
            <Style.StackGroup>
              <Style.Stack>HTML e CSS</Style.Stack>
              <Style.Stack>JavaScript</Style.Stack>
              <Style.Stack>React</Style.Stack>
              <Style.Stack>Styled Components</Style.Stack>
              <Style.Stack>API RESTful</Style.Stack>
              <Style.Stack>Git e GitHub</Style.Stack>
            </Style.StackGroup>
          </Style.Content>
        </Style.Card>
      </a>
      <a href="https://www.freatz.com/" target="_blank">
        <Style.Card>
          <Style.Period>DEZ 2021 — NOV 2024</Style.Period>
          <Style.Content>
            <Style.Title>Desenvolvedor Front-End · Freatz</Style.Title>
            <Style.Text>
              Participei ativamente de projetos que ajudaram empresas a entender
              melhor o comportamento dos seus clientes, oferecendo informações
              úteis para apoiar decisões do dia a dia, sempre com foco em
              entregar soluções funcionais, intuitivas e voltadas à experiência
              do usuário.
            </Style.Text>
            <Style.StackGroup>
              <Style.Stack>JavaScript</Style.Stack>
              <Style.Stack>TypeScript</Style.Stack>
              <Style.Stack>React</Style.Stack>
              <Style.Stack>Metodologias Ágeis</Style.Stack>
            </Style.StackGroup>
          </Style.Content>
        </Style.Card>
      </a>
    </Style.Section>
  );
};

export default Experience;
