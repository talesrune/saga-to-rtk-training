import React from "react";
import { useSelector } from "react-redux";
import { useGetBooksQuery } from "../api/booksApi";

function Listofbooks() {
  // const books = useSelector((state) => state.reducerManageBooks);
  // console.log(books)
  const { data:books, error, isLoading } = useGetBooksQuery();
  console.log(books)

  const GetRatingText = (ratingNo) => {
    switch (ratingNo) {
      case 5:
        return "Excellent";
      case 4:
        return "Very Good";
      case 3:
        return "Average";
      case 2:
        return "Below average";
      case 1:
        return "Waste of time";

      default:
        return "";
    }
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>S.NO #</td>
            <th>Book Name</th>
            <th>Author</th>
            <th>Status</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
        {/* <>{JSON.stringify(books)}</> */}
          {books === undefined 
            ? null
            : books.map((book, index) => {
                return (
                  <tr key={index}>
                    <td>{book.bookid}</td>
                    <td>{book.bookname}</td>
                    <td>{book.author}</td>
                    <td>{book.status}</td>
                    <td>{GetRatingText(book.rating)}</td>
                  </tr>
                );
              })}
        </tbody>
      </table>
    </div>
  );
}

export default Listofbooks;
