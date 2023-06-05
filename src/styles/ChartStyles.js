import styled, {
  keyframes
} from "styled-components";

const wave = keyframes `
  0% {
    transform: translateY(0em);
  }
  60% {
    transform: translateY(-0.5em);
  }
  100% {
    transform: translateY(0em);
  }
`;

export const ChartDiv = styled.div `
  display: flex;
  width: 100%;
  height: 40.75rem;
  min-height: 31.25rem;
  max-height: 40.75rem;
  align-items: center;
  justify-content: center;
  margin: 3rem 0;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  background: rgba(0, 0, 0, .6);

  @media (max-width: 800px) {
    height: auto;
    min-height: 40.75rem;
    max-height: none;
    flex-wrap: wrap;
    align-content: flex-start;
    padding: 2rem 1rem;
  }
`;

export const Loading = styled.div `
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  flex-direction: column;

  img {
    display: none;
    width: 6.25rem;
    height: 6.25rem;
    margin: 0 auto;
  }

  p {
    color: var(--blue-color);
    font-weight: bold;
    font-size: 2rem;
    text-align: center;
    margin-top: 0.5em;
    font-size: 3rem;
  }
  span {
    position: relative;
    top: 0.625rem;
    display: inline-block;
    -webkit-animation: ${wave} 1s ease-in-out infinite;
    animation: ${wave} 1s ease-in-out infinite;
  }

  span:nth-of-type(1) {
    -webkit-animation-delay: 0s;
            animation-delay: 0s;
  }
  span:nth-of-type(2) {
    -webkit-animation-delay: 0.1s;
            animation-delay: 0.1s;
  }
  span:nth-of-type(3) {
    -webkit-animation-delay: 0.2s;
            animation-delay: 0.2s;
  }
  span:nth-of-type(4) {
    -webkit-animation-delay: 0.3s;
            animation-delay: 0.3s;
  }
  span:nth-of-type(5) {
    -webkit-animation-delay: 0.4s;
            animation-delay: 0.4s;
  }
  span:nth-of-type(6) {
    -webkit-animation-delay: 0.5s;
            animation-delay: 0.5s;
  }
  span:nth-of-type(7) {
    -webkit-animation-delay: 0.6s;
            animation-delay: 0.6s;
  }

  @media (max-width: 800px) {
    justify-content: flex-start;

    p {
      font-size: 2rem;
    }
  }
`;

export const Error = styled.p `
  color: var(--red-color);
  font-size: 2rem;
`;

export const Summary = styled.div `
  width: 30%;
  font-size: 1.2rem;
  margin-left: 3rem;

  p {
    margin-bottom: 1rem;
  }

  span {
    font-weight: bold;
  }

  @media (max-width: 800px) {
    width: auto;
    margin: 2rem 0 0;
  }
`;