import { ADD_POST, DEL_POST } from "./types";

export const addPost = (post) => {
  return {
    type: ADD_POST,
    payload: post,
  };
};
