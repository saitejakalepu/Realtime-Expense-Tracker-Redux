import {React,useState} from 'react';
import './topfold.css';
import { showForm } from '../../redux/action';
import { useDispatch , useSelector} from "react-redux";
import {searchExpense} from '../../redux/action'

const Topfold = () => {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.expenseList);
  const isDisabled = list.length > 0 ? false : true;
  const [query, setQuery] = useState("");

  const handleQuery = (e) => {
    setQuery(e.target.value);
    dispatch(searchExpense(e.target.value));
  };

    return (
        <div className="topfold">
          <div className="home-topfold">
            <div className="searchbar">
              <i class="fi-rr-search"></i>
              <input
                placeholder="Search for expenses"
                value={query}
                onChange={(e) => handleQuery(e)}
                disabled={isDisabled}
              />
            </div>
            {/* <i class="fi fi-rr-filter"></i> */}
              <div className="add-button" onClick={(e)=>dispatch(showForm(true))}>
                <i class="fi-rr-add"></i>
                Add
              </div>
          </div>
          </div>
        ) 
}

export default Topfold
