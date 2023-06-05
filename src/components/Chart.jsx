import { useContext, useEffect, useState } from 'react';
import { fetchAccessToken } from '../fetchAccessToken';
import { ChartDiv } from '../styles/ChartStyles';
import { FilterContext } from './FilterContext';
import { TotalBarChart } from './TotalBarChart';
import { CityBarChart } from './CityBarChart';
import { AgeDoughnutChart } from './AgeDoughnutChart';

export const Chart = () => {
  const { selectedYear, selectedCity, selectedAge } = useContext(FilterContext);
  const [accessToken, setAccessToken] = useState('');
  const [selectCity, setSelectCity] = useState(false);
  const [selectAge, setSelectAge] = useState(false);
  const [error, setError] = useState('');

  // token
  useEffect(() => {
    const fetchToken = async () => {
      const token = await fetchAccessToken();
      if (token) {
        setAccessToken(token);
      }
    };

    fetchToken();
  }, []);

  // select
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!selectedCity || !selectedAge) {
          setSelectCity(false);
          setSelectAge(false);
        }
        if (accessToken) {
          if (selectedCity) {
            setSelectCity(true);
            setSelectAge(false);
          }
          if (selectedAge) {
            setSelectCity(false);
            setSelectAge(true);
          }
        }
      } catch (error) {
        setError(error.message);
        console.error('데이터 가져오기 오류:', error);
      }
    };

    fetchData();
  }, [selectedYear, selectedCity, selectedAge, accessToken]);

  return (
    <ChartDiv>
      {error ? (
        <Error>Error: {error}</Error>
      ) : (
        <>
          {selectCity && <CityBarChart accessToken={accessToken} />}
          {selectAge && <AgeDoughnutChart accessToken={accessToken} />}
          {!selectCity && !selectAge && (
            <TotalBarChart accessToken={accessToken} />
          )}
        </>
      )}
    </ChartDiv>
  );
};
