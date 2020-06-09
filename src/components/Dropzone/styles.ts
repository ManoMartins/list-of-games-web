import styled from 'styled-components';

export const ContainerDropzone = styled.div`
  width: 327px;
  height: 100%;
  background: #303030;
  border-radius: 6px;

  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 16px;
  outline: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  p {
    width: calc(100% - 60px);
    height: calc(100% - 60px);
    border-radius: 10px;
    border: 1px dashed #efeff1;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #efeff1;

    svg {
      color: #efeff1;
      width: 24px;
      height: 24px;
      margin-bottom: 8px;
    }
  }
`;
