import styled from 'styled-components';

export const CardGame = styled.section`
  display: flex;
  max-width: 1000px;
  margin: 84px auto;

  > img {
    border-radius: 6px;
    height: 212px;
    width: 151px;
    margin-right: 20px;
  }
`;

export const ContentDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const TitleGame = styled.div`
  display: flex;
  height: 40px;
  width: 465px;

  strong {
    display: flex;
    align-items: center;

    font-size: 24px;
    padding: 0 10px;
    color: #ffffff;
    flex: 1;
    background: #2e2e2e;
    border-radius: 6px 0 0 6px;
  }
`;

export const Platform = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #003084;
  width: 40px;
  border-radius: 0 6px 6px 0;
`;

export const Details = styled.div`
  > ul {
    display: flex;
    list-style: none;
    margin: 20px 0;

    li {
      & + li {
        margin-left: 30px;
      }

      svg {
        margin-right: 5px;
      }

      strong {
        display: flex;
        font-size: 22px;
        color: #3d3d4d;
      }
      span {
        display: block;
        margin-top: 4px;
        color: #6c6c80;
      }
    }
  }

  p {
    letter-spacing: 5%;
    text-align: justify;
    line-height: 20px;
  }
`;

export const GenresList = styled.ul`
  display: flex;
  list-style: none;

  li {
    & + li {
      margin-left: 5px !important;
      padding-left: 5px;
      border-left: 1px solid black;
    }
  }
`;

export const Streams = styled.div``;
