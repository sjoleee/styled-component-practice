import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;

const Box = styled.div`
  background-color: ${(props) => {
    return props.bgColor;
  }};
  width: 100px;
  height: 100px;
`;

const Text = styled.h2`
  color: white;
`;

function App() {
  return (
    <Father>
      <Box bgColor="teal"></Box>
      <Box bgColor="tomato"></Box>
    </Father>
  );
}

export default App;
