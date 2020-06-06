const books = [
  {
    id: 1,
    title: "Good to great",
    slug: "good-to-greate",
    authorId: 1,
    category: "Business",
  },
  {
    id: 2,
    title: "Spiral Dynamic Integral",
    slug: "spiral-dynamic-integral",
    authorId: 2,
    category: "Business",
  },
  {
    id: 3,
    title: "Just random book",
    slug: "random-book",
    authorId: 3,
    category: "Other",
  },
];

const authors = [
  {
    id: 1,
    name: "Jim Collins",
  },
  { id: 2, name: "Don Beck" },
  { id: 3, name: "John Snow" },
];

const newBook = {
  id: null,
  title: "",
  authorId: null,
  category: "",
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newBook,
  books,
  authors,
};
