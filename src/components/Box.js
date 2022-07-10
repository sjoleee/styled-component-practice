import styled from "styled-components";
import rotateAnimation from "../styles/rotateAnimation";

const StyledBox = styled.div`
  height: 100px;
  width: 100px;
  background-color: ${(props) => {
    return props.bgColor;
  }};
  animation: ${rotateAnimation} 1s linear infinite;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Box(props) {
  return (
    <StyledBox bgColor={props.bgColor}>
      <span>{props.text}</span>
    </StyledBox>
  );
}

export default Box;
