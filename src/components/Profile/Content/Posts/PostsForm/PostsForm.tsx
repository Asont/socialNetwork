import { ReactElement } from 'react';

import { TextField } from '@mui/material';
import { useFormik } from 'formik';

import { Button } from 'components/comonComponents/Button/Button';

export type PostsReduxFormType = {
  textPost: string;
};

type addNewPostHandleType = {
  addNewPostHandle: (data: PostsReduxFormType) => void;
};

export const PostForm = ({ addNewPostHandle }: addNewPostHandleType): ReactElement => {
  const formik = useFormik({
    initialValues: {
      textPost: '',
    },
    onSubmit: values => {
      addNewPostHandle(values);
      formik.resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <TextField
          id="textPost"
          label="Posts"
          type="text"
          variant="standard"
          onChange={formik.handleChange}
          value={formik.values.textPost}
        />
      </div>
      <div>
        <Button name="Add post" type="submit" />
      </div>
    </form>
  );
};
