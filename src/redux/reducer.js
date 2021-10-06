const initialList = () => {
    const list = localStorage.getItem("expense-list");
    let expenses = [];
    if (list) {
      expenses = JSON.parse(list);
    }
    return expenses;
  };

const initialState =
{
    expenseList : initialList(),
    query : "",
    showForm : false,
    total : 0,
    editformKey : ""
}

export const reducer=(state=initialState, {type,payload})=>{
switch(type)
{
    case "SHOW_FORM":
    return{...state, showForm : payload}

    case "EDIT_FORM":
    return{...state, editformKey : payload}

    case "ADD_EXPENSE":
    localStorage.setItem("expense-list",JSON.stringify([...state.expenseList, payload]) );
    return{...state, expenseList: [...state.expenseList, payload]}

    case "UPDATE_EXPENSE":
      const {data} = payload;
      const {title, amount , category ,createdAt } = data;
      state.expenseList.map((item)=>
        {
          if(item.createdAt === payload.key)
          {
            item.title = title;
            item.amount = amount;
            item.category = category;
            item.createdAt = createdAt;
          }
          
        }
        )
    localStorage.setItem("expense-list",JSON.stringify([...state.expenseList]) );
    return{...state, expenseList : [...state.expenseList]};

    case "DELETE_EXPENSE":
     const updatedList = state.expenseList.filter((item) => item.createdAt !== payload );
     localStorage.setItem("expense-list", JSON.stringify(updatedList));
     return { ...state,expenseList: updatedList}

    case "SEARCH_EXPENSE":
    return {...state, query : payload}

    case "TOTAL_EXPENSE":
    let sum = 0;
    state.expenseList.map((item) => sum = sum + item.amount );
    return {...state,  total : sum}

    default:
    return state
}
}

