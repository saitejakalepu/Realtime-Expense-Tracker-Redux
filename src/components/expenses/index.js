import React from "react";
import { useSelector } from "react-redux";
import Card from "./card";
import "./expenses.css";

const ExpenseList = () => {
  const list = useSelector((state) => state.expenseList);
  const query = useSelector((state)=>state.query);
  //filters the list if any user enters search text
  const filteredList = list.filter((item) => item.title.includes(query.toLowerCase()));

  return (
    <div className="expense-list">
     {filteredList.length ? (
        filteredList.map((item) => (
          <Card item={item} />
        ))
      ) : 
      ( query === "" ?
          (
            <div className="empty-state">
            <img
              src={require("../../assets/images/empty.png").default}
              alt="No Expenses"
              className="empty-image"
            />
            <label>Uh Oh! Your expense list is empty.</label>
          </div>
          ):(
            <div className="empty-state">
            <img
              src={require("../../assets/images/empty.png").default}
              alt="No Search Expenses"
              className="empty-image"
            />
            <label>Uh Oh! No Search results found</label>
          </div>
          )
          
        
      )}
    </div>
  );
};

export default ExpenseList;