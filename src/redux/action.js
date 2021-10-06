export const showForm=(toggle)=>{
    return {
        type:"SHOW_FORM",
        payload : toggle
      }
}

export const editForm=(key)=>{
  return {
      type:"EDIT_FORM",
      payload : key
    }
}

export const addExpense=(data)=>{
    return {
        type:"ADD_EXPENSE",
        payload : data
      }
}


export const updateExpense=(data)=>{
  return {
      type:"UPDATE_EXPENSE",
      payload : data
    }
  }



export const searchExpense=(text)=>{
  return {
      type:"SEARCH_EXPENSE",
      payload : text
    }
}

export const deleteExpense=(key)=>{
  return{
    type : "DELETE_EXPENSE",
    payload : key
  }
}

export const totalExpense=()=>{
  return{
    type : "TOTAL_EXPENSE",
  }
}









