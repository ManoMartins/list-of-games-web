import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface ICardGenre {
  isSelected: boolean;
}

interface ICardPlatform {
  isSelected: boolean;
  isPlatform?: string;
}

export const Container = styled.div`
  max-width: 1000px;
  width: 100%;
  margin: 10px auto;
  height: 90vh;
  display: flex;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  padding: 0 24px;
  height: 500px;
  display: flex;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;

    textarea {
      height: 65px;
      width: 100%;
    }
  }

  input,
  textarea {
    background: rgba(255, 255, 255, 0.15);
    border: 0;
    resize: none;
    border-radius: 6px;
    height: 32px;
    padding: 10px;
    color: #efeff1;

    &::placeholder {
      color: #efeff1;
    }

    &:focus {
      border: 2px solid #393b5a;
      background: black;
    }

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
  }
`;

export const Fieldset = styled.fieldset`
  min-inline-size: auto;
  border: 0;
  padding: 8px 0;

  & + fieldset {
    margin-top: 16px;
  }
`;

export const Field = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-gap: 5px;
`;

export const FieldTime = styled.div`
  flex: 1;
  display: grid;
  grid-gap: 5px;
  grid-template-columns: repeat(2, 90px);

  &:first-child {
    margin-right: 5px;
  }

  input {
    width: 90px;

    & + input {
      border-radius: 0 6px 6px 0;
    }
  }

  label {
    & + input {
      border-radius: 6px 0 0 6px;
    }
    grid-column-start: span 2;
  }
`;

export const ListCardSelect = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 5px;
`;

export const FieldGroup = styled.div`
  display: flex;
  width: 400px;
`;

export const CardGenre = styled.li<ICardGenre>`
  display: flex;
  align-items: center;
  background: #a3a3a3;
  color: #181818;
  border-radius: 6px;
  padding: 8px;
  height: 40px;
  cursor: pointer;
  transition: background-color 300ms, border-color 300ms;
  ${props =>
    props.isSelected &&
    css`
      background-color: ${shade(0.3, '#a3a3a3')};
    `}

  img {
    margin-right: 8px;
    width: 24px;
    height: 24px;
  }
`;

export const CardPlatform = styled.li<ICardPlatform>`
  display: flex;
  align-items: center;
  color: #181818;
  border-radius: 6px;
  background: #4f4f4f;
  color: #efeff1;
  padding: 8px;
  height: 40px;
  cursor: pointer;
  transition: background-color 300ms, border-color 300ms;

  ${props =>
    props.isSelected &&
    css`
      background-color: ${shade(0.3, '#4f4f4f')};
    `}

  img {
    margin-right: 8px;
    width: 24px;
    height: 24px;
  }

  ${props =>
    props.isPlatform &&
    css`
      background: #${props.isPlatform};
    `}

  ${props =>
    props.isSelected &&
    props.isPlatform &&
    css`
      background-color: ${shade(0.3, `#${props.isPlatform}`)};
    `}
`;
