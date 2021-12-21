import logo from './logo.svg';
import './App.css';
import {Balance} from './components/Balance'
import { UserProvider } from './context';
import { GlobalProvider } from './context/GlobalState';
import{IncomeExpenses} from './components/IncomeExpenses'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import UserRoute from "./components/routes/UserRoute";
import Nav from "./components/Nav";
import { AddTransaction } from './components/AddTransaction';
import {TransactionList} from './components/TransactionList'
import Register from './components/Register'
import Login from './components/Login'
import ForgotPassword from './components/Forgot-Password';
import Home from './components/Home'
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import "antd/dist//antd.css";
function App() {
  return (
    <>
     <UserProvider>
       <GlobalProvider>
         <Router>
           <Nav/>
           <Routes>
             <Route
             path="/money"
             element={<UserRoute>
               <div className="container">
                      <div className="row">
                        <div className="col-lg-6">
                          <Balance/>
                          <IncomeExpenses/>
                          <AddTransaction />
                          </div>
                          <div className="col-lg-6">
                          <TransactionList />
                        </div>
                          </div>
                        </div>
             </UserRoute>}
             />
             <Route path='/' element={<Home/>} />
             <Route path='/register' element={<Register/>}/>
             <Route path='/login' element={<Login/>} />
             <Route path="/forgot-password" element={<ForgotPassword/>} />
           </Routes>
         </Router>
         <ToastContainer position="top-center" />
         </GlobalProvider>
     </UserProvider>
    </>
  );
}

export default App;
