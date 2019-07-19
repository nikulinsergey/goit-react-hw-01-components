import React from 'react';
import PropTypes from 'prop-types';
import style from './pricingPlan.module.css';

const PricingItem = ({ icon, label, capacity, description, price }) => (
  <div className={style.pricingItem}>
    <img className={style.icon} src={icon} alt="" />
    <h2 className={style[label]}>{label}</h2>
    <p className={style.capacity}>{capacity} STORAGE</p>
    <p className={style.description}>{description}</p>
    <p className={style.price}>${price}/MO</p>
    <button
      className={`${style.button} ${style[`button${label}`]}`}
      type="button"
    >
      Get Started
    </button>
  </div>
);

PricingItem.propTypes = {
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  capacity: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
export default PricingItem;
