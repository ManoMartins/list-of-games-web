import React from 'react';
import {
  FiClock,
  FiPlus,
  FiCalendar,
  FiGrid,
  FiChevronRight,
} from 'react-icons/fi';

import Header from '../../components/Header';
import Twitch from '../../assets/twitch.svg';
import Alanzoka from '../../assets/alanzoka.png';
import PSIcon from '../../assets/playstation.svg';
import bloodborne from '../../assets/Bloodborne_Cover.jpg';
import {
  CardGame,
  TitleGame,
  Platform,
  ContentDetails,
  Details,
  GenresList,
  CardStream,
  Streams,
  ContainerChannel,
  CardChannel,
} from './styles';

const DetailsGame: React.FC = () => {
  return (
    <>
      <Header />
      <CardGame>
        <img src={bloodborne} alt="Bloodborne cover" />
        <ContentDetails>
          <TitleGame>
            <strong>Bloodborne</strong>
            <Platform>
              <img src={PSIcon} alt="Logo Playstation" />
            </Platform>
          </TitleGame>
          <Details>
            <ul>
              <li>
                <strong>
                  <FiClock />
                  31h 30
                </strong>
                <span>Main Story</span>
              </li>
              <li>
                <strong>
                  <FiPlus />
                  41h 30
                </strong>
                <span>Main + Extra</span>
              </li>

              <li>
                <strong>
                  <FiCalendar />
                  31 may 2015
                </strong>
                <span>Date Release</span>
              </li>

              <li>
                <strong>
                  <FiGrid />
                  <GenresList>
                    <li>Action</li>
                    <li>Adventure</li>
                    <li>Role-Playing</li>
                  </GenresList>
                </strong>
                <span>Genres</span>
              </li>
            </ul>
            <p>
              Hunt your nightmares as you search for answers in the ancient city
              of Yharnam, now cursed with a strange endemic illness spreading
              through the streets like wildfire. Danger, death and madness lurk
              around every corner of this dark and horrific world, and you must
              discover its darkest secrets in order to survive.
            </p>
          </Details>
        </ContentDetails>
      </CardGame>
      <CardStream>
        <strong>Who are playing now:</strong>
        <Streams>
          <img src={Twitch} alt="Logo Twitch" />
          <strong>On Twitch</strong>
        </Streams>
        <ContainerChannel>
          <CardChannel>
            <ul>
              <li>
                <div>
                  <img src={Alanzoka} alt="Profile de alanzoka" />
                  <div>
                    <strong>Alanzoka</strong>
                    <p>Today is not yesterday</p>
                  </div>
                </div>
                <FiChevronRight size="24" />
              </li>
            </ul>
          </CardChannel>

          <CardChannel>
            <ul>
              <li>
                <div>
                  <img src={Alanzoka} alt="Profile de alanzoka" />
                  <div>
                    <strong>Alanzoka</strong>
                    <p>Today is not yesterday</p>
                  </div>
                </div>
                <FiChevronRight size="24" />
              </li>
            </ul>
          </CardChannel>

          <CardChannel>
            <ul>
              <li>
                <div>
                  <img src={Alanzoka} alt="Profile de alanzoka" />
                  <div>
                    <strong>Alanzoka</strong>
                    <p>Today is not yesterday</p>
                  </div>
                </div>
                <FiChevronRight size="24" />
              </li>
            </ul>
          </CardChannel>

          <CardChannel>
            <ul>
              <li>
                <div>
                  <img src={Alanzoka} alt="Profile de alanzoka" />
                  <div>
                    <strong>Alanzoka</strong>
                    <p>Today is not yesterday</p>
                  </div>
                </div>
                <FiChevronRight size="24" />
              </li>
            </ul>
          </CardChannel>

          <CardChannel>
            <ul>
              <li>
                <div>
                  <img src={Alanzoka} alt="Profile de alanzoka" />
                  <div>
                    <strong>Alanzoka</strong>
                    <p>Today is not yesterday</p>
                  </div>
                </div>
                <FiChevronRight size="24" />
              </li>
            </ul>
          </CardChannel>
        </ContainerChannel>
      </CardStream>
    </>
  );
};

export default DetailsGame;
