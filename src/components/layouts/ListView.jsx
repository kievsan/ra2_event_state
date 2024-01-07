import PropTypes from 'prop-types';

import classes from './main.module.css';


const CardsView = ({ cards }) => (
  <ul className={`${classes["cardsRoot"]} ${classes["cardsWrap"]}`}>
    {
      cards.map((card, i) => {
        return (
          <li key={i} className={classes["li"]}>
            <div className={`${classes["imgWrap"]} ${classes["liImgWrap"]}`} style={{
              backgroundImage: `url(${card.img})`}}>
            </div>
            <h2 className={classes["header"]}>{card.name}</h2>
            <span className={classes["color"]}>{card.color}</span>
            <span className={classes["price"]}>{`$${card.price}`}</span>
            <button className={classes["cartBtn"]}>add to cart</button>
          </li>
        )
      })
    }
  </ul>
);

CardsView.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
    }),
  )
}

export default CardsView;
