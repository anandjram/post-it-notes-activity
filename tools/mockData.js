const activity = {
  activityId: "cfa3ecda-42b8-48cd-97a4-7d0a6ff9d496",
  instanceId: "c80497f7-e4e4-43f7-b86f-9efaf9d157d3",
  details: {
    title: "PostIt Notes Activity",
    description: "Create and share ideas, one brilliant idea per sticky.",
    icon: "https://iconurl.com",
  },
  settings: {
    videoHub: "minimized",
    updateTimeInSeconds: 90,
  },

  loggedInUser: "mani@zync.com",

  users: {
    "mani@zync.com": {
      userName: "Mani",
      userId: "mani@zync.com",
      videoUrl: "videourl1.com",
    },
    "ramani@zync.com": {
      userName: "Ramani",
      userId: "ramani@zync.com",
      videoUrl: "videourl1.com",
    },
  },
};

const notes = [
  {
    id: 1,
    userId: "ramani@zync.com",
    title: "Delhi pasu",
    text: "Buy 2x Delhi cows",
  },
  {
    id: 2,
    userId: "mani@zync.com",
    title: "Bombay pasu",
    text: "Buy 4x Bombay cows",
  },
  {
    id: 3,
    userId: "ramani@zync.com",
    title: "Calcutta pasu",
    text: "Buy 6x Calcutta cows",
  },
  {
    id: 4,
    userId: "mani@zync.com",
    title: "Madras pasu",
    text: "Buy 7x Madras cows",
  },
  {
    id: 5,
    userId: "ramani@zync.com",
    title: "Car",
    text: "Buy Maruti car",
  },
  {
    id: 6,
    userId: "mani@zync.com",
    title: "Veedu",
    text: "Buy big veedu, no vadagai!",
  },
  {
    id: 7,
    title: "Color TV",
    userId: "ramani@zync.com",
    text: "1x Red, 1x Green",
  },
  {
    id: 8,
    userId: "mani@zync.com",
    title: "A/C",
    text: "Including maatu kottaga!",
  },
];

const newNote = {
  id: null,
  userId: null,
  title: "",
  text: "",
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newNote,
  activity,
  notes,
};
