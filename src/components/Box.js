import styled from "styled-components";
import rotateAnimation from "../styles/rotateAnimation";

const Text = styled.span`
  font-size: 15px;
`;

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
  ${Text} {
    &:hover {
      font-size: 30px;
    }
    &:active {
      opacity: 0%;
    }
  }
`;

function Box(props) {
  return (
    <>
      <StyledBox bgColor={props.bgColor}>
        <Text>{props.text}</Text>
      </StyledBox>
      <Text>{props.text}</Text>
    </>
  );
}

export default Box;
