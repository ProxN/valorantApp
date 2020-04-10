import styled from 'styled-components';

export default styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(auto, 250px));
  grid-template-rows: 230px;
  grid-auto-rows: 230px;
  grid-gap: 25px;
  margin-top: 20px;
`;
