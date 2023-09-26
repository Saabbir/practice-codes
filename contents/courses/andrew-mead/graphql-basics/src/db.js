const users = [
  {
    id: "1",
    name: "Saabbir",
    email: "thesaabbir@gmail.com",
    age: 28,
  },
  {
    id: "2",
    name: "Esha",
    email: "eshasaabbir@gmail.com",
    age: 20,
  },
  {
    id: "3",
    name: "Sabahat",
    email: "sabahat@gmail.com",
    age: 2,
  },
];

const posts = [
  {
    id: "1",
    title: "GraphQL 101",
    body: "",
    published: true,
    author: "1",
  },
  {
    id: "2",
    title: "Beginner guide to GraphQL",
    body: "Learn new way of creating APIs.",
    published: false,
    author: "1",
  },
  {
    id: "3",
    title: "REST API Basics",
    body: "Node.js knowledge is required.",
    published: false,
    author: "2",
  },
];

const comments = [
  {
    id: "1",
    text: "Very good post",
    author: "2",
    post: "1",
  },
  {
    id: "2",
    text: "Very informative article",
    author: "1",
    post: "2",
  },
  {
    id: "3",
    text: "Nice one!",
    author: "2",
    post: "1",
  },
];

const db = {
  users,
  posts,
  comments,
};

export { db as default };
