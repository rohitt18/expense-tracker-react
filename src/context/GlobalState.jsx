import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// Initial state (which is going to be a single object so any global state would go on this object)
// however all we need is our transactions bec as long as we have access to the transactions in
// certain components we can do our calculations there (for like tha balance & stuff like that)
// we dont need that stuff in our state we just need to be able to pass this data down
// & then we'll have actions for eg: delete/add transactions

const initialState = {
  transactions: [],
};

// now we need to create our GlobalContext using the createContext
export const GlobalContext = createContext(initialState);

// Provider Component
// & since we're wrapping all the components by this therefore those are gonna be the children
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  const deleteTransaction = (id) => {
    dispatch({ type: "DELETE_TRANSACTION", payload: id });
  };

  const addTransaction = (transaction) => {
    dispatch({ type: "ADD_TRANSACTION", payload: transaction });
  };

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction, // so now we should be able to pull this out just like we did transactions
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
