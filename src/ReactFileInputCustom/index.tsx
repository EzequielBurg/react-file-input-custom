import React, { useCallback, useRef, useState } from 'react';
import { ImUpload2 } from 'react-icons/im';
import { Button } from './styles';

export type ReactFileInputTypes = {
  handleChange?: (event: InputEvent) => void;
  acceptedExtensions?: string;
  backgroundColor?: string;
  textColor?: string;
  text?: string;
  width?: string;
  classes?: string;
}

export const ReactFileInputCustom: React.FC<ReactFileInputTypes> = ({
  handleChange,
  acceptedExtensions,
  backgroundColor='#3699ff',
  textColor='#fff',
  text='Selecione um arquivo',
  width='250px',
  classes,
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
      handleChange(fileUploaded);
    }
  }, [handleChange]);

  return (
    <>
      <Button
        type="button"
        onClick={handleClick}
        className={classes}
        style={{ background: backgroundColor, color: textColor, width: width }}
      >
        <ImUpload2 size={18} color={textColor} />
        &nbsp;
        {!logo ? text : logo?.name}
      </Button>
      <input
        type="file"
        accept={acceptedExtensions}
        ref={inputFileRef}
        style={{ display: 'none' }}
        onChange={handleChangeFile}
        {...props}
      />
    </>
  );
}
