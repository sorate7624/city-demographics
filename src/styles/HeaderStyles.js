import styled from "styled-components";

export const HeaderDiv = styled.div`
  margin: 3rem 0;
`;

export const Title = styled.h1` 
  position: relative;
  font-size: 4em;
  display: table;
  margin: 2rem auto;
  font-weight: bold;
  cursor: pointer;
  transition: .6s;
  color: var(--blue-color);

  &:before {
    color: #fff;
    content: attr(data-hover);
    position: absolute;
    -webkit-transition: -webkit-transform 0.3s, opacity 0.3s;
    -moz-transition: -moz-transform 0.3s, opacity 0.3s;
    transition: transform 0.3s, opacity 0.3s;
  }

  &:hover:before, &fucus:before {
    -webkit-transform: scale(0.9);
    -moz-transform: scale(0.9);
    transform: scale(0.9);
    opacity: 0;
  }
`;