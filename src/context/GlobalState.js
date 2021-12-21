import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";

// Initial state
const initialState = {
  transactions: [],
  error: null,
  loading: true,
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  

  // Actions
  async function getTransactions() {
    try {
      const res = await axios.get(
       `${process.env.REACT_APP_API}/transactions` ,
        // {
        //   headers: {
        //     Authorization: window.localStorage.getItem("auth"),
        //   },
        // }
      );

      dispatch({
        type: "GET_TRANSACTIONS",
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: "TRANSACTION_ERROR",
        payload: err.response.data.error,
      });
    }
  }

  async function deleteTransaction(_id) {
    try {
      await axios.delete(
        `${process.env.REACT_APP_API}/transactions/${_id}`,
        // {
        //   headers: {
        //     Authorization: window.localStorage.getItem("auth"),
        //   },
        // }
      );

      dispatch({
        type: "DELETE_TRANSACTION",
        payload: _id,
      });
    } catch (err) {
      dispatch({
        type: "TRANSACTION_ERROR",
        payload: err.response.data.error,
      });
    }
  }

  async function addTransaction(transaction) {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/transactions`,
        transaction,
        config,
        // {
        //   headers: {
        //     Authorization: window.localStorage.getItem("auth"),
        //   },
        // }
      );

      dispatch({
        type: "ADD_TRANSACTION",
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: "TRANSACTION_ERROR",
        payload: err.response.data.error,
      });
    }
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        error: state.error,
        loading: state.loading,
        getTransactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
