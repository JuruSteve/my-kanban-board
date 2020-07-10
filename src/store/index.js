import { v4 as uuidv4 } from "uuid";

const itemsData = [
  {
    id: uuidv4(),
    title: "Set up action creators",
    content:
      "Write action creators for fetching tasks(items) for all states. (Success, Failure, Errors)",
    tags: [],
  },
  {
    id: uuidv4(),
    title: "Set up Sagas for flow control",
    content:
      "Write Sagas to control the flow of fetching, adding, and moving tasks(items).",
    tags: [],
  },
  {
    id: uuidv4(),
    title: "Unit test Sagas",
    content: "Write tests for all the sagas to ensure reliability",
    tags: [],
  },
];

export const store = {
  [uuidv4()]: {
    name: "Backlog",
    items: itemsData,
  },
  [uuidv4()]: {
    name: "Todo",
    items: [],
  },
  [uuidv4()]: {
    name: "In Progress",
    items: [],
  },
  [uuidv4()]: {
    name: "Done",
    items: [],
  },
};
