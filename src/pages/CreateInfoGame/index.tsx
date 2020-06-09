import React, { useState, useEffect } from 'react';

import api from '../../services/api';
import {
  Container,
  Content,
  Field,
  Fieldset,
  FieldTime,
  CardGenre,
  CardPlatform,
  ListCardSelect,
  FieldGroup,
} from './styles';
import Dropzone from '../../components/Dropzone';
import Header from '../../components/Header';

interface IPlatform {
  id: number;
  name: string;
  color: string;
  image_url: string;
}

interface IGenre {
  id: number;
  name: string;
  image_url: string;
}

const CreateInfoGame: React.FC = () => {
  const [selectedPlatform, setSelectedPlatform] = useState<number[]>([]);
  const [selectedGenres, setSelectedGenres] = useState<number[]>([]);
  const [genres, setGenres] = useState<IGenre[]>([]);
  const [platforms, setPlatforms] = useState<IPlatform[]>([]);

  const [selectedFile, setSelectedFile] = useState<File>();

  function handleSelected(select: number[], id: number) {
    const alreadySelected = select.findIndex(item => item === id);

    const filteredItems = select.filter(item => item !== id);
    if (select === selectedPlatform) {
      if (alreadySelected >= 0) {
        setSelectedPlatform(filteredItems);
      } else {
        setSelectedPlatform([...selectedPlatform, id]);
      }
    } else if (alreadySelected >= 0) {
      setSelectedGenres(filteredItems);
    } else {
      setSelectedGenres([...selectedGenres, id]);
    }
  }

  useEffect(() => {
    api.get('genre').then(response => {
      setGenres(response.data);
    });
  }, []);

  useEffect(() => {
    api.get('platform').then(response => {
      setPlatforms(response.data);
    });
  }, []);

  return (
    <>
      <Header />
      <Container>
        <Content>
          <Dropzone onFileUploaded={setSelectedFile} />
          <form>
            <Fieldset>
              <legend>
                <h2>Info of game</h2>
              </legend>
              <Field>
                <input placeholder="Name of game" />

                <input
                  type="date"
                  name="release"
                  placeholder="Date of release"
                />
              </Field>
            </Fieldset>

            <Fieldset>
              <legend>
                <h2>Time to complete de game</h2>
              </legend>

              <FieldGroup>
                <FieldTime>
                  <label htmlFor="main_story">Main Story</label>
                  <input
                    name="main_story"
                    type="number"
                    min="0"
                    placeholder="Hours"
                  />
                  <input
                    name="main_story"
                    type="number"
                    min="0"
                    placeholder="Minutes"
                  />
                </FieldTime>
                <FieldTime>
                  <label htmlFor="main_extra">Main + Extra</label>
                  <input
                    name="main_extra"
                    type="number"
                    min="0"
                    placeholder="Hours"
                  />
                  <input
                    name="main_extra"
                    type="number"
                    min="0"
                    placeholder="Minutes"
                  />
                </FieldTime>
              </FieldGroup>
            </Fieldset>

            <Fieldset>
              <legend>
                <h2>Select the platfrom</h2>
              </legend>

              <ListCardSelect>
                {platforms.map(platform => (
                  <CardPlatform
                    key={platform.id}
                    onClick={() =>
                      handleSelected(selectedPlatform, platform.id)}
                    isSelected={selectedPlatform.includes(platform.id)}
                    isPlatform={platform.color}
                  >
                    <img src={platform.image_url} alt={platform.name} />
                    <strong>{platform.name}</strong>
                  </CardPlatform>
                ))}
              </ListCardSelect>
            </Fieldset>

            <Fieldset>
              <legend>
                <h2>Select the genre</h2>
              </legend>

              <ListCardSelect>
                {genres.map(genre => (
                  <CardGenre
                    key={genre.id}
                    onClick={() => handleSelected(selectedGenres, genre.id)}
                    isSelected={selectedGenres.includes(genre.id)}
                  >
                    <img src={genre.image_url} alt={genre.name} />
                    <strong>{genre.name}</strong>
                  </CardGenre>
                ))}
              </ListCardSelect>
            </Fieldset>

            <Fieldset>
              <legend>
                <h2>Description</h2>
              </legend>

              <textarea
                name="description"
                placeholder="Type a description with max 255 caracteres"
              />
            </Fieldset>
          </form>
        </Content>
      </Container>
    </>
  );
};

export default CreateInfoGame;
