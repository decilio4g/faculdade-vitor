import { Link } from "react-router-dom";

// import TopCategorySlider from "../../TopCategorySlider";
import styles from "./mainCardContainer.module.css";
import GameCard from "../../components/BrowsePageComponents/GameCard";

const MainCardContainer = ({ data, title }) => {
  const listCards = [
    {
      title: 'Spider Man: The game',
      price: '150.00',
      cardImage: require('../../assets/635329.jpeg'),
      cardTagline: 'OLLALAL'
    },
    {
      title: 'Spider Man: The game',
      price: '150.00',
      cardImage: require('../../assets/635329.jpeg'),
      cardTagline: 'OLLALAL'

    },
    {
      title: 'Spider Man: The game',
      price: '150.00',
      cardImage: require('../../assets/635329.jpeg'),
      cardTagline: 'OLLALAL'

    },
    {
      title: 'Spider Man: The game',
      price: '150.00',
      cardImage: require('../../assets/635329.jpeg'),
      cardTagline: 'OLLALAL'

    },
    {
      title: 'Spider Man: The game',
      price: '150.00',
      cardImage: require('../../assets/635329.jpeg'),
      cardTagline: 'OLLALAL'
    }
  ]
  return (
    <>
      {/* <TopCategorySlider text={title} /> */}
      <div className={styles.mainCardContainer}>
        <div className={styles.container}>
          {listCards.map((el, i) => {
            return (
              <div key={i} className={styles.card}>
                <Link to={`/games/${el._id}`}>
                  <GameCard
                    image={el.cardImage}
                    title={el.title}
                    tagline={el.cardTagline}
                    price={el.price}
                    id={el._id}
                  />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MainCardContainer;
