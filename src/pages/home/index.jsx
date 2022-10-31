import { MediumCardList } from "./medium";
import { PDP } from "./pdp";
import { Title } from "../../components/title";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../../store/auth";
import style from "./styles.module.css";

export function Home() {
  const { userLoged, goOut } = useUser((state) => state);
  const navigate = useNavigate();
  return (
    <div className={style.container}>
      <div className={style.top}>
        <Title title="Jogos em destaque" />

        {userLoged ? (
          <div className={style.registerOut}>
            <strong className={style.navigate} onClick={() => navigate("/formulario")}>
              Cadastrar um novo jogo
            </strong>
            <strong className={style.out} onClick={goOut}>Sair </strong>
          </div>
        ) : (
          <Link to="login">
            <div className={style.wrapperLogin}>
              <strong className={style.button} role="button">
                Login
              </strong>
            </div>
          </Link>
        )}
      </div>
      <PDP />
      <MediumCardList />
    </div>
  );
}
