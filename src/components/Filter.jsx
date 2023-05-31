import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotate } from '@fortawesome/free-solid-svg-icons';
import { FilterContext } from './FilterContext';
import {
  FilterDiv,
  SelectArea,
  Label,
  Select,
  Option,
  RefreshButton,
} from '../styles/FilterStyles';

export const Filter = () => {
  const {
    selectedYear,
    selectedCity,
    selectedAge,
    setSelectedYear,
    setSelectedCity,
    setSelectedAge,
  } = useContext(FilterContext);

  const DEFAULT_YEAR = '2021';
  const DEFAULT_CITY = '';
  const DEFAULT_AGE = '';

  const handleRefresh = () => {
    setSelectedYear(DEFAULT_YEAR);
    setSelectedCity(DEFAULT_CITY);
    setSelectedAge(DEFAULT_AGE);
  };

  return (
    <FilterDiv>
      <SelectArea>
        <Select
          id="year"
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
        >
          <Option>2021</Option>
          <Option>2020</Option>
          <Option>2019</Option>
          <Option>2018</Option>
          <Option>2017</Option>
          <Option>2016</Option>
          <Option>2015</Option>
          <Option>2010</Option>
          <Option>2005</Option>
          <Option>2000</Option>
        </Select>
        <Label htmlFor="year">년도</Label>
      </SelectArea>
      <SelectArea>
        <Select
          id="city"
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
        >
          <Option value="">전국</Option>
          <Option value="11">서울특별시</Option>
          <Option value="21">부산광역시</Option>
          <Option value="22">대구광역시</Option>
          <Option value="23">인천광역시</Option>
          <Option value="24">광주광역시</Option>
          <Option value="25">대전광역시</Option>
          <Option value="26">울산광역시</Option>
          <Option value="29">세종특별자치시</Option>
          <Option value="31">경기도</Option>
          <Option value="32">강원도</Option>
          <Option value="33">충청북도</Option>
          <Option value="34">충청남도</Option>
          <Option value="35">전라북도</Option>
          <Option value="36">전라남도</Option>
          <Option value="37">경상북도</Option>
          <Option value="38">경상남도</Option>
          <Option value="39">제주특별자치도</Option>
        </Select>
        <Label htmlFor="city">의</Label>
      </SelectArea>

      <SelectArea>
        <Select
          id="age"
          value={selectedAge}
          onChange={(e) => setSelectedAge(e.target.value)}
        >
          <Option value="">전체 연령</Option>
          <Option value="30">10대 이하</Option>
          <Option value="31">10대</Option>
          <Option value="32">20대</Option>
          <Option value="33">30대</Option>
          <Option value="34">40대</Option>
          <Option value="35">50대</Option>
          <Option value="36">60대</Option>
          <Option value="37">70대</Option>
          <Option value="38">80대</Option>
          <Option value="39">90대</Option>
        </Select>
        <Label htmlFor="age">의 인구 수</Label>
      </SelectArea>
      <RefreshButton onClick={handleRefresh}>
        <FontAwesomeIcon icon={faRotate} />
      </RefreshButton>
    </FilterDiv>
  );
};
