import React from 'react';
import PropTypes from 'prop-types';
import PricingItem from './PricingItem';
import style from './pricingPlan.module.css';

const PricingPlan = ({ items }) => (
  <ul className={style.pricingPlan}>
    {items.map(item => (
      <li className={style.item} key={item.label}>
        <PricingItem {...item} />
      </li>
    ))}
  </ul>
);

PricingPlan.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({ label: PropTypes.string.isRequired }),
  ).isRequired,
};

export default PricingPlan;
