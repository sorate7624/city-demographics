import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles.js';
import { Header } from './components/Header';
import { Filter } from './components/Filter';
import { Chart } from './components/Chart';
import { FilterProvider } from './components/FilterContext';

export const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      <FilterProvider>
        <Filter />
        <Chart />
      </FilterProvider>
    </BrowserRouter>
  );
};
