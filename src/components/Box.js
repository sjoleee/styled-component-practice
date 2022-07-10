import styled from "styled-components";
import rotateAnimation from "../styles/rotateAnimation";

const StyledBox = styled.div`
  height: 100px;
  width: 100px;
  background-color: blue;
  animation: ${rotateAnimation} 1s linear infinite;
`;

function Box() {
  return <StyledBox></StyledBox>;
}

export default Box;
