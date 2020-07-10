import uuid from "uuid/v4";

const itemsData = [
  {
    id: uuid(),
    title: "Set up action creators",
    content:
      "Write action creators for fetching tasks(items) for all states. (Success, Failure, Errors)",
    tags: [],
  },
  {
    id: uuid(),
    title: "Set up Sagas for flow control",
    content:
      "Write Sagas to control the flow of fetching, adding, and moving tasks(items).",
    tags: [],
  },
  {
    id: uuid(),
    title: "Unit test Sagas",
    content: "Write tests for all the sagas to ensure reliability",
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
