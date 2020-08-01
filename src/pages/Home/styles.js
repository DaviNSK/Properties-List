import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;

  .container-pagination {
    padding: 0;
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const CardsList = styled.div`
  display: flex;
  width: 96%;
  flex-direction: row;
  margin-bottom: 15px;
  flex-wrap: wrap;
  height: calc(100vh - 130px);
  overflow-y: auto;
  overflow-x: hidden;

  @media (max-width: 768px) {
   width: 90%;
  }
`;

export const Card = styled.div`
  width: 33%;
  padding: 15px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 15px;
  }
`;
