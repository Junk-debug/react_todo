export interface TODOItemType {
  name: string;
  description: string;
  checked: boolean;
  id: string;
  creationDate: Date;
}

export const todoItems: TODOItemType[] = [
  {
    name: "Prepare presentation",
    description: "Prepare a presentation for the client meeting.",
    checked: false,
    id: "1",
    creationDate: new Date(),
  },
  {
    name: "Do shopping",
    description: "Buy groceries and necessary household items.",
    checked: false,
    id: "2",
    creationDate: new Date(),
  },
  {
    name: "Sign up for a course",
    description: "Find and sign up for an online programming course.",
    checked: false,
    id: "3",
    creationDate: new Date(),
  },
  {
    name: "Prepare for interview",
    description: "Review questions and prepare for technical interview.",
    checked: false,
    id: "4",
    creationDate: new Date(),
  },
  {
    name: "Wash the car",
    description: "Wash and vacuum the car.",
    checked: false,
    id: "5",
    creationDate: new Date(),
  },
  {
    name: "Read a new book",
    description: "Select and read a new book on an interesting topic.",
    checked: false,
    id: "6",
    creationDate: new Date(),
  },
  {
    name: "Write a report",
    description: "Write a report on research results.",
    checked: false,
    id: "7",
    creationDate: new Date(),
  },
  {
    name: "Go to the gym",
    description: "Go to the gym and complete a workout.",
    checked: false,
    id: "8",
    creationDate: new Date(),
  },
  {
    name: "Prepare dinner",
    description: "Prepare a delicious dinner for the family.",
    checked: false,
    id: "9",
    creationDate: new Date(),
  },
  {
    name: "Make a weekly plan",
    description: "Create a plan for tasks for the next week.",
    checked: false,
    id: "10",
    creationDate: new Date(),
  },
];
