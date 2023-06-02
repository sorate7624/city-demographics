import { useContext, useEffect, useState } from 'react';
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

export const TotalBarChart = ({ accessToken }) => {
  const { selectedYear, selectedCity, selectedAge } = useContext(FilterContext);
  const [responseData, setResponseData] = useState(null);
  const [cityData, setCityData] = useState([]);
  const [manData, setManData] = useState(0);
  const [womanData, setWomanData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const URL =
        'https://sgisapi.kostat.go.kr/OpenAPI3/stats/searchpopulation.json?';
      const CITY_DEMOGRAPHICS_URL = `${URL}year=${selectedYear}&accessToken=${accessToken}`;

      try {
        const response = await axios.get(CITY_DEMOGRAPHICS_URL);
        const isSuccess = response.data.errCd === 0;

        if (isSuccess) {
          const city = response.data.result.map((item) => item.adm_nm);
          const manResponse = await axios.get(
            `${CITY_DEMOGRAPHICS_URL}&gender=1`
          );
          const womanResponse = await axios.get(
            `${CITY_DEMOGRAPHICS_URL}&gender=2`
          );
          setResponseData(response.data);
          setCityData(city);
          setManData(manResponse.data);
          setWomanData(womanResponse.data);
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
  }, [selectedYear, selectedCity, selectedAge, accessToken]);

  const totalData = {
    labels: cityData,
    datasets: [
      {
        label: 'Man',
        data: manData?.result?.map((v) => v.population) || [],
        backgroundColor: '#2CA9FD',
        stack: 'Stack 0',
      },
      {
        label: 'Woman',
        data: womanData?.result?.map((v) => v.population) || [],
        backgroundColor: '#FF7249',
        stack: 'Stack 0',
      },
      {
        label: 'Population',
        data: responseData?.result?.map((v) => v.population) || [],
        backgroundColor: '#19E2A1',
        stack: 'Stack 1',
      },
    ],
  };

  return (
    <>
      {error ? (
        <Error>Error: {error}</Error>
      ) : loading ? (
        <Bar options={barChartOptions} data={totalData} />
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
