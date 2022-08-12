import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import chat1 from '../common/assets/images/chat1.png';
import chat2 from '../common/assets/images/chat2.png';
import chat3 from '../common/assets/images/chat3.png';
import chat4 from '../common/assets/images/chat4.png';
import chat5 from '../common/assets/images/chat5.png';

import { dialogsItemsPT } from 'components/Messages/MessagesContainer';
import { CommonConstants } from 'utils/enum/enum';

const initialState: dialogsItemsPT = {
  dialogs: [
    {
      id: 1,
      name: 'Alexa',
      ava: chat1,
    },
    {
      id: 2,
      name: 'Alex',
      ava: chat2,
    },
    {
      id: 3,
      name: 'Sam',
      ava: chat3,
    },
    {
      id: 4,
      name: 'Bob',
      ava: chat4,
    },
    {
      id: 5,
      name: 'Ann',
      ava: chat5,
    },
  ],
  messages: [
    { id: 1, text: 'Hi' },
    { id: 2, text: 'How are you' },
    { id: 3, text: 'Good' },
    { id: 4, text: 'And you' },
    { id: 5, text: `I'm fine thanks` },
  ],
};

const slice = createSlice({
  name: 'dialogs',
  initialState,
  reducers: {
    addTextMessageAC(state, action: PayloadAction<{ value: string }>) {
      const newPost = {
        id: state.messages.length + CommonConstants.one,
        text: action.payload.value,
      };
      state.messages.push(newPost);
    },
  },
});

export const dialogsReducer = slice.reducer;
export const { addTextMessageAC } = slice.actions;

export type addTextMessageATPT = ReturnType<typeof addTextMessageAC>;
