import { keyframes } from "styled-components";

const rotateAnimation = keyframes`
0% {
  transform: rotate(0deg);
  border-radius: 0px;
}
50%{
  border-radius: 50px;
}
100% {
  transform: rotate(360deg);
  border-radius: 0px;
}
`;

export default rotateAnimation;
