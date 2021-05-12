import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Title = styled.h1`
  text-align: center;
`;

export const Form = styled.form`
  label {
    width: 180px;
    height: 180px;
    display: flex;
    background: #eee;
    border: 5px dashed ${colors.primaryDarkColor};
    margin: 30px auto;
    cursor: pointer;
    border-radius: 50%;
    overflow: hidden;

    align-items: center;
    justify-content: center;

    font-size: 20px;

    img {
      width: 180px;
      height: 180px;
    }
  }
  input {
    display: none;
  }
`;
