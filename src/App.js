import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;

const BoxOne = styled.div`
  background-color: teal;
  width: 100px;
  height: 100px;
`;

const BoxTwo = styled.div`
  background-color: black;
  width: 100px;
  height: 100px;
`;

const Text = styled.h2`
  color: white;
`;

function App() {
  return (
    <Father>
      <BoxOne></BoxOne>
      <BoxTwo>
        <Text>hello</Text>
      </BoxTwo>
    </Father>
  );
}

export default App;
