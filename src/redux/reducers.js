import { ADD_POST } from "./types";

const initState = [
  {
    author: {
      name: "Kylo Ren",
      photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUVvL00qmEBaGOOszHBI6XbZX2zGpsaqVVHA&usqp=CAU",
      nickname: "@notben",
    },
    content: "@dart_vader Grandpa, I am Skywalker too! But I am not Luke's!!!",
    image:
      "https://i.pinimg.com/originals/7d/17/3b/7d173b3c37f25d84bbe93149af986549.jpg",
    date: "Feb 27",
    reactions: {
      comments: 805,
      shares: 1318,
      likes: 2608,
    },
  },
  {
    author: {
      name: "Ray Skywalker",
      photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjx4UVqMcGIU45NCZjUAmNXqJvJf9kBVTdqw&usqp=CAU",
      nickname: "@i_did_not_ask_for_it",
    },
    content:
      "@dart_vader I thought we got rig of you lol. Btw, where to find Luke??",
    image:
      "https://howardwilliamsblog.files.wordpress.com/2015/12/darth-vader-mask.jpg?w=640",
    date: "Feb 27",
    reactions: {
      comments: 324,
      shares: 302,
      likes: 1002,
    },
  },
  {
    author: {
      name: "Anakin Skywalker",
      photo:
        "https://styles.redditmedia.com/t5_3it30/styles/communityIcon_ww7zsfj5mda11.jpg?format=pjpg&s=820fd6330b0e097240b36ad2bc74d328b34a69db",
      nickname: "@dart_vader",
    },
    content: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
    image:
      "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale",
    date: "Feb 26",
    reactions: {
      comments: 482,
      shares: 146,
      likes: 887,
    },
  },
];

export const posts = (state = initState, action) => {
  switch (action.type) {
    case ADD_POST:
      return [action.payload, ...state];
  }

  return state;
};
