import { useState } from "react";
import { useGlobalState } from "../context/GlobalState";

export default function TransactionForm() {
  const { addTransaction } = useGlobalState();
  const [descripcion, setDescripcion] = useState("");
  const [amount, setAmount] = useState(0);

  const onSubmit = (e) => {
    e.preventDefault();
    addTransaction({
      id: window.crypto.randomUUID(),
      description: descripcion,
      amount: +amount 
    });
    setDescripcion("");
    setAmount(0);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Ingresa una Descripción"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          className="bg-zinc-600 text-white px-3 py-2 rounded-1g block mb-2 w-full"
        />

        <input
          type="number"
          step="0.01"
          placeholder="00.00"
          value={amount === 0 ? '' : amount.toFixed(0)} // Formatear el valor de la cantidad
          onChange={(e) => setAmount(parseFloat(e.target.value))}
          className="bg-zinc-600 text-white px-3 py-2 rounded-1g block mb-2 w-full"
        />
        <button className="bg-indigo-700 text-white px-3 py-2 rounded-1g block mb-2 w-full">Añadir Transacción</button>
      </form>
    </div>
  );
}
