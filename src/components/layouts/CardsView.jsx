import PropTypes from 'prop-types';

import classes from './main.module.css';


const CardsView = ({ cards }) => (
  <div className={classes["cardsRoot"]}>
    {
      cards.map((card, idx) => {
        return (          
          <div className={classes['card']} key={idx}>
            <h2 className={classes["header"]}>{card.name}</h2>
            <span className={classes["color"]}>{card.color}</span>
            <div className={`${classes["imgWrap"]} ${classes["cardImgWrap"]}`} style={{
              backgroundImage: `url(${card.img})`}}>
            </div>
            <div className={classes["cardPurchase"]}>
              <span className={classes["price"]}>{`$${card.price}`}</span>
              <button className={classes["cartBtn"]}>add to cart</button>
            </div>
          </div>
        )
      })
    }
  </div>
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
