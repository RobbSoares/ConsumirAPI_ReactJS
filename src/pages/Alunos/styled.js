import styled from 'styled-components';

export const AlunoContainer = styled.div`
  margin-top: 30px;

  div {
    display: flex;
    align-items: center;
    padding: 10px 0;
  }

  div:not(:first-child) {
    border-top: 1px solid #eee;
  }

  span {
    margin-left: 35px;
  }

  .icons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 20px;
  }

  .icons .edit {
    margin-right: 15px;
  }
`;
export const ProfilePicture = styled.div`
  img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
  }
`;

