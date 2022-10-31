import { useNavigate } from "react-router-dom";
import "./styles.css";

export function Form() {
  const navigate = useNavigate();
  return (
    <div className="container-formulario">
      <h1 className="container-title">Formulário de inscrição de jogos</h1>
      <div className="group-one">
        <div id="minimo">
          <p id="v">Descrição</p>
          <textarea type="textarea" id="c" />
          <p id="v">Game Features</p>
          <textarea type="textarea" id="c" />
          <p id="v">Genêro</p>
          <input type="text" id="b" />
          <p id="v">Caracteristicas</p>
          <input type="text" id="b" />
          <p id="v">Valor</p>
          <input type="number" id="b" />
          <p id="v">Desconto</p>
          <input type="number" id="b" />
        </div>
        <div id="recomendado" className="recomendado-one">
          <p id="v">Fotos do jogo</p>
          <input type="file" id="f" />
          <p id="v">Tamanho</p>
          <input type="text" id="b" />
          <p id="v">Plataforma</p>
          <input type="text" id="b" />
          <p id="v">Autor</p>
          <input type="text" id="b" />
          <p id="v">Data de lançamento</p>
          <input type="date" id="b" />
          <p id="v">Locais disponiveis</p>
          <select name="" id="b">
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
          <input type="text" id="b" />
          <p id="v">Processador</p>
          <input type="text" id="b" />
          <p id="v">Memória</p>
          <input type="text" id="b" />
          <p id="v">Armazenamento</p>
          <input type="text" id="b" />
          <p id="v">DirectX</p>
          <input type="text" id="b" />
          <p id="v">Placa de vídeo</p>
          <input type="text" id="b" />
        </div>
        <div id="recomendado">
          <h2>Recomendado</h2>
          <p id="v">Sistema operacional</p>
          <input type="text" id="b" />
          <p id="v">Processador</p>
          <input type="text" id="b" />
          <p id="v">Memória</p>
          <input type="text" id="b" />
          <p id="v">Armazenamento</p>
          <input type="text" id="b" />
          <p id="v">DirectX</p>
          <input type="text" id="b" />
          <p id="v">Placa de vídeo</p>
          <input type="text" id="b" />
        </div>
      </div>

      <div className="button-wrapper">
        <strong onClick={() => navigate("/")} className="button" role="button">
          Cadastrar
        </strong>
        <strong
          onClick={() => navigate("/")}
          style={{ marginLeft: 15 }}
          className="button"
          role="button"
        >
          Voltar
        </strong>
      </div>
    </div>
  );
}
