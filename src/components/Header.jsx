import { Link } from 'react-router-dom';
import { HeaderDiv, Title } from '../styles/HeaderStyles';

export const Header = () => {
  return (
    <HeaderDiv>
      <Link>
        <Title data-hover="도시별 인구 통계">도시별 인구 통계</Title>
      </Link>
    </HeaderDiv>
  );
};
