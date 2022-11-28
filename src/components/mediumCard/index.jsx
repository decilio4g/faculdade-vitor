import { Link } from "react-router-dom";
import "./styles.css";

export function MediumCard() {
  return (
    <div class="container-medium-card">
      <Link to="/product">
        <div class="box">
          <div id="img1">
            <img
              src={require("../../assets/homem-aranha-game-1-800x450.webp")}
              alt=""
            />
          </div>
          <div id="game1">
            <p id="l2">Spider Man: The Game</p>
            <p id="l3">
              Jogue como o homem-aranha combatendo crimes e vilões marcantes na
              Nova York da Marvel em uma história original cheia de aventura.
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
