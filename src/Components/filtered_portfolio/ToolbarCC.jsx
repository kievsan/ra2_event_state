// import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import classes from './main.module.css';


const Toolbar = ({filters, selected, onSelectFilter}) => {
  return (
    <>
      {
        filters.map(filter => (
          <button 
          type="button"
          key={filter} 
          disabled={filter === selected}
          className={clsx([classes['btn']], selected === filter && [classes['btn-selected']])} 
          onClick={() => onSelectFilter(filter)}>
            {filter}
          </button>
        ))
      }
    </>
  )
}

Toolbar.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.string.isRequired),
  selected: PropTypes.string.isRequired,
  onSelectFilter: PropTypes.func.isRequired,
};

export default Toolbar;
