import { useState } from "react";


import PriceComponent from "../../PriceComponent";
import styles from "./game-card.module.css";

const GameCard = (props) => {

  const [inWishlist, setStatus] = useState(false);


  const add = (e) => {
  };

  return (
    <div className={styles.card}>
      <div className={styles.image_div}>
        <img src={props.image} alt={props.title} />
        <div onClick={add} className={styles.icon}>
          {!inWishlist ? (
            <img src={require('../../../icons/Already_in_Wishlist.svg')} alt="icon" />
            ) : (
            <img src={require('../../../icons/Already_in_Wishlist.svg')} alt="icon" />
          )}
        </div>
      </div>
      <div className={styles.info}>
        <p className={styles.title}>{props.title}</p>
        <div className={styles.tagline_cont}>
          <p className={styles.tagline}>{props.tagline}</p>
        </div>
      </div>
      <div className={styles.price}>
        <PriceComponent price={150.00} />
      </div>
    </div>
  );
};

export default GameCard;
