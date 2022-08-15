import { ADD_POST, UPD_UI } from "./types";

export const addPost = (post) => {
  return {
    type: ADD_POST,
    payload: post,
  };
};

export const updUI = () => {
  return {
    type: UPD_UI,
  };
};
