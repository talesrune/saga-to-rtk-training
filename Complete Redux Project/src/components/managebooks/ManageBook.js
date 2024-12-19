import React, { useEffect } from "react";
import AddBook from "./AddBook";
import "./module.addbook.css";
import StatsPanel from "../common/StatsPanel";
import Listofbooks from "./Listofbooks";
// import { useSelector } from "react-redux";
import { useGetBooksQuery } from "../api/booksApi";
// import { actionGetBooks } from "../../actions/actionManageBooks";

function ManageBook() {

  // const mybooks = useSelector((state) => state.reducerManageBooks);
  const {data: mybooks} = useGetBooksQuery();
  console.log(mybooks)

  return (
    <>
      <div style={{ display: "flex" }}>
        <StatsPanel
          heading="Total Books"
          total={mybooks && mybooks.length}
        />
        <StatsPanel
          heading="Available Books"
          total={
            mybooks
              ? mybooks.filter((x) => x.status == "Available").length
              : 0
          }
        />
      </div>

      <AddBook />

      <Listofbooks />
    </>
  );
}

export default ManageBook;
