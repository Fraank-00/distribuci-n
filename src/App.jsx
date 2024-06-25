import React from 'react';
import { GlobalProvider } from "./context/GlobalState";


import Balance from './components/Balance';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';
import IncomeExpenses from './components/IncomeExpenses';
import Grafic from './components/Grafic';

export default function App() {
  return (
    <GlobalProvider>
      <div className="bg-zinc-950 text-white min-h-screen flex justify-center items-center">
        <div className='container mx-auto w-3/6'>
          <div className=" bg-zinc-800 p-10 rounded-1g  flex gap-x-3">
            <div>
              <h1 className='text-4xl fond-bold'>App de Gastos</h1>
              <IncomeExpenses />
              <Balance />
              <TransactionForm />
            </div>
            <div className='flex flex-col flex-1s'>
             <Grafic/>
              <TransactionList />
              
            </div>

          </div>
        </div>

      </div>
    </GlobalProvider>
  );
}
