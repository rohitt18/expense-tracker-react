import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Transaction = ({ transaction }) => {
  // catching it here so we could either say props and use props.transaction.text or else destructure it straight away
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? "-" : "+";

  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.text}
      <span>{`${sign}₹${Math.abs(transaction.amount)}`}</span>
      <button
        className="delete-btn"
        onClick={() => deleteTransaction(transaction.id)}
      >
        x
      </button>
    </li>
  );
};

export default Transaction;

// Math.abs() ke andar jo bhi value hoga voh positive ho jayega
