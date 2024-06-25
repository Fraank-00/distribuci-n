
import { useGlobalState } from "../context/GlobalState";

export default function Balance() {

    const {transactions} = useGlobalState()
    const amounts = transactions.map(transaction => transaction.amount)
    const total =amounts.reduce((acc,item)=> (acc+= item), 0)

  return (
    <div className="flex justify-between">
      <h3>Tus Balances</h3>
      <h1 className="text-2xl fond-bold">${total}</h1>
      
    </div>
  )
}
