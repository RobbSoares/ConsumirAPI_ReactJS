import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: rgba(0, 0, 0, 0.4);
  }

  span {
    border: 8px solid #f3f3f3;
    border-top: 8px solid #fa697c;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    animation: spin 500ms linear infinite;
    z-index: 2;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
