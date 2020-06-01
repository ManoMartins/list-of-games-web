import React from 'react';
import { FiClock, FiPlus, FiCalendar } from 'react-icons/fi';

import PSIcon from '../../assets/playstation.svg';
import Header from '../../components/Header';
import bloodborne from '../../assets/Bloodborne_Cover.jpg';

import {
  Content,
  Title,
  ListGames,
  CardGame,
  DetailsGame,
  Details,
  NameGame,
  CardPlatform,
  Platform,
} from './styles';

const AllByCategory: React.FC = () => {
  return (
    <>
      <Header />
      <Content>
        <Title>PS exclusive</Title>
        <ListGames>
          <CardGame>
            <a href="/details-game">
              <img src={bloodborne} alt="Bloodborne Cover" />
              <DetailsGame>
                <Details>
                  <NameGame>Bloodborne</NameGame>
                  <p>
                    <FiClock />
                    31h 30
                  </p>
                  <p>
                    <FiPlus />
                    41h 30
                  </p>
                  <p>
                    <FiCalendar />
                    31 may 2015
                  </p>
                </Details>
                <CardPlatform>
                  <Platform>
                    <img src={PSIcon} alt="Logo Playstation" />
                  </Platform>
                  <Platform>
                    <img src={PSIcon} alt="Logo Playstation" />
                  </Platform>
                  <Platform>
                    <img src={PSIcon} alt="Logo Playstation" />
                  </Platform>
                </CardPlatform>
              </DetailsGame>
            </a>
          </CardGame>

          <CardGame>
            <img src={bloodborne} alt="Bloodborne Cover" />
            <DetailsGame>
              <Details>
                <NameGame>Bloodborne</NameGame>
                <p>
                  <FiClock />
                  31h 30
                </p>
                <p>
                  <FiPlus />
                  41h 30
                </p>
                <p>
                  <FiCalendar />
                  31 may 2015
                </p>
              </Details>
              <CardPlatform>
                <Platform>
                  <img src={PSIcon} alt="Logo Playstation" />
                </Platform>
                <Platform>
                  <img src={PSIcon} alt="Logo Playstation" />
                </Platform>
                <Platform>
                  <img src={PSIcon} alt="Logo Playstation" />
                </Platform>
              </CardPlatform>
            </DetailsGame>
          </CardGame>

          <CardGame>
            <img src={bloodborne} alt="Bloodborne Cover" />
            <DetailsGame>
              <Details>
                <NameGame>Bloodborne</NameGame>
                <p>
                  <FiClock />
                  31h 30
                </p>
                <p>
                  <FiPlus />
                  41h 30
                </p>
                <p>
                  <FiCalendar />
                  31 may 2015
                </p>
              </Details>
              <CardPlatform>
                <Platform>
                  <img src={PSIcon} alt="Logo Playstation" />
                </Platform>
                <Platform>
                  <img src={PSIcon} alt="Logo Playstation" />
                </Platform>
                <Platform>
                  <img src={PSIcon} alt="Logo Playstation" />
                </Platform>
              </CardPlatform>
            </DetailsGame>
          </CardGame>

          <CardGame>
            <img src={bloodborne} alt="Bloodborne Cover" />
            <DetailsGame>
              <Details>
                <NameGame>Bloodborne</NameGame>
                <p>
                  <FiClock />
                  31h 30
                </p>
                <p>
                  <FiPlus />
                  41h 30
                </p>
                <p>
                  <FiCalendar />
                  31 may 2015
                </p>
              </Details>
              <CardPlatform>
                <Platform>
                  <img src={PSIcon} alt="Logo Playstation" />
                </Platform>
                <Platform>
                  <img src={PSIcon} alt="Logo Playstation" />
                </Platform>
                <Platform>
                  <img src={PSIcon} alt="Logo Playstation" />
                </Platform>
              </CardPlatform>
            </DetailsGame>
          </CardGame>

          <CardGame>
            <img src={bloodborne} alt="Bloodborne Cover" />
            <DetailsGame>
              <Details>
                <NameGame>Bloodborne</NameGame>
                <p>
                  <FiClock />
                  31h 30
                </p>
                <p>
                  <FiPlus />
                  41h 30
                </p>
                <p>
                  <FiCalendar />
                  31 may 2015
                </p>
              </Details>
              <CardPlatform>
                <Platform>
                  <img src={PSIcon} alt="Logo Playstation" />
                </Platform>
                <Platform>
                  <img src={PSIcon} alt="Logo Playstation" />
                </Platform>
                <Platform>
                  <img src={PSIcon} alt="Logo Playstation" />
                </Platform>
              </CardPlatform>
            </DetailsGame>
          </CardGame>

          <CardGame>
            <img src={bloodborne} alt="Bloodborne Cover" />
            <DetailsGame>
              <Details>
                <NameGame>Bloodborne</NameGame>
                <p>
                  <FiClock />
                  31h 30
                </p>
                <p>
                  <FiPlus />
                  41h 30
                </p>
                <p>
                  <FiCalendar />
                  31 may 2015
                </p>
              </Details>
              <CardPlatform>
                <Platform>
                  <img src={PSIcon} alt="Logo Playstation" />
                </Platform>
                <Platform>
                  <img src={PSIcon} alt="Logo Playstation" />
                </Platform>
                <Platform>
                  <img src={PSIcon} alt="Logo Playstation" />
                </Platform>
              </CardPlatform>
            </DetailsGame>
          </CardGame>
        </ListGames>
      </Content>
    </>
  );
};

export default AllByCategory;
