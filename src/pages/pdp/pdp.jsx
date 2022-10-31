import styles from "./style.module.css";
// import LinksCard from "../LinksCard";
import { useNavigate } from "react-router-dom";
import Specifications from "./SpecificationsCard";
import ReviewCardContainer from "./ReviewCardContainer";
import Slider from "./Silder";

export function ProductPage() {
  const navigate = useNavigate();
  const images = [
    "https://img.elo7.com.br/product/zoom/2360213/jogo-americano-homem-aranha-jogo-americano-descartavel.jpg",
    "data:image/jpeg;base64,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",
    "https://www.ofuxico.com.br/wp-content/uploads/2022/05/homem-aranha-segue-sem-exibicao-na-china-foto.jpg",
  ];
  const genres = ["Ação, Sobrevivência, Tiro"];
  const features = [
    "Salvamentos na nuvem",
    "Compatíveis com Controle",
    "Cooperativo",
    "Multijogador",
  ];

  const review = [
    {
      organisation: "Destryctoid",
      author: "Kevin McClusky",
      rating: "7.5/10",
      description:
        "Is World War Z as good as Left 4 Dead? No. Is it fun despite that? Yes. There's few pleasures in gaming that can compare to swinging a thrumming chainsaw blade through a horde of ravenous undead, and World War Z delivers. And really, it's not like Valve makes games anymore.",
      link: "link",
    },
    {
      organisation: "IGN",
      author: "Michael Koczwara",
      rating: "7.4/10",
      description:
        "World War Z's lack of variety and ambition can't stop a satisfying zombie slashing with a good group of friends.",
      link: "link",
    },
    {
      organisation: "IGN",
      author: "Michael Koczwara",
      rating: "7.4/10",
      description:
        "World War Z's lack of variety and ambition can't stop a satisfying zombie slashing with a good group of friends.",
      link: "link",
    },
  ];
  return (
    <div class="container">
      <div className={styles.main}>
        <div className={styles.title}>
          <p className={styles.heading}>Homem aranha - de volta ao lar</p>
          <strong className={styles.back} role="button" onClick={() => navigate("/")}>
            Voltar
          </strong>
        </div>
        <div className={styles.container}>
          <div className={styles.card}>
            <div className={styles.slider}>
              <Slider data={images} />
            </div>

            <div>
              <p className={styles.description}>
                World War Z: Aftermath é o jogo de tiro cooperativo de zumbis
                definitivo, e a próxima evolução do sucesso original World War
                Z, que já cativou mais de 15 milhões de jogadores. Lute contra
                hordas de zumbis esfomeados em episódios intensos através de
                novos locais devastados por zumbis em todo o mundo.
              </p>
            </div>

            <div className={styles.features_div}>
              <div className={styles.genres}>
                <p className={styles.features_title}>Genre</p>
                <div className={styles.features_points_div}>
                  {genres.map((e, i) => (
                    <p key={i} className={styles.features_points}>
                      {e}{" "}
                    </p>
                  ))}
                </div>
              </div>

              <div className={styles.features}>
                <p className={styles.features_title}>Features</p>
                <div className={styles.features_points_div}>
                  {features.map((e, i) => (
                    <p key={i} className={styles.features_points}>
                      {e}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* about section */}
            <div className={styles.about_div}>
              <p className={styles.game_heading}>About Game</p>
              <div className={styles.about_game}>
                <p>
                  World War Z: Aftermath é o jogo de tiro cooperativo de zumbis
                  definitivo inspirado no sucesso de bilheteria da Paramount
                  Pictures, e a próxima evolução do sucesso original World War
                  Z, que já cativou mais de 15 milhões de jogadores. Vire o jogo
                  do apocalipse zumbi nos consoles e no PC com partidas
                  multiplataformas completas. Junte-se a até 3 amigos ou jogue
                  só com colegas da IA contra hordas de zumbis esfomeados em
                  episódios intensos através de novos locais devastados por
                  zumbis ao redor do mundo. Retome a Cidade do Vaticano em um
                  confronto épico em Roma e una forças com os sobreviventes da
                  congelante península de Kamchatka, na Rússia. World War Z:
                  Aftermath também inclui todo o conteúdo da Game of the Year
                  Edition de World War Z. Novas histórias de um mundo em guerra
                  Retome a Cidade do Vaticano em um confronto épico em Roma e
                  una forças com os sobreviventes da congelante península de
                  Kamchatka, na Rússia, em missões de história inéditas. Jogue
                  com personagens novos e conhecidos ao enfrentar mortos-vivos
                  em um novo sistema de luta corpo a corpo brutal, dizimando
                  zekes com golpes especiais, vantagens e opções de armas de
                  duas mãos, como a foice e o cutelo. Derrube monstruosidades
                  inéditas de mortos-vivos, inclusive hordas de ratos famintos
                  por carne que vão desencadear o caos na sua equipe. A próxima
                  geração das hordas de zumbis Jogue em gloriosos 4K|60 FPS.
                  Resista a levas infinitas de zumbis cada vez mais difíceis no
                  novo modo de jogo Modo Bando XL, que traz centenas de zumbis a
                  mais na tela como nunca antes visto. O Modo Bando XL vai
                  chegar em uma atualização pós-lançamento gratuita para PC.
                  Progressão profunda e uma nova perspectiva Experimente uma
                  nova perspectiva de tirar o fôlego com a nova opção imersiva
                  de Modo Primeira Pessoa de Aftermath. Suba de nível com oito
                  classes exclusivas: Atirador, Infernal, Retalhador, Médico,
                  Reparador, Exterminador, Mestre dos Drones e a novíssima
                  Vanguarda. Cada uma com vantagens e estilos de jogo próprios.
                  Personalize suas armas para sobreviver a qualquer desafio, e
                  conquiste novas missões diárias com modificadores especiais
                  por recompensas bônus.
                </p>
              </div>

              <div className={styles.game_features_div}>
                <p className={styles.game_heading}>Game Features</p>
                <div className={styles.game_features}>
                  {features.map((e, i) => (
                    <p className={styles.list} key={i}>
                      • {e}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <div className={styles.about_images}>
              <div className={styles.images_div}>
                {/* <img src={data.images[0]} alt="images" />
                <img src={data.images[1]} alt="" /> */}
              </div>
              {/* <img src={data.images[2]} alt="" /> */}

              <div className={styles.images_div}>
                {/* <img src={data.images[3]} alt="" />
                <img src={data.images[4]} alt="" /> */}
              </div>
            </div>

            <div className={styles.links}>{/* <LinksCard /> */}</div>

            <div className={styles.reviews}>
              <ReviewCardContainer data={review} />
            </div>

            <div className={styles.specifications}>
              <Specifications />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
