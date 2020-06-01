import styled from 'styled-components';

export const Content = styled.div`
  padding: 0 20px;
  max-width: 1040px;
  margin: 84px auto;
`;

export const Title = styled.div`
  background: #003087;
  height: 30px;
  border-radius: 6px;
  color: #ffffff;
  padding: 3px 10px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ListGames = styled.div`
  margin-top: 24px;
  max-width: 1040px;
  display: grid;
  gap: 24px;
  grid-template-columns: 3fr 3fr 3fr;
`;

export const CardGame = styled.div`
  display: flex;
  width: 316px;
  height: 212px;

  a {
    flex: 1;
    display: flex;
    text-decoration: none;
    color: black;
  }

  img {
    width: 151px;
    height: 212px;
    border-radius: 6px 0 0 6px;
  }
`;

export const DetailsGame = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Details = styled.div`
  flex: 1;
  padding: 10px;
  display: flex;
  flex-direction: column;
  background: #e5e5e5;
  border-radius: 0 6px 0 0;

  svg {
    margin-right: 5px;
  }

  p {
    margin: 5px 0;
    display: flex;
    align-items: center;
  }
`;

export const NameGame = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

export const CardPlatform = styled.div`
  height: 40px;
  display: flex;
`;

export const Platform = styled.div`
  flex: 1;
  background: #003087;
  display: flex;
  align-items: center;
  justify-content: center;

  &:last-child {
    border-radius: 0 0 6px 0;
  }

  img {
    width: 24px;
    height: 24px;
  }
`;
