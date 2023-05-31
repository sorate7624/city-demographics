import React, { createContext, useState } from 'react';

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [selectedYear, setSelectedYear] = useState('2021');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedAge, setSelectedAge] = useState('');

  return (
    <FilterContext.Provider
      value={{
        selectedYear,
        selectedCity,
        selectedAge,
        setSelectedYear,
        setSelectedCity,
        setSelectedAge,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
