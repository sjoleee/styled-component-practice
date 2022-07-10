import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;

const Btn = styled.button`
  border: 0;
  border-radius: 15px;
  color: white;
  background-color: blue;
  width: 100px;
  height: 100px;
`;

function App() {
  return (
    <Father>
      <Btn>hi</Btn>
      <Btn as="a" href="/">
        hi
      </Btn>
    </Father>
  );
}

export default App;
