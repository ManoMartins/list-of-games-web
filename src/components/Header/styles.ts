import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  align-items: center;
  background: #303030;
  height: 50px;
`;

export const Content = styled.header`
  flex: 1;
  display: flex;
  padding: 0 24px;
  justify-content: space-between;
  max-width: 1000px;
  margin: 0 auto;

  > button {
    border: 0;
    height: 32px;
    padding: 10px;
    display: flex;
    align-items: center;
    border-radius: 6px;
    background: #0074d9;
    color: #ffffff;
    transition: background-color 0.2s;
    &:hover {
      background: ${shade(0.2, '#0074D9')};
    }

    > svg {
      margin-right: 5px;
    }
  }
`;

export const BarSearch = styled.div`
  max-width: 334px;
  display: flex;

  input {
    flex: 1;
    height: 32px;
    padding: 0 10px;
    border-radius: 6px 0 0 6px;
    border: 0;
    background: #4f4f4f;
    color: #efeff1;

    &::placeholder {
      color: #efeff1;
    }

    &:focus {
      border: 2px solid #0074d9;
      border-right: 0;
      background: black;
    }
  }

  button {
    border: 0;
    width: 34px;
    height: 32px;
    background: #4f4f4f;
    color: #ffffff;
    border-radius: 0 6px 6px 0;
    transition: background-color 300ms;
    margin: 0 1px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background: ${shade(0.3, '#4f4f4f')};
    }
  }
`;
