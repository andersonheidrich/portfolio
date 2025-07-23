import React from "react";
import * as Style from "./Projects.styles";
import Sorteador from "../../../../../images/Projects/sorteador.png";
import Todolist from "../../../../../images/Projects/todolist.png";
import Ecommerce from "../../../../../images/Projects/ecommerce.png";
import Games from "../../../../../images/Projects/games.png";
import Calculator from "../../../../../images/Projects/calculator.png";

const Projects = () => {
  return (
    <Style.Section>
      <div id="projects" />
      <a
        href="https://realizador-de-sorteios.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Style.Card>
          <Style.Image>
            <img src={Sorteador} />
          </Style.Image>
          <Style.Content>
            <Style.Title>Sorteador Online</Style.Title>
            <Style.Text>
              Criado para realizar sorteios de torneios de Beach Tennis, Padel,
              Tênis e qualquer outro esporte jogado em duplas ou 1x1.
            </Style.Text>
            <Style.StackGroup>
              <Style.Stack>HTML</Style.Stack>
              <Style.Stack>CSS</Style.Stack>
              <Style.Stack>JavaScript</Style.Stack>
              <Style.Stack>React</Style.Stack>
              <Style.Stack>Styled Components</Style.Stack>
            </Style.StackGroup>
          </Style.Content>
        </Style.Card>
      </a>
      <a
        href="https://andersonheidrich-to-do-list.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Style.Card>
          <Style.Image>
            <img src={Todolist} />
          </Style.Image>
          <Style.Content>
            <Style.Title>To Do List</Style.Title>
            <Style.Text></Style.Text>
            <Style.StackGroup>
              <Style.Stack></Style.Stack>
            </Style.StackGroup>
          </Style.Content>
        </Style.Card>
      </a>
      <a
        href="https://e-commerce-games-andersonheidrich.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Style.Card>
          <Style.Image>
            <img src={Ecommerce} />
          </Style.Image>
          <Style.Content>
            <Style.Title>E-commerce</Style.Title>
            <Style.Text>
              Site que simula uma loja virtual de consoles de videogames e jogos
              eletrônicos.
            </Style.Text>
            <Style.StackGroup>
              <Style.Stack></Style.Stack>
            </Style.StackGroup>
          </Style.Content>
        </Style.Card>
      </a>
      <a
        href="https://landing-page-games.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Style.Card>
          <Style.Image>
            <img src={Games} />
          </Style.Image>
          <Style.Content>
            <Style.Title>Landing Page Games</Style.Title>
            <Style.Text>
              Landing page contando um pouco sobre minha paixão por jogos
              eletrônicos desde a infância até os dias atuais.
            </Style.Text>
            <Style.StackGroup>
              <Style.Stack></Style.Stack>
            </Style.StackGroup>
          </Style.Content>
        </Style.Card>
      </a>
      <a
        href="https://andersonheidrichcalculator.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Style.Card>
          <Style.Image>
            <img src={Calculator} />
          </Style.Image>
          <Style.Content>
            <Style.Title>Calculadora</Style.Title>
            <Style.Text>Uma calculadora simples.</Style.Text>
            <Style.StackGroup>
              <Style.Stack></Style.Stack>
            </Style.StackGroup>
          </Style.Content>
        </Style.Card>
      </a>
    </Style.Section>
  );
};

export default Projects;
