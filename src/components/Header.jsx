import { HeaderDiv, Title, StyledLink } from '../styles/HeaderStyles';

export const Header = () => {
  return (
    <HeaderDiv>
      <StyledLink>
        <img src="./south-korea.png" alt="south-korea-map" />
        <Title>
          CITY
          <br />
          DEMOGRAPHICS
        </Title>
      </StyledLink>
    </HeaderDiv>
  );
};
