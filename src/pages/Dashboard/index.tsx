import React from 'react';
import { FiChevronRight, FiClock, FiPlus } from 'react-icons/fi';

import bloodborne from '../../assets/Bloodborne_Cover.jpg';
import { ListCategories, ListTitle, ListGames, DetailsGame } from './styles';
import Header from '../../components/Header';

const Dashboard: React.FC = () => {
  return (
    <>
      <Header />

      <ListCategories>
        <ListTitle>
          <a href="show-all">
            PS exclusive
            <div>
              see all
              <FiChevronRight size="24" />
            </div>
          </a>
        </ListTitle>
        <ListGames>
          <DetailsGame>
            <a href="/details-game">
              <img src={bloodborne} alt="Bloodborne cover" />
              <div>
                <p>
                  <FiClock />
                  31h 30
                </p>
                <p>
                  <FiPlus />
                  41h 30
                </p>
              </div>
            </a>
          </DetailsGame>

          <DetailsGame>
            <a href="/details-game">
              <img src={bloodborne} alt="Bloodborne cover" />
              <div>
                <p>
                  <FiClock />
                  31h 30
                </p>
                <p>
                  <FiPlus />
                  41h 30
                </p>
              </div>
            </a>
          </DetailsGame>

          <DetailsGame>
            <a href="/details-game">
              <img src={bloodborne} alt="Bloodborne cover" />
              <div>
                <p>
                  <FiClock />
                  31h 30
                </p>
                <p>
                  <FiPlus />
                  41h 30
                </p>
              </div>
            </a>
          </DetailsGame>

          <DetailsGame>
            <a href="/details-game">
              <img src={bloodborne} alt="Bloodborne cover" />
              <div>
                <p>
                  <FiClock />
                  31h 30
                </p>
                <p>
                  <FiPlus />
                  41h 30
                </p>
              </div>
            </a>
          </DetailsGame>

          <DetailsGame>
            <a href="/details-game">
              <img src={bloodborne} alt="Bloodborne cover" />
              <div>
                <p>
                  <FiClock />
                  31h 30
                </p>
                <p>
                  <FiPlus />
                  41h 30
                </p>
              </div>
            </a>
          </DetailsGame>

          <DetailsGame>
            <a href="/details-game">
              <img src={bloodborne} alt="Bloodborne cover" />
              <div>
                <p>
                  <FiClock />
                  31h 30
                </p>
                <p>
                  <FiPlus />
                  41h 30
                </p>
              </div>
            </a>
          </DetailsGame>
        </ListGames>

        <ListTitle>
          <a href="show-all">
            PS exclusive
            <div>
              see all
              <FiChevronRight size="24" />
            </div>
          </a>
        </ListTitle>
        <ListGames>
          <DetailsGame>
            <a href="/details-game">
              <img src={bloodborne} alt="Bloodborne cover" />
              <div>
                <p>
                  <FiClock />
                  31h 30
                </p>
                <p>
                  <FiPlus />
                  41h 30
                </p>
              </div>
            </a>
          </DetailsGame>

          <DetailsGame>
            <a href="/details-game">
              <img src={bloodborne} alt="Bloodborne cover" />
              <div>
                <p>
                  <FiClock />
                  31h 30
                </p>
                <p>
                  <FiPlus />
                  41h 30
                </p>
              </div>
            </a>
          </DetailsGame>

          <DetailsGame>
            <a href="/details-game">
              <img src={bloodborne} alt="Bloodborne cover" />
              <div>
                <p>
                  <FiClock />
                  31h 30
                </p>
                <p>
                  <FiPlus />
                  41h 30
                </p>
              </div>
            </a>
          </DetailsGame>

          <DetailsGame>
            <a href="/details-game">
              <img src={bloodborne} alt="Bloodborne cover" />
              <div>
                <p>
                  <FiClock />
                  31h 30
                </p>
                <p>
                  <FiPlus />
                  41h 30
                </p>
              </div>
            </a>
          </DetailsGame>

          <DetailsGame>
            <a href="/details-game">
              <img src={bloodborne} alt="Bloodborne cover" />
              <div>
                <p>
                  <FiClock />
                  31h 30
                </p>
                <p>
                  <FiPlus />
                  41h 30
                </p>
              </div>
            </a>
          </DetailsGame>

          <DetailsGame>
            <a href="/details-game">
              <img src={bloodborne} alt="Bloodborne cover" />
              <div>
                <p>
                  <FiClock />
                  31h 30
                </p>
                <p>
                  <FiPlus />
                  41h 30
                </p>
              </div>
            </a>
          </DetailsGame>
        </ListGames>
      </ListCategories>
    </>
  );
};

export default Dashboard;
