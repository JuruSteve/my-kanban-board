import uuid from "uuid/v4";

const itemsData = [
  {
    id: uuid(),
    title: "",
    content: "",
    tags: [],
  },
];

export const store = {
  [uuid()]: {
    name: "Backlog",
    items: itemsData,
  },
  [uuid()]: {
    name: "Todo",
    items: [],
  },
  [uuid()]: {
    name: "In Progress",
    items: [],
  },
  [uuid()]: {
    name: "Done",
    items: [],
  },
};
