import styled, { keyframes } from "styled-components";
import Box from "./components/Box.js";

const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColor};
`;

function App() {
  return (
    <Wrapper>
      <Title>Hello</Title>
      <Box bgColor="blue" text="박스1"></Box>
      <Box bgColor="red" text="박스2"></Box>
    </Wrapper>
  );
}

export default App;
