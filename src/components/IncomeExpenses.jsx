import { useGlobalState } from "../context/GlobalState";

export default function IncomeExpenses() {
  const { transactions } = useGlobalState();

  const amounts = transactions.map(transaction => transaction.amount);

  const ingresos = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => acc + item, 0); // Corregido el retorno del acumulador

    const gastos = amounts
    .filter(item => item < 0)
    .reduce((acc, item) => acc + item, 0) *-1
  

  return (
    <>
      <div className=" flex justify-between my-2">
        <h4>Ingresos</h4>
        <p>${ingresos}</p>
      </div>
      <div className=" flex justify-between my-2">
        <h4>Gastos</h4>
        <p>${gastos}</p>
      </div>
    </>
  )
}
