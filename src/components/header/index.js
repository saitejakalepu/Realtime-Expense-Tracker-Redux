import {React, useEffect} from "react";
import "./header.css";
import { useDispatch , useSelector} from "react-redux";
import { totalExpense } from "../../redux/action";

const Header = () => {
  const dispatch = useDispatch();
  const amt = useSelector(state=>state.total)

  //Fetch the total amount on window refresh
  useEffect(() => {
    dispatch(totalExpense());
},[]);

  return (
      <div className="header">
        <div className="header-logo">
          <i class="fi-rr-credit-card" />
        </div>
        <div className="header-button">
        <img src="https://img.icons8.com/ios/50/000000/rupee.png" alt="img-rupee"/>
            <label>Total : </label>
            <label>{amt}</label>
        </div>
      </div>
  );
};

export default Header;