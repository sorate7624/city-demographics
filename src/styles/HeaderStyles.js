import styled from "styled-components";
import {
  Link
} from 'react-router-dom';

export const HeaderDiv = styled.div `
  width: 24rem;
  margin-top: 3rem;

  @media (max-width: 800px) {
    width: auto;
  }
`;

export const Title = styled.h1 ` 
  position: relative;
  font-size: 2rem;
  display: table;
  font-weight: bold;
  transition: .6s;
  color: #fff;

  @media (max-width: 800px) {
    font-size: 1.5rem;
  }
`;

export const StyledLink = styled(Link)
`
  display: flex;

  img {
    width: 5rem;
    margin-right: .5rem;
    filter: brightness(0) invert(1);
  }

  &:hover {
    cursor: default;
  }

  @media (max-width: 800px) {
    img {
      width: 3.5rem;
    }
  }
`;