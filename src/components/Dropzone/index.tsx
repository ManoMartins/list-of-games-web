import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { FiUpload } from 'react-icons/fi';

import { ContainerDropzone } from './styles';

interface IProps {
  onFileUploaded: (file: File) => void;
}

const Dropzone: React.FC<IProps> = ({ onFileUploaded }) => {
  const [selectedFileUrl, setSelectedFileUrl] = useState('');

  const onDrop = useCallback(
    acceptedFiles => {
      const file = acceptedFiles[0];

      const fileUrl = URL.createObjectURL(file);

      setSelectedFileUrl(fileUrl);
      onFileUploaded(file);
    },
    [onFileUploaded],
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'image/*',
  });

  return (
    <ContainerDropzone {...getRootProps()}>
      <input {...getInputProps()} accept="image/*" />

      {selectedFileUrl ? (
        <img src={selectedFileUrl} alt="Point thumbnail" />
      ) : (
        <p>
          <FiUpload />
          Image of game
        </p>
      )}
    </ContainerDropzone>
  );
};

export default Dropzone;
