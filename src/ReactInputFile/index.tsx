import React, { useCallback, useRef, useState } from 'react';
import { ImUpload2 } from 'react-icons/im';
require('./styles.css');

export type ReactInputFileTypes = {
  handleChange?: (event: InputEvent) => void;
  acceptedExtensions?: string;
  backgroundColor?: string;
  textColor?: string;
  width?: string;
}

export const ReactInputFile: React.FC<ReactInputFileTypes> = ({
  handleChange,
  acceptedExtensions,
  backgroundColor='#3699ff',
  textColor='#fff',
  width='220px',
  ...props
}) => {
  const [logo, setLogo] = useState<File>();
  const inputFileRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  const handleClick = useCallback(() => {
    if (inputFileRef && inputFileRef.current) {
      inputFileRef.current.click();
    }
  }, []);

  const handleChangeFile = useCallback((event) => {
    const fileUploaded = event.target.files[0];
    setLogo(fileUploaded);
    if (handleChange) {
      handleChange(event);
    }
  }, [handleChange]);

  return (
    <div className="container">
      <button
        type="button"
        onClick={handleClick}
        className="button-input-file"
        style={{ background: backgroundColor, color: textColor, width: width }}
      >
        <ImUpload2 size={18} color={textColor} />
        &nbsp;
        {!logo
          ? 'Selecione um arquivo'
          : logo?.name
        }
      </button>
      <input
        type="file"
        accept={acceptedExtensions}
        ref={inputFileRef}
        style={{ display: 'none' }}
        onChange={handleChangeFile}
        {...props}
      />
    </div>
  );
}
