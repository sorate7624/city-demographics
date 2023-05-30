import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles.js';
import { Header } from './components/Header';
import { Filter } from './components/Filter';
import { Chart } from './components/Chart';

export const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      <Filter />
      <Chart />
    </BrowserRouter>
  );
};
