import "./styles.css";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { api } from "../../service/api";

export function Register() {
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();
  const onSubmit = async (form) => {
    const { data } = await api.post("register", form);
    navigate("/");
  };

  return (
    <div className="container">
      <div className="box">
        <div className="tgr">
          <div class="logo">
            <img
              src="https://logodownload.org/wp-content/uploads/2020/10/epic-games-logo-2.png"
              alt="/"
            />
          </div>
          <div class="text1">
            <p>
              <strong>FAZER CADASTRO DE UMA CONTA EPIC GAMES</strong>
            </p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="cadastro">
              <div id="nome">
                <input
                  type="text"
                  title="Nome*"
                  placeholder="Nome"
                  {...register("name")}
                />
              </div>
              <div id="sobrenome">
                <input
                  type="text"
                  title=""
                  placeholder="Sobrenome"
                  {...register("lastname")}
                />
              </div>
              <div id="nome-de-exibicao">
                <input
                  type="text"
                  title="Nome de exibição"
                  placeholder="Nome de exibição"
                  {...register("displayName")}
                />
              </div>
              <div id="data">
                <input
                  type="text"
                  title="Idade"
                  placeholder="Idade"
                  {...register("age")}
                />
              </div>
              <div id="telefone">
                <input
                  type="tel"
                  title="Telefone"
                  placeholder="Telefone"
                  {...register("phone")}
                />
              </div>
              <div id="email">
                <input
                  type="text"
                  title="Endereço de E-mail"
                  placeholder="Endereço de E-mail"
                  {...register("email")}
                />
              </div>
              <div id="password">
                <input
                  type="password"
                  title="Senha"
                  placeholder="Senha"
                  {...register("password")}
                />
              </div>
              <div id="confirmar">
                <input
                  type="password"
                  title="Confirmar Senha"
                  placeholder="Confirmar Senha"
                  {...register("confirmPassword")}
                />
              </div>
              <div className="li-e-concordo">
                <div id="certify">
                  <input type="checkbox" />
                </div>
                <div id="li">
                  <p>Li e concordo com os termos e condições</p>
                </div>
              </div>
              <div className="noticia">
                <div id="certify-2">
                  <input type="checkbox" />
                </div>
                <div id="noticias">
                  <p>Quero receber noticias por e-mail</p>
                </div>
              </div>
              <button classNameName="allbonus" type="submit">
                <div id="enter">
                  <strong>CADASTRAR</strong>
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
