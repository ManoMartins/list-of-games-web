import styled from 'styled-components';
import { shade } from 'polished';

// Content
export const ListCategories = styled.section`
  max-width: 976px;
  margin: 84px auto;
`;

export const ListTitle = styled.div`
  background: #003087;
  border-radius: 6px;
  display: flex;

  margin-bottom: 10px;

  transition: background-color 300ms;

  &:hover {
    background: ${shade(0.2, '#003087')};
  }

  a {
    text-decoration: none;
    color: #ffffff;
    font-weight: bold;
    padding: 3px 10px;
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: space-between;

    div {
      display: flex;
      align-items: center;
    }
  }
`;

export const ListGames = styled.div`
  display: flex;
  margin-bottom: 40px;
`;

export const DetailsGame = styled.div`
  width: 151px;
  height: 247px;
  transition: transform 300ms;

  & {
    margin-right: 14px;
  }

  &:hover {
    transform: translate3d(5px, -5px, 5px);
  }

  a {
    width: 151px;
    height: 247px;
    color: #ffffff;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    font-size: 14px;

    img {
      height: 212px;
      border-radius: 6px 6px 0 0;
    }

    div {
      flex: 1;
      height: 40px;
      background: #003087;
      display: flex;
      align-items: center;
      border-radius: 0 0 6px 6px;

      p {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 75px;
        text-align: center;

        svg {
          margin-right: 4px;
        }
      }
    }
  }
`;
