import React from 'react';

import Header from '../../components/Header';
import Forza from '../../assets/Forza_Horizon_4.jpg';
import IconXbox from '../../assets/playstation.svg';
import IconAdventure from '../../assets/map.svg';
import {
  Container,
  Content,
  DataContainer,
  CardTimers,
  CardGenres,
  CardPlatforms,
} from './styles';

const CreateInfoGame: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <Content>
          <img src={Forza} alt="Cover Forza horizon 4" />
          <DataContainer>
            <form>
              <input placeholder="Name of game" />
              <input placeholder="Date of release" />
              <CardTimers>
                <strong>Time to complete de game</strong>
                <div>
                  <input placeholder="Main Story" />
                  <input placeholder="Main + Story" />
                </div>
              </CardTimers>
              <CardPlatforms>
                <strong>Select the platform</strong>
                <ul>
                  <li>
                    <button type="button">
                      <img src={IconXbox} alt="Icon Xbox" />
                      <strong>XBOX ONE</strong>
                    </button>
                  </li>
                  <li>
                    <img src={IconXbox} alt="Icon Xbox" />
                    <strong>XBOX ONE</strong>
                  </li>
                  <li>
                    <img src={IconXbox} alt="Icon Xbox" />
                    <strong>XBOX ONE</strong>
                  </li>
                  <li>
                    <img src={IconXbox} alt="Icon Xbox" />
                    <strong>XBOX ONE</strong>
                  </li>
                </ul>
              </CardPlatforms>
              <CardGenres>
                <strong>Select the genres</strong>
                <ul>
                  <li>
                    <img src={IconAdventure} alt="Icon Adventure" />
                    <strong>Adventure</strong>
                  </li>
                  <li>
                    <img src={IconAdventure} alt="Icon Adventure" />
                    <strong>Adventure</strong>
                  </li>
                  <li>
                    <img src={IconAdventure} alt="Icon Adventure" />
                    <strong>Adventure</strong>
                  </li>
                  <li>
                    <img src={IconAdventure} alt="Icon Adventure" />
                    <strong>Adventure</strong>
                  </li>
                  <li>
                    <img src={IconAdventure} alt="Icon Adventure" />
                    <strong>Adventure</strong>
                  </li>
                  <li>
                    <img src={IconAdventure} alt="Icon Adventure" />
                    <strong>Adventure</strong>
                  </li>
                  <li>
                    <img src={IconAdventure} alt="Icon Adventure" />
                    <strong>Adventure</strong>
                  </li>
                  <li>
                    <img src={IconAdventure} alt="Icon Adventure" />
                    <strong>Adventure</strong>
                  </li>
                </ul>
              </CardGenres>
              <textarea placeholder="Description" />
            </form>
          </DataContainer>
        </Content>
      </Container>
    </>
  );
};

export default CreateInfoGame;
