import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 30px;

  label {
    display: flex;
    flex-direction: column;
  }

  label:not(:last-child) {
    margin-bottom: 15px;
  }

  input {
    margin-top: 10px;
    height: 30px;
    font-size: 16px;
    border: 1px solid #ddd;
    padding: 0 10px;
    border-radius: 4px;
    transition: all 300ms ease-in-out;

    &:focus {
      border: 1px solid ${colors.primaryColor};
    }
  }
`;
