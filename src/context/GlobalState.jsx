import React, { createContext, useContext, useReducer, useEffect } from "react";
import { AppReducer } from "./AppReducer";

const initialState = {
  transactions: []
};

export const GlobalContext = createContext();

export const useGlobalState = () => useContext(GlobalContext);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState, ()=>{
    const localData = localStorage.getItem('transactions')
    return localData ?JSON.parse(localData): initialState
  })

  useEffect(() =>{
    localStorage.setItem('transactions',JSON.stringify(state))
  }, [state])

  const addTransaction = (transaction) => { 
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction
    });
  };
  const deleteTransaction = (id) => { // 
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id
    });
  };

  return (
    <GlobalContext.Provider value={{ transactions: state.transactions, addTransaction , deleteTransaction}}>
      {children}
    </GlobalContext.Provider>
  );
};
