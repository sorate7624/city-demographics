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
import { ChartDiv } from '../styles/ChartStyles';
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

  useEffect(() => {
    const fetchData = async () => {
      const ACCESS_TOKEN = 'e6d28f08-b9ee-4b75-8b55-a4672980c42f';
      const URL =
        'https://sgisapi.kostat.go.kr/OpenAPI3/stats/searchpopulation.json?';
      const CITY_DEMOGRAPHICS_URL = `${URL}year=${selectedYear}&accessToken=${ACCESS_TOKEN}${
        selectedCity ? `&adm_cd=${selectedCity}` : ''
      }${selectedAge ? `&age_type=${selectedAge}` : ''}`;

      try {
        const response = await axios.get(CITY_DEMOGRAPHICS_URL);

        const isSuccess = response.data.errCd === 0;
        if (isSuccess) {
          const city = response.data.result.map((item) => item.adm_nm);
          setResponseData(response.data);
          setCityData(city);
        } else {
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [selectedYear, selectedCity, selectedAge]);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

  const data = {
    labels: cityData,
    datasets: [
      {
        label: 'Population',
        // data: labels.map(() =>
        //   faker.datatype.number({ min: 0, max: 1000 })
        // ),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  return (
    <ChartDiv>
      <Bar options={options} data={data} />
    </ChartDiv>
  );
};
