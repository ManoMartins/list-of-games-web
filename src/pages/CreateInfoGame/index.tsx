import React, { useState, useEffect, FormEvent, ChangeEvent } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';
import {
  Container,
  Content,
  Field,
  Fieldset,
  FieldTime,
  DescriptionPosition,
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
  const [description, setDescription] = useState('');
  const [descriptionLength, setDescriptionLength] = useState(0);
  const [platforms, setPlatforms] = useState<IPlatform[]>([]);
  const [formData, setFormData] = useState({
    title: '',
    release: '',
    main_story_hours: 0,
    main_story_minutes: 0,
    main_extra_hours: 0,
    main_extra_minutes: 0,
  });

  const history = useHistory();

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

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleDescriptionChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setDescriptionLength(event.target.value.length);
    setDescription(event.target.value);
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const {
      title,
      release,
      main_extra_hours,
      main_extra_minutes,
      main_story_hours,
      main_story_minutes,
    } = formData;
    const platform = selectedPlatform;
    const genre = selectedGenres;

    const data = new FormData();

    data.append('title', title);
    data.append('release', release);
    data.append('main_extra_hours', String(main_extra_hours));
    data.append('main_extra_minutes', String(main_extra_minutes));
    data.append('main_story_hours', String(main_story_hours));
    data.append('main_story_minutes', String(main_story_minutes));
    data.append('description', description);
    data.append('platform', platform.join(','));
    data.append('genre', genre.join(','));

    if (selectedFile) {
      data.append('image', selectedFile);
    }

    await api.post('info-game', data);

    history.push('/');
  }

  return (
    <>
      <Header />
      <Container>
        <Content>
          <Dropzone onFileUploaded={setSelectedFile} />
          <form onSubmit={handleSubmit}>
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
                  onChange={handleInputChange}
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
                    name="main_story_hours"
                    type="number"
                    min="0"
                    placeholder="Hours"
                    onChange={handleInputChange}
                  />
                  <input
                    name="main_story_minutes"
                    type="number"
                    min="0"
                    max="59"
                    placeholder="Minutes"
                    onChange={handleInputChange}
                  />
                </FieldTime>
                <FieldTime>
                  <label htmlFor="main_extra">Main + Extra</label>
                  <input
                    name="main_extra_hours"
                    type="number"
                    min="0"
                    placeholder="Hours"
                    onChange={handleInputChange}
                  />
                  <input
                    name="main_extra_minutes"
                    type="number"
                    min="0"
                    max="59"
                    placeholder="Minutes"
                    onChange={handleInputChange}
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

              <DescriptionPosition>
                <textarea
                  name="description"
                  placeholder="Type a description"
                  onChange={handleDescriptionChange}
                  maxLength={280}
                  value={description}
                />
                <div>
                  <p>
                    {descriptionLength < 10
                      ? `00${descriptionLength}`
                      : descriptionLength < 100
                      ? `0${descriptionLength}`
                      : descriptionLength}
                    /280
                  </p>
                </div>
              </DescriptionPosition>
            </Fieldset>

            <div>
              <button type="submit">Enviar</button>
            </div>
          </form>
        </Content>
      </Container>
    </>
  );
};

export default CreateInfoGame;
