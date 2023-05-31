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

  &:before, &:after {
    content:attr(data-text);
    transition:.6s;
  }

  &:before {
    left: 0;
    top: 0;
    position: absolute;
    z-index:-1;
    text-shadow:
    0px 0px,
    0px 0px,
    0px 0px,
    0px 0px,
    0px 0px,
    0px 0px,
    0px 0px,
    0px 0px,
    0px 0px,
    0px 0px;
    -webkit-mask:repeating-linear-gradient(45deg, transparent 0 3px, rgba(0,0,0,0.5) 0 6px);
            mask:repeating-linear-gradient(45deg, transparent 0 3px, rgba(0,0,0,0.5) 0 6px);
  }

  &:hover {
    transform:translate(-10px,-10px);
  }

  &:hover:before{
    text-shadow:
    1px 1px,
    2px 2px,
    3px 3px,
    4px 4px,
    5px 5px,
    6px 6px,
    7px 7px,
    8px 8px,
    9px 9px,
    10px 10px;
  }
`;