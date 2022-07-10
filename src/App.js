import styled, { keyframes } from "styled-components";
import Box from "./components/Box.js";

const Father = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <Father>
      <Box bgColor="blue" text="박스1"></Box>
      <Box bgColor="red" text="박스2"></Box>
    </Father>
  );
}

export default App;
