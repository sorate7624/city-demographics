import { useContext, useEffect, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import axios from 'axios';
import { Loading, Error, Summary } from '../styles/ChartStyles';
import { doughnutChartOptions } from '../doughnutChartOptions';
import { FilterContext } from './FilterContext';

ChartJS.register(ArcElement, Tooltip, Legend);

export const AgeDoughnutChart = ({ accessToken }) => {
  const { selectedYear, selectedCity, selectedAge } = useContext(FilterContext);
  const [totalPopulation, setTotalPopulation] = useState(0);
  const [totalAvgAge, setTotalAvgAge] = useState(0);
  const [selectPopulation, setSelectPopulation] = useState(0);
  const [avgAge, setAvgAge] = useState(0);
  const [selectAge, setSelectAge] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const URL =
        'https://sgisapi.kostat.go.kr/OpenAPI3/stats/searchpopulation.json?';
      const CITY_DEMOGRAPHICS_URL = `${URL}year=${selectedYear}&accessToken=${accessToken}${
        selectedCity ? `&adm_cd=${selectedCity}` : ''
      }${selectedAge ? `&age_type=${selectedAge}` : ''}`;

      try {
        if (!selectedAge) {
          return;
        }
        const response = await axios.get(CITY_DEMOGRAPHICS_URL);
        const isSuccess = response.data.errCd === 0;

        if (isSuccess) {
          const totalResponse = await axios.get(
            `${URL}year=${selectedYear}&accessToken=${accessToken}${
              selectedCity ? `&adm_cd=${selectedCity}` : ''
            }`
          );
          const selectedResponse = await axios.get(
            `${CITY_DEMOGRAPHICS_URL}&age_type=${selectedAge}`
          );
          const totalPopulation = totalResponse.data.result.reduce(
            (acc, cur) => {
              const population = parseInt(cur.population, 10);
              return acc + population;
            },
            0
          );
          const totalAvgAge = totalResponse.data.result
            .reduce((acc, cur, index, arr) => {
              const age = parseInt(cur.avg_age, 10);
              return acc + age / arr.length;
            }, 0)
            .toFixed(1);
          const selectPopulation = selectedResponse.data.result.reduce(
            (acc, cur) => {
              const population = parseInt(cur.population, 10);
              return acc + population;
            },
            0
          );
          const avgAge = Number(response.data.result[0].avg_age).toFixed(1);
          setTotalPopulation(totalPopulation);
          setTotalAvgAge(totalAvgAge);
          setSelectPopulation(selectPopulation);
          setAvgAge(avgAge);
        } else {
          setError(error.message);
          console.error('데이터 가져오기 오류:', response.data);
        }
        setLoading(true);
      } catch (error) {
        setLoading(true);
        setError(error.message);
        console.error('데이터 가져오기 오류:', error);
      }
    };

    if (accessToken) {
      fetchData();
    }

    // selectedAge
    const lastDigit = selectedAge % 10;
    if (lastDigit === 0) {
      setSelectAge('10대 이하');
    } else {
      setSelectAge(`${lastDigit}0대`);
    }
  }, [selectedYear, selectedCity, selectedAge, accessToken]);

  const pieData = {
    labels: ['Total population', 'Selected population'],
    datasets: [
      {
        label: 'Population',
        data: [totalPopulation, selectPopulation],
        backgroundColor: [
          'rgba(25, 226, 161, 0.5)',
          'rgba(253, 253, 151, 0.5)',
        ],
        borderColor: ['rgba(25, 226, 161, 1)', 'rgba(253, 253, 151, 1)'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      {error ? (
        <Error>Error: {error}</Error>
      ) : loading ? (
        <>
          <Doughnut options={doughnutChartOptions} data={pieData} />
          <Summary>
            <p>
              총 인구 수: <span>{totalPopulation}</span>명
            </p>
            <p>
              총 평균 나이: <span>{totalAvgAge}</span>세
            </p>
            <p>
              {selectAge} 인구 수: <span>{selectPopulation}</span>명
            </p>
            <p>
              {selectAge} 평균 나이: <span>{avgAge}</span>세
            </p>
          </Summary>
        </>
      ) : (
        <Loading>
          <p>
            <span>L</span>
            <span>O</span>
            <span>A</span>
            <span>D</span>
            <span>I</span>
            <span>N</span>
            <span>G</span>
          </p>
        </Loading>
      )}
    </>
  );
};
