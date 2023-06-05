import { useContext, useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';
import { barChartOptions } from '../barChartOptions';
import { Loading, Error } from '../styles/ChartStyles';
import { FilterContext } from './FilterContext';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const CityBarChart = ({ accessToken }) => {
  const { selectedYear, selectedCity } = useContext(FilterContext);
  const [ageLabel, setAgeLabel] = useState([]);
  const [ageData, setAgeData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const isMobile = useMediaQuery({ maxWidth: 800 });

  useEffect(() => {
    const fetchData = async () => {
      const URL =
        'https://sgisapi.kostat.go.kr/OpenAPI3/stats/searchpopulation.json?';
      const CITY_DEMOGRAPHICS_URL = `${URL}year=${selectedYear}&accessToken=${accessToken}&adm_cd=${selectedCity}`;

      try {
        if (!selectedCity) {
          return;
        }
        const response = await axios.get(CITY_DEMOGRAPHICS_URL);
        const isSuccess = response.data.errCd === 0;

        if (isSuccess) {
          const ageLabel = [
            '10대 이하',
            '10대',
            '20대',
            '30대',
            '40대',
            '50대',
            '60대',
            '70대',
            '80대',
            '90대',
          ];
          let agePopulationData = [];
          for (let i = 30; i <= 39; i++) {
            const response = await axios.get(
              `${CITY_DEMOGRAPHICS_URL}&age_type=${i}`
            );
            const result = response.data.result[0];
            agePopulationData.push(result.population);
          }
          setAgeLabel(ageLabel);
          setAgeData(agePopulationData);
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
  }, [selectedYear, selectedCity, accessToken]);

  const cityData = {
    labels: ageLabel,
    datasets: [
      {
        label: 'Population',
        data: ageData || [],
        backgroundColor: 'rgba(253, 253, 151, 0.7)',
        stack: 'Stack 1',
      },
    ],
  };

  return (
    <>
      {error ? (
        <Error>Error: {error}</Error>
      ) : loading ? (
        isMobile ? (
          <Bar options={barChartOptions} data={cityData} height={'500px'} />
        ) : (
          <Bar options={barChartOptions} data={cityData} />
        )
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
