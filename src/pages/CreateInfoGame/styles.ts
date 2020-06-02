import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 88px auto;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;

  display: flex;
  align-items: center;

  > img {
    width: 327px;
    height: 459px;
    border-radius: 13px;
    margin-right: 24px;
  }
`;

export const DataContainer = styled.div`
  display: flex;
  height: 459px;

  form {
    display: flex;
    flex-direction: column;

    img {
      width: 24px;
      height: 24px;
    }

    input {
      height: 36px;
      padding: 0 10px;
      border-radius: 6px;
      background: #3d3d3d;
      color: #ffffff;
      border: 0;

      &::placeholder {
        color: #ffffff;
      }

      & + input {
        margin-top: 10px;
      }
    }

    textarea {
      height: 65px;
      width: 100%;
      padding: 10px;
      border-radius: 6px;
      background: #3d3d3d;
      color: #ffffff;
      border: 0;
      margin-top: 20px;
      resize: none;

      &::placeholder {
        color: #ffffff;
      }
    }
  }
`;

export const CardTimers = styled.div`
  display: flex;
  flex-direction: column;

  strong {
    margin-top: 20px;
  }

  div {
    display: flex;
    flex: 1;

    input {
      flex: 1;
      margin-top: 5px;

      & + input {
        margin-top: 5px;
        margin-left: 10px;
      }
    }
  }
`;

export const CardPlatforms = styled.div`
  list-style: none;
  margin-top: 20px;

  ul {
    display: flex;
    margin-top: 5px;
  }

  li {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: flex-start;
    background: #003084;
    border-radius: 6px;
    height: 40px;
    padding: 10px;
    color: #ffffff;

    button {
      display: flex;
      flex: 1;
      align-items: center;
      justify-content: flex-start;
      background: #003084;
      border-radius: 6px;
      height: 40px;
      color: #ffffff;
      border: 0;
    }

    & + li {
      margin-left: 5px;
    }

    img {
      margin-right: 10px;
    }
  }
`;

export const CardGenres = styled.div`
  list-style: none;
  margin-top: 20px;

  ul {
    margin-top: 5px;
    display: flex;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 5px;
    list-style: none;
  }

  li {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: flex-start;
    background: #e5e5e5;
    border-radius: 6px;
    height: 40px;
    padding: 10px;

    img {
      margin-right: 10px;
    }
  }
`;
