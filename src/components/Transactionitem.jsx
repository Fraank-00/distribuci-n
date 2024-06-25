import React from 'react';
import { useGlobalState } from "../context/GlobalState";

export default function TransactionItem({ transaction }) {
  const { deleteTransaction } = useGlobalState();

  const handleDelete = () => {
    deleteTransaction(transaction.id);
  };

  return (
    <li className='bg-zinc-600 text-white px-3 py-1 rounded-1g mb-2 w-full flex justify-between item-center'>
      <p className='text-lg'>{transaction.description}</p>
      <div>
       <span>${transaction.amount}</span>
       <button onClick={handleDelete} className='bg-red-700 text-white px-5  rounded-4g  justify-between '  > {/* Llamada a handleDelete */}
        x
       </button>
      </div>
      
    </li>
  );
}
