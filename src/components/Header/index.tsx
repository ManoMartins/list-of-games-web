import React from 'react';

import { FaSearch, FaPlus } from 'react-icons/fa';
import { Container, Content, BarSearch } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <a href="/">
          <img src="" alt="Acrux" />
        </a>

        <BarSearch>
          <input placeholder="Find a game" />
          <button type="submit">
            <FaSearch />
          </button>
        </BarSearch>
        <button type="button">
          <FaPlus />
          <span>New Game</span>
        </button>
      </Content>
    </Container>
  );
};

export default Header;
