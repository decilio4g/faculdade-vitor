import { useNavigate, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useUser } from "../../store/auth";
import { api } from "../../service/api";
import { useAuth } from "../../Auth/useAuth";

import "./style.css";

export function Login() {
  let navigate = useNavigate();
  let location = useLocation();
  let auth = useAuth();

  const { register, handleSubmit } = useForm();

  const onSubmit = async (form) => {
    const { data } = await api.post("login", form);

    if (data.status === 201) navigate("/formulario");

    console.log("RESPONSE AQUI GABRIEL", data);
  };

  return (
    <div class="container">
      <form onSubmit={handleSubmit(onSubmit)} class="box">
        <div class="tgr">
          <div class="logo">
            <img
              src="https://logodownload.org/wp-content/uploads/2020/10/epic-games-logo-2.png"
              alt=""
            />
          </div>
          <div class="text1">
            <p>
              {" "}
              <strong>FAZER LOGIN COM UMA CONTA DA EPIC GAMES</strong>{" "}
            </p>
          </div>
          <div class="login">
            <div id="email">
              <input
                type="text"
                name="email"
                {...register("email")}
                title="Endereço de E-mail"
                placeholder="Endereço de E-mail"
              />
            </div>
            {/* <div id="password">
                            <input type="password" title="Senha" placeholder="Senha" />
                        </div> */}
            <div class="lembrar">
              <div id="certify">
                <input type="checkbox" />
              </div>
              <div id="remember">
                <p>Lembrar de mim</p>
              </div>
            </div>
          </div>
        </div>
        <div class="allbonus">
          <div id="enter">
            <button type="submit">
              <strong>ENTRE NA SUA CONTA AGORA</strong>
            </button>
          </div>
          <div id="bonus" onClick={() => navigate("/register")}>
            <p>Não tem uma conta da Epic Games?</p>Cadastrar
          </div>
        </div>
      </form>
    </div>
  );
}
