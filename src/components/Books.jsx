import React, { useState } from "react";
import Book from "./Book";
import SearchFilter from "./SearchFilter";

const getRandomDueDate = () => {
  const today = new Date();
  const randomDays = Math.floor(Math.random() * 30);
  const dueDate = new Date(today);
  dueDate.setDate(today.getDate() + randomDays);
  return dueDate.toISOString().split("T")[0];
};

const booksList = [
  { title: "Science", author: "Hilary", status: "Available" },
  { title: "Math", author: "Marilynne", status: "Available" },
  { title: "MAPEH", author: "Sebald", status: "Available" },
  { title: "ESP", author: "Ali", status: "Available" },
  {
    title: "Filipino",
    author: "Kate",
    dueDate: getRandomDueDate(),
    status: "Checked Out",
  },
  {
    title: "AP",
    author: "Sally",
    dueDate: getRandomDueDate(),
    status: "Checked Out",
  },
  {
    title: "Rapture",
    author: "Carol",
    dueDate: getRandomDueDate(),
    status: "Checked Out",
  },
  {
    title: "English",
    author: "Michael",
    dueDate: getRandomDueDate(),
    status: "Checked Out",
  },
  {
    title: "Underland",
    author: "Robert",
    dueDate: getRandomDueDate(),
    status: "Checked Out",
  },
  {
    title: "Postwar",
    author: "Tony",
    dueDate: getRandomDueDate(),
    status: "Checked Out",
  },
];

const Books = () => {
  const [books, setBooks] = useState(booksList);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleStatus = (index) => {
    setBooks((prevBooks) =>
      prevBooks.map((book, i) =>
        i === index
          ? {
              ...book,
              status:
                book.status === "Checked Out" ? "Available" : "Checked Out",
              dueDate:
                book.status === "Available" ? getRandomDueDate() : undefined,
            }
          : book
      )
    );
  };

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <SearchFilter searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <tr>
        <th>No.</th>
        <th>Title</th>
        <th>Author</th>
        <th>DueDate</th>
        <th>Status</th>
      </tr>
      {filteredBooks.map((book, index) => (
        <Book
          key={index}
          book={book}
          index={index}
          toggleStatus={toggleStatus}
        />
      ))}
    </div>
  );
};

export default Books;
