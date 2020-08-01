import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  top: 0;
  left: 0;
  position: fixed;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  background-color: #0000009a;
  visibility: ${(props) => (props.show ? 'unset' : 'hidden')};
`;

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  z-index: 6;
  width: 40%;
  height: 700px;
  position: relative;
  border: 1px solid #c5c5c5;

  @media (max-width: 1280px) {
    height: 650px;
    width: 45%;
  }

  @media (max-width: 1024px) {
    height: 600px;
    width: 45%;
  }

  @media (max-width: 768px) {
    height: 430px;
    width: 90%;
  }

  .card-img {
    img {
      width: 100%;
      height: 350px;
      background-size: contain;

      @media (max-width: 1280px) {
        height: 320px;
      }
      @media (max-width: 1024px) {
        height: 300px;
      }

      @media (max-width: 768px) {
        height: 180px;
      }
    }
  }
  .close-icon {
    position: absolute;
    right: 8px;
    color: #fff;
    top: 8px;
    z-index: 40;
    cursor: pointer;
  }

  .card-infos {
    width: 100%;
    padding: 30px 35px 0px 35px;

    @media (max-width: 1280px) {
      padding: 20px 20px 0px 20px;
    }

    @media (max-width: 1024px) {
      padding: 20px 18px 0px 18px;
    }

    @media (max-width: 768px) {
      padding: 10px 5px 0px 5px;
    }
    h1 {
      font-weight: bold;
      font-size: 15px;
      color: #160f1a;
      text-transform: uppercase;
      margin-right: 6px;

      @media (max-width: 1280px) {
        font-size: 16.5px;
      }
      @media (max-width: 1024px) {
        margin-top: 1px;
      }

      @media (max-width: 768px) {
        font-size: 13.5px;
      }
    }
    p {
      font-size: 15px;
      color: #505050;
      font-weight: bold;
      @media (max-width: 1280px) {
        font-size: 16px;
      }
      @media (max-width: 768px) {
        font-size: 13px;
      }
    }
  }

  .title {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 50px;
    border-bottom: 1px solid #c4c4c4;
    @media (max-width: 768px) {
      height: 45px;
    }
    p {
      font-size: 19px;
      color: #160f1a;
      font-weight: 600;

      @media (max-width: 1024px) {
        font-size: 15px;
      }

      @media (max-width: 768px) {
        font-size: 12.3px;
      }
    }
  }

  .form-group {
    display: flex;
    width: 100%;
    flex-direction: column;
  }

  .address {
    display: flex;
    margin-top: 11px;
  }
  .maps,
  .rooms,
  .space,
  .sell-price,
  .base-rent {
    display: flex;
  }

  .maps {
    width: 40%;
    cursor: pointer;
    @media (max-width: 768px) {
      width: 80%;
    }
    :hover {
      a {
        color: #1e5a9b;
      }
      svg {
        color: #1e5a9b;
      }
    }
    a {
      font-size: 16px;
      margin-right: 3px;
      @media (max-width: 1280px) {
        font-size: 18px;
      }
      @media (max-width: 1024px) {
        font-size: 15px;
      }
      @media (max-width: 768px) {
        font-size: 13px;
      }
    }
    svg {
      color: #007bff;
      margin-top: 2px;
    }
  }
`;
