import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  0%{
      transform: rotate(0deg);
  }
  100%{
      transform: rotate(350deg);
  }
`;

export const FilterDiv = styled.div`
  position: relative;
  display: flex;
  width: calc(100% - 26rem);
  min-width: 39rem;
  height: 3.75rem;
  align-items: center;
  justify-content: center;
  background-color: var(--blue-color);
  border-radius: 0.625rem;
  padding: 0.5rem;
  margin-right: 1.438rem;
  margin-top: 3rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  &:after{
    content: "";
    position: absolute;
    right: -3.313rem;
    width: 0;
    height: 0;
    border-bottom: 1.813rem solid transparent;
    border-top: 1.813rem solid transparent;
    border-left: 1.813rem solid var(--blue-color);
    border-right: 1.813rem solid transparent;
  }

  @media (max-width: 1200px) {
    width: 100%;
  }

  @media (max-width: 800px) {
    width: 100%;
    min-width: 100%;
    height: auto;
    padding: 2rem;
    background: none;
    flex-wrap: wrap;
    justify-content: flex-start;

    &:after{
      content: none;
    }
  }
`;

export const SelectArea = styled.div`
  margin-right: 1rem;

  @media (max-width: 600px) {
    margin-bottom: 1rem;

    &:nth-child(3) {
      margin-bottom: 0;
    }
  }
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
  color: #fff;
  cursor: pointer;

  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background: url("./arrow.png") no-repeat right center;
  background-size: 0.8rem;
  padding-right: 1.4rem;
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
    color: #fff;
    font-size: 1.2rem;
  }

  @media (max-width: 800px) {
    &:hover {
      animation: none;
    }
  }
`;