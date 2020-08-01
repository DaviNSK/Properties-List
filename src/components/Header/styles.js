import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  position: fixed;
  right: 0px;
  z-index: 40;
  top: 0;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 15px 65px 0px 60px;
  height: 70px;
  background-color: #160f1a;

  @media (max-width: 1280px) {
    padding: 15px 55px 0px 55px;
  }

  @media (max-width: 1024px) {
    padding: 15px 50px 0px 50px;
  }

  @media (max-width: 768px) {
    padding-top: 15px;
    justify-content: center;
    flex-direction: column;
  }
  

  h1 {
    color: #fbbc33;
    font-size: 35px;
    font-weight: bold;
    text-transform: uppercase;

    @media (max-width: 768px) {
      font-size: 21px;
    }
  }

  .name {
    p {
      color: #fbbc33;
      font-size: 20px;

      @media (max-width: 768px) {
        font-size: 15px;
      }
    }
  }
`;
