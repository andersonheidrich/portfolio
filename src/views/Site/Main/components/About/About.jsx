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
          Sou Desenvolvedor Front-End com mais de 3 anos de experiência em
          JavaScript, TypeScript e React. Ao longo da minha trajetória, atuei no
          desenvolvimento e manutenção de sistemas focados na interpretação e
          visualização de dados, contribuindo diretamente para a criação de
          interfaces intuitivas, eficientes e responsivas. Esses sistemas
          tiveram papel fundamental na análise de perfis de clientes,
          especialmente no setor de restaurantes, otimizando a tomada de
          decisões e melhorando a experiência dos usuários finais.
        </span>
        <span>
          Apaixonado por tecnologia e inovação, estou sempre buscando aprender
          algo novo. Gosto de me manter atualizado e encarar desafios que me
          ajudem a crescer como profissional. Acredito que evoluir como
          desenvolvedor é um processo constante — e é isso que me motiva todos
          os dias a escrever códigos que realmente façam a diferença.
        </span>
        <span>
          Nos meus momentos de lazer, praticar Beach Tennis é uma das minhas
          principais formas de relaxar e manter a mente ativa — além de ser um
          esporte que me desafia constantemente e contribui para o meu
          bem-estar. Apaixonado por jogos eletrônicos desde a infância, ainda
          hoje dedico um tempo a esse universo, que considero uma forma
          divertida e imersiva de exercitar o raciocínio e a concentração.
        </span>
      </Style.Content>
    </Style.Section>
  );
};

export default About;
