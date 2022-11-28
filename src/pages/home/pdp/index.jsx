import { PdpCard } from "../../../components/pdpCard";
import "./styles.css";

export function PDP({ games }) {
  return (
    <div className="container-list-card">
      <div className="card-list">
        <PdpCard card={games} />
      </div>
    </div>
  );
}
