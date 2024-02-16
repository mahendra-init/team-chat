import {
  link1,
  clg_grp,
  edit1,
  gallery1,
  user10,
  user4,
  user6,
  user7,
  user8,
  user9,
  user1,
  user5,
  user2,
} from "../assets";

export const messages = [
  {
    id: 1,
    image: user6,
    messenger: "Marina Jolly",
    message: {
      icon: edit1,
      content: "Marina is typing....",
      type: "recieved",
    },
    unreadMessageNo: 2,
    timestamp: "",
  },
  {
    id: 2,
    image: user5,
    messenger: "Jackson Ray",
    message: {
      icon: gallery1,
      content: "Sent a picture",
      type: "recieved",
    },
    unreadMessageNo: null,
    timestamp: null,
  },
  {
    id: 3,
    image: user7,
    messenger: "Hafsa shaikh",
    message: {
      icon: null,
      content: "Meet me after presentation....",
      type: "recieved",
    },
    unreadMessageNo: 3,
    timestamp: null,
  },
  {
    id: 4,
    image: user8,
    messenger: "Alix Joseph",
    message: {
      icon: null,
      content: "How did you prepared....",
      type: "recieved",
    },
    unreadMessageNo: null,
    timestamp: null,
  },
  {
    id: 5,
    image: clg_grp,
    messenger: "College group",
    message: {
      icon: null,
      content: "What about wednesday....",
      type: "sent",
    },
    unreadMessageNo: null,
    timestamp: "09:35",
  },
  {
    id: 6,
    image: user9,
    messenger: "Rockstar Benj",
    message: {
      icon: link1,
      content: "Sent an attachment",
      type: "recieved",
    },
    unreadMessageNo: 2,
    timestamp: null,
  },
  {
    id: 7,
    image: user10,
    messenger: "Max Hob",
    message: {
      icon: null,
      content: "Next presentation will be....",
      type: "recieved",
    },
    unreadMessageNo: null,
    timestamp: null,
  },
];

export const yesterdayMessageContent = [
  {
    id: 1,
    image: user6,
    timestamp: "09:03 pm",
    name: "Mojixa Tan",
    messages: [
      "Hi, how are you all?",
      "How many of you prepared the prsentation?",
    ],
    type: "recieved",
  },
  {
    id: 2,
    image: user9,
    timestamp: "09:31 pm",
    name: "Rockstar Benj",
    messages: ["Hello Mojixa! I am just about to start the prepration."],
    type: "recieved",
  },
];

export const todayMessageContent = [
  {
    id: 3,
    image: user2,
    timestamp: "09:20 am",
    name: "Lorel morph",
    messages: [
      "Appologise guys i will not be able to contribute in presentation as i am having fever since 2 days.",
    ],
    type: "recieved",
  },
  {
    id: 4,
    image: user6,
    timestamp: "10:45 am",
    name: "Mojixa Tan",
    messages: ["No issue, take some rest.", "What about others?"],
    type: "recieved",
  },
  {
    id: 5,
    image: user1,
    timestamp: "10:45 am",
    name: "You",
    messages: ["I just completed it last night."],
    type: "sent",
  },
];
