import React from "react";

const Book = ({ book, index, toggleStatus }) => {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{book.title}</td>
      <td>{book.author}</td>
      {book.status === "Checked Out" && <span>{book.dueDate}</span>}
      <td>{book.status}</td>
      <button onClick={() => toggleStatus(index)}>Toggle Status</button>
    </tr>
  );
};

export default Book;
