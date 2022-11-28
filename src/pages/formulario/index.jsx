import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { api } from "../../service/api";
import "./styles.css";

export function Form() {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (form) => {
    const { data } = await api.post("registerNewGame", form);
    console.log("RESPONSE AQUI GABRIEL", data);
  };

  const navigate = useNavigate();

  return (
    <div className="container-formulario">
      <h1 className="container-title">Formulário de inscrição de jogos</h1>
      <form onSubmit={handleSubmit(onSubmit)} class="box">
        <div className="group-one">
          <div id="minimo">
            <p id="v">Descrição</p>
            <textarea type="textarea" id="c" {...register("description")} />
            <p id="v">Game Features</p>
            <textarea type="textarea" id="c" {...register("gameFeatures")} />
            <p id="v">Genêro</p>
            <input type="text" id="b" {...register("gender")} />
            <p id="v">Caracteristicas</p>
            <input type="text" id="b" {...register("details")} />
            <p id="v">Valor</p>
            <input type="number" id="b" {...register("value")} />
            <p id="v">Desconto</p>
            <input type="number" id="b" {...register("descont")} />
          </div>
          <div id="recomendado" className="recomendado-one">
            <p id="v">Fotos do jogo</p>
            <input type="file" id="f" {...register("picture")} />
            <p id="v">Tamanho</p>
            <input type="text" id="b" {...register("size")} />
            <p id="v">Plataforma</p>
            <input type="text" id="b" {...register("plataform")} />
            <p id="v">Autor</p>
            <input type="text" id="b" {...register("author")} />
            <p id="v">Data de lançamento</p>
            <input type="date" id="b" {...register("date")} />
            <p id="v">Locais disponiveis</p>
            <select name="" id="b" {...register("location")}>
              <option>Brasil</option>
              <option>China</option>
              <option>Chile</option>
              <option>Japão</option>
              <option>Canada</option>
            </select>

            <p id="v">Irá ter pré-vendas?</p>
            <br />
            <input type="radio" id="Sim" name="fav_language" value="SIM" />
            <label for="Sim">Sim</label>
            <br />
            <input type="radio" id="Não" name="fav_language" value="NÃO" />
            <label for="Não">Não</label>
          </div>
        </div>
        <div className="windows">
          <div id="minimo">
            <h2>Mínimo</h2>
            <p id="v">Sistema operacional</p>
            <input type="text" id="b" {...register("minSystem")} />
            <p id="v">Processador</p>
            <input type="text" id="b" {...register("minProcessor")} />
            <p id="v">Memória</p>
            <input type="text" id="b" {...register("minMemory")} />
            <p id="v">Armazenamento</p>
            <input type="text" id="b" {...register("minStorage")} />
            <p id="v">DirectX</p>
            <input type="text" id="b" {...register("minDirectX")} />
            <p id="v">Placa de vídeo</p>
            <input type="text" id="b" {...register("minGpu")} />
          </div>
          <div id="recomendado">
            <h2>Recomendado</h2>
            <p id="v">Sistema operacional</p>
            <input type="text" id="b" {...register("maxSystem")} />
            <p id="v">Processador</p>
            <input type="text" id="b" {...register("maxrocessor")} />
            <p id="v">Memória</p>
            <input type="text" id="b" {...register("maxMemory")} />
            <p id="v">Armazenamento</p>
            <input type="text" id="b" {...register("maxStorage")} />
            <p id="v">DirectX</p>
            <input type="text" id="b" {...register("maxDirectX")} />
            <p id="v">Placa de vídeo</p>
            <input type="text" id="b" {...register("maxGpu")} />
          </div>
        </div>

        <div className="button-wrapper">
          <button className="button" type="submit">
            Cadastrar
          </button>
          <strong
            onClick={() => navigate("/")}
            style={{ marginLeft: 15 }}
            className="button"
            role="button"
          >
            Voltar
          </strong>
        </div>
      </form>
    </div>
  );
}
