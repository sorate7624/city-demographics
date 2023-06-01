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
  height: 652px;
  min-height: 500px;
  max-height: 652px;
  align-items: center;
  justify-content: center;
  margin: 3rem 0;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  background: rgba(0, 0, 0, .6);
`;

export const Loading = styled.div `
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  flex-direction: column;

  img {
    display: none;
    width: 100px;
    height: 100px;
    margin: 0 auto;
  }

  p {
    color: var(--blue-color);
    font-weight: bold;
    font-size: 2rem;
    text-align: center;
    margin-top: 0.5em;
    font-size: 50px;
  }
  span {
    position: relative;
    top: 10px;
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
`;