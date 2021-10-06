import Header from './components/header';
import Topfold from './components/topfold';
import Form from './components/form';
import { useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import {ToastContainer } from "react-toastify";
import './App.css'
import ExpenseList from './components/expenses';

function App() {
  const showForm = useSelector(state=>state.showForm);

  return (
    <div className="App">
      <Header/>
      <Topfold/>
      {showForm ? <Form/> :  <ExpenseList/>}
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        />
      </div>
  );
}

export default App;
