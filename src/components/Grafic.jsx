import React from 'react'
import { VictoryPie, VictoryLabel } from 'victory'
import { useGlobalState } from '../context/GlobalState'

export default function Grafic() {

 const {transactions} =  useGlobalState();

 const totalIngresos = transactions
 .filter((transaction) => transaction.amount > 0)
 .reduce((acc, transaction) => (acc += transaction.amount), 0 );

 const totalGastos = transactions
 .filter((transaction) => transaction.amount < 0)
 .reduce((acc, transaction) => (acc += transaction.amount), 0 ) * -1 ;

 const totalIngresosPorcentaje = Math.round((totalIngresos / (totalIngresos + totalGastos)) * 100);
 
 const totalGastosPorcentaje = 100 - totalIngresosPorcentaje;


    return (
        <VictoryPie
            colorScale={["#e74c3c","#2ecc71"] }
            data={[
                { x: "Gastos", y: totalGastosPorcentaje },
                { x: "Ingresos", y: totalIngresosPorcentaje }
            ]}
            animate={{
                duration: 2000
              }}
            labelComponent={<VictoryLabel
                angle={45}
                style={{
                    fill: "white",
                }}
            />}
        />
    )
}
