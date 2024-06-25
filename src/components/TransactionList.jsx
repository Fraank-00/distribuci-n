import React from 'react';
import { useGlobalState } from "../context/GlobalState";
import TransactionItem from "./Transactionitem"; 


export default function TransactionList() {
    const { transactions } = useGlobalState();

    return (
        <>
            <h3 className=' text-slate-300 text-xl fond-bold w-full'>Historial</h3>
           <ul>
             {transactions.map(transaction => (
                <TransactionItem transaction={transaction} key={transaction.id}/>
             ))}
           </ul>
        </>
    );
}
