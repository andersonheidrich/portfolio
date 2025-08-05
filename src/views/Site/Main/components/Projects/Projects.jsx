import * as Style from "./Projects.styles";
import Sorteador from "../../../../../images/Projects/sorteador.png";
import Todolist from "../../../../../images/Projects/todolist.png";
import Ecommerce from "../../../../../images/Projects/ecommerce.png";
import Games from "../../../../../images/Projects/games.png";
import RickAndMorty from "../../../../../images/Projects/rickandmorty.png";

const Projects = () => {
  return (
    <Style.Section>
      <div id="projects" />
      <Style.Menu>
        <span>PROJETOS</span>
      </Style.Menu>
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
              A aplicação foi inicialmente criada para automatizar sorteios de
              torneios de Beach Tennis — modalidade que pratico. Atualmente,
              está adaptada para realizar sorteios de qualquer esporte disputado
              em duplas ou confrontos individuais (1x1), oferecendo
              flexibilidade e praticidade na organização de competições.
            </Style.Text>
            <Style.StackGroup>
              <Style.Stack>HTML</Style.Stack>
              <Style.Stack>CSS</Style.Stack>
              <Style.Stack>JavaScript</Style.Stack>
              <Style.Stack>React</Style.Stack>
              <Style.Stack>Styled Components</Style.Stack>
              <Style.Stack>Vercel</Style.Stack>
            </Style.StackGroup>
          </Style.Content>
        </Style.Card>
      </a>
      <a
        href="https://rick-and-morty-and-me.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Style.Card>
          <Style.Image>
            <img src={RickAndMorty} />
          </Style.Image>
          <Style.Content>
            <Style.Title>Rick and Morty</Style.Title>
            <Style.Text>
              Aplicação web que consome a API de Rick and Morty para exibir uma
              lista de personagens, permitindo visualizar detalhes individuais e
              marcar favoritos — que ficam salvos em um menu dedicado.
            </Style.Text>
            <Style.StackGroup>
              <Style.Stack>Next.js</Style.Stack>
              <Style.Stack>React</Style.Stack>
              <Style.Stack>TypeScript</Style.Stack>
              <Style.Stack>Tailwind CSS</Style.Stack>
              <Style.Stack>GraphQL</Style.Stack>
              <Style.Stack>Apollo Client</Style.Stack>
              <Style.Stack>Vercel</Style.Stack>
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
              <Style.Stack>HTML</Style.Stack>
              <Style.Stack>CSS</Style.Stack>
              <Style.Stack>JavaScript</Style.Stack>
              <Style.Stack>React</Style.Stack>
              <Style.Stack>Styled Components</Style.Stack>
              <Style.Stack>Swiper</Style.Stack>
              <Style.Stack>Vercel</Style.Stack>
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
            <Style.Text>
              Ferramenta desenvolvida para ajudar usuários a organizarem suas
              atividades do dia a dia de forma prática e eficiente. Seu
              principal objetivo é permitir que o usuário registre, visualize,
              edite e conclua tarefas em um só lugar, promovendo maior controle
              e produtividade.
            </Style.Text>
            <Style.StackGroup>
              <Style.Stack>HTML</Style.Stack>
              <Style.Stack>CSS</Style.Stack>
              <Style.Stack>JavaScript</Style.Stack>
              <Style.Stack>React</Style.Stack>
              <Style.Stack>Styled Components</Style.Stack>
              <Style.Stack>Vercel</Style.Stack>
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
              Dedicada à minha jornada no universo dos jogos eletrônicos,
              compartilhando um pouco da minha paixão que nasceu ainda na
              infância e dura até hoje. Desde os primeiros contatos com consoles
              e jogos clássicos, até os títulos atuais que continuam despertando
              o mesmo entusiasmo de antigamente. Aqui, divido experiências,
              memórias, influências e como os games se tornaram parte essencial
              da minha vida pessoal e criativa.
            </Style.Text>
            <Style.StackGroup>
              <Style.Stack>HTML</Style.Stack>
              <Style.Stack>CSS</Style.Stack>
              <Style.Stack>JavaScript</Style.Stack>
              <Style.Stack>React</Style.Stack>
              <Style.Stack>Styled Components</Style.Stack>
              <Style.Stack>Swiper</Style.Stack>
              <Style.Stack>Vercel</Style.Stack>
            </Style.StackGroup>
          </Style.Content>
        </Style.Card>
      </a>
    </Style.Section>
  );
};

export default Projects;
