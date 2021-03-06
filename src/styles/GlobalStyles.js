import styled, { createGlobalStyle } from 'styled-components';
import * as colors from '../config/colors';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: linear-gradient(to bottom, ${colors.primaryDarkColor}, rgb(46, 56, 144));
    color: #000000;
  }

  html, body, #root {
    height: 100%;
  }

  button {
    cursor: pointer;
    background: ${colors.primaryColor};
    border: none;
    color: #353535;
    padding: 10px 20px;
    border-radius: 4px;
    font-weight: 700;
    font-size: 16px;
    transition: all 500ms;

  }

  button:hover {
    filter: brightness(125%);
  }
  
  a {
    text-decoration: none;
    color: ${colors.primaryDarkColor};
  }

  ul {
    list-style: none;
  }

  .Toastify .Toastify__toast-container .Toastify__toast--success {
    background: ${colors.successColor};
  }
  .Toastify .Toastify__toast-container .Toastify__toast--error {
    background: ${colors.errorColor};
  }
`;

export const Container = styled.section`
  max-width: 480px;
  background: #fff;
  margin: 30px auto;
  padding: 30px;
  border-radius: 4px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.376);
`;
