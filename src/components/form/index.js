import {React,useState} from 'react';
import { useDispatch , useSelector} from 'react-redux';
import { showForm ,addExpense , totalExpense , updateExpense, editForm } from '../../redux/action';
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import './form.css';

const Form = () => {
  const key = useSelector(state=>state.editformKey);
  const list= useSelector(state=>state.expenseList);

  let defaultTitle="";
  let defaultAmt = "";
  let defaultCategory="";

  if(key)
  {
    const filtered = list.filter((item)=>item.createdAt === key);
    const [expense] = filtered;
    defaultTitle = expense.title;
    defaultAmt = expense.amount;
    defaultCategory = expense.category;
  }

    const dispatch = useDispatch();
    const [categoryOpen, setCategoryOpen] = useState(false);
    const [title, setTitle] = useState(defaultTitle);
    const [amount, setAmount] = useState(defaultAmt);
    const [category, setCategory] = useState(defaultCategory);

    const handleTitle = (e) => {
      setTitle(e.target.value.toLowerCase());
    };

    const handleAmount = (e) => {
      const val = parseFloat(e.target.value);
      if (isNaN(val)) {
        setAmount("");
        return;
      }
      setAmount(val);
    };

    const handleCategory = (category) => {
      setCategory(category);
      setCategoryOpen(false);
    
    };
  
    const handleSubmit = () => {
     

      if (title === "" || amount === "" || !category) {
        toast.warn("Please enter complete data");
        return;
      }

      const data = {
        title,
        amount,
        category,
        createdAt: new Date(),
      };
      toast.success("Expense added successfully");
      dispatch(addExpense(data));
      dispatch(showForm(false));
      dispatch(totalExpense());
    };


        const handleUpdate = () => {
            if (title === "" || amount === "" || !category) {
              toast.warn("Please enter complete data");
              return;
            }

            if (title === defaultTitle && amount === defaultAmt && category === defaultCategory) {
              toast.warn("No Changes detected");
              return;
            }
            
            const data = {
              title,
              amount,
              category,
              createdAt: new Date(),
            };
            toast.success("Expense updated successfully");
            dispatch(updateExpense({data : data , key : key}));
            dispatch(showForm(false));
            dispatch(editForm(""));
            dispatch(totalExpense());
          };
  
    return (
      <div className="add-form">
        <div className="form-item">
          <label>Title</label>
          <input
            placeholder="Give a name to your expenditure"
            value={title}
            onChange={(e) => handleTitle(e)}
          />
        </div>
        <div className="form-item">
          <label>Amount ₹</label>
          <input
            placeholder="Enter Amount"
            className="amount-input"
            onChange={(e) => handleAmount(e)}
            value={amount}
          />
        </div>
        <div className="category-container-parent">
          <div className="category">
            <div
              className="category-dropdown"
              onClick={() => setCategoryOpen(!categoryOpen)}
            >
              <label>{category ? category.title : "Category"}</label>
              <i class="fi-rr-angle-down"></i>
            </div>
            {categoryOpen && (
              <div className="category-container">
                {categories.map((category) => (
                  <div
                    className="category-item"
                    style={{ borderRight: `6px solid ${category.color}` }}
                    key={category.id}
                    onClick={() => handleCategory(category)}
                  >
                    <label>{category.title}</label>
                    <img src={category.icon.default} alt={category.title} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        {key ? 
          <div className="form-buttons">
          <div onClick={handleUpdate}>
            <label>Update</label>
            <i class="fi-rr-paper-plane"></i>
          </div>
          <div onClick={(e)=>{dispatch(showForm(false));dispatch(editForm(""))}}>
          <label>Cancel</label>
          <i class="fi-rr-cross-circle"></i>
          </div>
        </div> : <div className="form-buttons">
          <div onClick={handleSubmit}>
            <label>Add</label>
            <i class="fi-rr-paper-plane"></i>
          </div>
          <div onClick={(e)=>dispatch(showForm(false))}>
          <label>Cancel</label>
          <i class="fi-rr-cross-circle"></i>
          </div>
        </div>
        }
        
      </div>
    );
  };
  
  const categories = [
    {
      id: 1,
      title: "Education",
      icon: require("../../assets/images/education.png"),
      color: "#A95EC2",
    },
    {
      id: 2,
      title: "Healthcare",
      icon: require("../../assets/images/healthcare.png"),
      color: "#FF768A",
    },
    {
      id: 3,
      title: "Shopping",
      icon: require("../../assets/images/shopping.png"),
      color: "#EC60AB",
    },
    {
      id: 4,
      title: "Food",
      icon: require("../../assets/images/food.png"),
      color: "#FF9E6D",
    },
    {
      id: 5,
      title: "Other",
      icon: require("../../assets/images/entertainment.png"),
      color: "#FFCB5E",
    },
  ];
  

export default Form
