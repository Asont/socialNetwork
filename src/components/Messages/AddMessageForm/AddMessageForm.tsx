import { FC, ReactElement } from 'react';

import { TextField } from '@mui/material';
import { useFormik } from 'formik';

import { Button } from 'components/comonComponents/Button/Button';

export type MessageFormikInputType = {
  message: string;
};

type AddMessageFormPropsType = {
  addNewMessageHandle: (data: MessageFormikInputType) => void;
};

export const AddMessageForm: FC<AddMessageFormPropsType> = ({
  addNewMessageHandle,
}): ReactElement => {
  const formik = useFormik({
    initialValues: {
      message: '',
    },
    onSubmit: values => {
      addNewMessageHandle(values);
      formik.resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <TextField
        id="message"
        name="message"
        label="Enter text"
        type="text"
        variant="standard"
        onChange={formik.handleChange}
        value={formik.values.message}
      />
      <Button name="Add" type="submit" />
    </form>
  );
};
