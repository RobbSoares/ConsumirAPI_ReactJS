import styled from 'styled-components';

export const Nav = styled.nav`
  background: #ffffff;
  padding: 20px;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.342);

  div {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 75%;
    margin: 0 auto;
  }

  a {
    color: #585a9e;
    margin: 0 10px 0;
    font-weight: bold;
    transition: all 500ms ease-in-out;
  }

  a:hover {
    color: #4eb9e4;
  }

  a:last-child:hover {
    color: #54e346;
  }
`;
