import styled from 'styled-components';
import { shade } from 'polished';

export const HeaderContent = styled.header`
  max-width: 100%;
  background: #2e2e2e;
`;

export const Content = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;

  > button {
    display: flex;
    background: transparent;
    border: 0;
    color: #ffffff;
  }
`;

export const BarSearch = styled.div`
  max-width: 334px;
  display: flex;

  input {
    flex: 1;
    width: 300px;
    height: 36px;
    padding: 0 10px;
    border-radius: 6px 0 0 6px;
    background: #3d3d3d;
    color: #ffffff;
    border: 0;
    margin-right: 1px;

    &::placeholder {
      color: #ffffff;
    }

    &:focus {
      border: 2px solid #ffffff;
    }
  }

  button {
    border: 0;
    width: 34px;
    height: 36px;
    background: #3d3d3d;
    color: #ffffff;
    border-radius: 0 6px 6px 0;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.3, '#3d3d3d')};
    }
  }
`;
