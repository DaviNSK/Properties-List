import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 550px;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  background-color: white;
  border: 1px solid #c5c5c5;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.05);
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.25);
  }

  @media (max-width: 1280px) {
    height: 515px;
  }

  @media (max-width: 1024px) {
    height: 480px;
  }

  @media (max-width: 768px) {
    height: 380px;
  }

  .card-img {
    width: 100%;
    img {
      background-size: cover;
      width: 100%;
      height: 290px;

      @media (max-width: 1280px) {
        height: 260px;
      }

      @media (max-width: 1024px) {
        height: 240px;
      }
      @media (max-width: 768px) {
        height: 180px;
      }
    }
  }

  .card-infos {
    width: 100%;
    padding: 30px 20px 0px 20px;

    @media (max-width: 1280px) {
      padding: 25px 20px 0px 20px;
    }

    @media (max-width: 1024px) {
      padding: 12px 10px;
    }

    @media (max-width: 768px) {
      padding: 10px 10px;
    }
  }

  .title {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 70px;

    @media (max-width: 1280px) {
      height: 90px;
      padding-bottom: 10px;
    }
    @media (max-width: 1024px) {
      height: 80px;
    }
    @media (max-width: 768px) {
      height: 55px;
    }
    p {
      font-size: 19px;
      color: #505050;
      font-weight: 600;

      @media (max-width: 1280px) {
        font-size: 18px;
      }

      @media (max-width: 1024px) {
        font-size: 16px;
      }

      @media (max-width: 768px) {
        font-size: 14.5px;
      }
    }
  }

  .address {
    padding-top: 5px;
    height: 50px;
    display: flex;
    p {
      font-size: 15px;
      color: #999999;
      margin-right: 5px;
      font-weight: bold;

      @media (max-width: 1024px) {
        font-size: 14px;
      }

      @media (max-width: 768px) {
        font-size: 13px;
      }
    }
  }

  .infos-properties {
    border-top: 3px solid #f3f3f3;
    display: flex;
    width: 100%;
    height: 70px;
    padding-top: 24px;

    @media (max-width: 768px) {
      height: 0px;
    }
  }

  .price {
    color: #160f1a;
    font-size: 22px;
    font-weight: 600;
    width: 40%;

    @media (max-width: 1280px) {
      width: 30%;
  }

    @media (max-width: 1024px) {
      font-size: 20px;
      width: 28%;
      margin-top: 4px;
    }

    @media (max-width: 768px) {
      font-size: 19px;
      width: 25%;
    }
  }

  .rooms,
  .space {
    height: 35px;
    width: 30%;
    border-right: 2px solid transparent;
    margin-left: 15px;
    padding-left: 12px;

    @media (max-width: 1280px) {
      width: 35%;
      padding-left: 5px;
    }

    @media (max-width: 1024px) {
      width: 40%;
      margin-left: 13px;
      padding-left: 2px;
    }

    @media (max-width: 768px) {
      width: 35%;
      padding-left: 12px;
      margin-left: 10px;
      padding-top: 3px;
    }
    p {
      color: #646464;
      font-size: 18px;
      margin-top: 5px;

      @media (max-width: 1024px) {
        font-size: 16.5px;
      }

      @media (max-width: 768px) {
        font-size: 14.5px;
      }
    }
  }
  .rooms {
    border-right: 2px solid #e3e3e3;
  }
`;
