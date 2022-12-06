import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import DataContext from './DataContext';

export default function DataProvider({ children }) {
  const [data, setData] = useState([]);

  const dataValue = useMemo(() => ({
    data,
    setData,
  }), [data]);

  return (
    <DataContext.Provider value={ dataValue }>
      { children }
    </DataContext.Provider>
  );
}

DataProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object),
}.isRequired;
