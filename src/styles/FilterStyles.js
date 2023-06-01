import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  0%{
      transform: rotate(0deg);
      border-radius: 0px;
  }
  50%{ 
      border-radius: 100px;
  }
  100%{
      transform: rotate(350deg);
      border-radius: 0px;
  }
`;

export const FilterDiv = styled.div`
  position: relative;
  display: flex;
  max-width: 700px;
  height: 60px;
  align-items: center;
  justify-content: center;
  background-color: var(--blue-color);
  border-radius: 10px;
  padding: 0.5rem;
  margin: 0 auto;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  &:before, &:after{
    content: "";
    position: absolute;
    left: -53px;
    width: 0px;
    height: 0px;
    border-bottom: 29px solid transparent;
    border-top: 29px solid transparent;
    border-left: 29px solid transparent;
    border-right: 29px solid var(--blue-color);
  }
  &:after {
    left: auto;
    right: -53px;
    border-left: 29px solid var(--blue-color);
    border-right: 29px solid transparent;
  }
`;

export const SelectArea = styled.div`
  margin-right: 1rem;
`;

export const Label = styled.label` 
`;

export const Select = styled.select` 
  background: none;
  border: none;
  font-weight: bold;
  font-size: 1.3rem;
  margin-right: 0.2rem;
  outline: none;
  border-bottom: 1px solid #fff;
  cursor: pointer;
`;

export const Option = styled.option` 
`;

export const RefreshButton = styled.button` 
  padding: 0;
  background: none;
  margin-left: .5rem;

  &:hover {
    border-color: transparent;
    animation: ${rotate} 1s linear infinite;
  }

  &:focus, &:focus-visible {
    outline: none;
  }

  svg {
    font-size: 1.2rem;
  }
`;