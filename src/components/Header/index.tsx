import React from 'react';
import { FiSearch, FiMenu } from 'react-icons/fi';

import logoImage from '../../assets/logo.svg';
import { HeaderContent, Content, BarSearch } from './styles';

const Header: React.FC = () => {
  return (
    <HeaderContent>
      <Content>
        <img src={logoImage} alt="Bear Logo" />
        <BarSearch>
          <input placeholder="Search" />
          <button type="submit">
            <FiSearch size="24" />
          </button>
        </BarSearch>
        <button type="button">
          <FiMenu size="24" />
        </button>
      </Content>
    </HeaderContent>
  );
};

export default Header;
