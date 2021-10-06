import {React,useEffect, useState} from "react";
import "./card.css";
import moment from "moment";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { deleteExpense , showForm, editForm, totalExpense } from "../../redux/action";

const Card = ({ item }) => {

    const[time,setTime]= useState(moment(item.createdAt).fromNow());
    const dispatch = useDispatch();
  

    //Updating expense created at time
    useEffect(() => {
        const timer = setInterval(() => {
      setTime(moment(item.createdAt).fromNow());
      }, 60 * 1000);
      return () => {
        clearInterval(timer);
      }
      // eslint-disable-next-line
    }, []);
  

  const handleDelete = () => {
    toast.success("Expense Deleted Successfully");
    dispatch(deleteExpense(item.createdAt));
    dispatch(totalExpense());
  };

  const handleEdit = () => {
    dispatch(editForm(item.createdAt));
    dispatch(showForm(true));
  };

  return (
    <div
      className="card"
      style={{ borderRight: `6px solid ${item.category.color}` }}
    >
      <div className="card-image-container">
        <img
          src={item.category.icon.default}
          alt={item.category.title}
          className="card-image"
        />
      </div>
      <div className="card-info">
        <label className="card-title">{item.title}</label>
        <label className="card-time">{time}</label>
      </div>
      <div className="card-right">
        <div className="card-icons">
        <div className="edit-icon" onClick={handleEdit}> <i class="fi fi-rr-edit-alt"></i> </div>
        <div className="delete-icon" onClick={handleDelete}>
          <i class="fi-rr-trash"></i>
        </div>
        </div>
        <div>
          <label className="card-amount">₹ {item.amount}</label>
        </div>
      </div>
    </div>
  );
};

export default Card;