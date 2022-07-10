import styled, { keyframes } from "styled-components";
import Box from "./components/Box.js";

const Father = styled.div`
  display: flex;
`;

function App() {
  return (
    <Father>
      <Box></Box>
    </Father>
  );
}

export default App;
