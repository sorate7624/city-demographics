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
import { fetchAccessToken } from '../fetchAccessToken';
import { chartOptions } from '../chartOptions';
import { ChartDiv, Loading } from '../styles/ChartStyles';
import { FilterContext } from './FilterContext';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const Chart = () => {
  const { selectedYear, selectedCity, selectedAge } = useContext(FilterContext);
  const [responseData, setResponseData] = useState(null);
  const [cityData, setCityData] = useState([]);
  const [manData, setManData] = useState([]);
  const [womanData, setWomanData] = useState([]);
  const [accessToken, setAccessToken] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchToken = async () => {
      const token = await fetchAccessToken();
      setAccessToken(token);
    };

    fetchToken();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const URL =
        'https://sgisapi.kostat.go.kr/OpenAPI3/stats/searchpopulation.json?';
      const CITY_DEMOGRAPHICS_URL = `${URL}year=${selectedYear}&accessToken=${accessToken}${
        selectedCity ? `&adm_cd=${selectedCity}` : ''
      }${selectedAge ? `&age_type=${selectedAge}` : ''}`;

      try {
        if (accessToken) {
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
            setLoading(true);
            setResponseData(response.data);
            setCityData(city);
            setManData(manResponse.data);
            setWomanData(womanResponse.data);
          } else {
            console.error('데이터 가져오기 오류:', response.data);
          }
        }
      } catch (error) {
        console.error('데이터 가져오기 오류:', error);
      }
    };

    fetchData();
  }, [selectedYear, selectedCity, selectedAge, accessToken]);

  const data = {
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
    <ChartDiv>
      {loading ? (
        <Bar options={chartOptions} data={data} />
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
    </ChartDiv>
  );
};
