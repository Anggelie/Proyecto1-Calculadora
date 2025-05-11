import React from 'react'
import useCalculadora from './useCalculadora'
import Display from './Display'
import Button from './Button'

export default function App() {
  const {
    display,
    ingresarNumero,
    realizarOperacion,
    calcularResultado,
    cambiarSigno,
    limpiarTodo
  } = useCalculadora()

  const botones = [
    ['C', '+/-', '%', '/'],
    ['7', '8', '9', '*'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '=']
  ]

  const manejarClick = (valor) => {
    if (!isNaN(valor) || valor === '.') ingresarNumero(valor)
    else if (valor === 'C') limpiarTodo()
    else if (valor === '+/-') cambiarSigno()
    else if (valor === '=') calcularResultado()
    else realizarOperacion(valor)
  }

  return (
    <div className='calculadora'>
      <Display valor={display} />
      <div className='teclado'>
        {botones.flat().map((valor, i) => (
          <Button key={i} valor={valor} alHacerClick={() => manejarClick(valor)} />
        ))}
      </div>
    </div>
  )
}
