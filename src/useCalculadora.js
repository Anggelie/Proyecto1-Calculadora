import { useState } from 'react'

export default function useCalculadora() {
  const [display, setDisplay] = useState('0')
  const [operando, setOperando] = useState(null)
  const [operacion, setOperacion] = useState(null)
  const [limpiar, setLimpiar] = useState(false)

  const MAX_DIGITOS = 9

  const actualizarDisplay = (valor) => {
    if (limpiar) {
      if (valor === '.') {
        setDisplay('0.')
      } else {
        setDisplay(valor)
      }
      setLimpiar(false)
      return
    }

    if (display.length >= MAX_DIGITOS) return
    if (valor === '.' && display.includes('.')) return

    if (display === '0') {
      if (valor === '.') {
        setDisplay('0.')
      } else {
        setDisplay(valor)
      }
    } else {
      setDisplay(display + valor)
    }
  }

  const ingresarNumero = (num) => {
    if (display === 'ERROR') return
    actualizarDisplay(num)
  }

  const realizarOperacion = (op) => {
    if (display === 'ERROR') return
    if (operando !== null && operacion) {
      calcularResultado()
    } else {
      setOperando(parseFloat(display))
    }
    setOperacion(op)
    setLimpiar(true)
  }

  const calcularResultado = () => {
    if (operacion === '%') {
      const resultado = parseFloat(display) / 100
      setDisplay(resultado.toString().slice(0, MAX_DIGITOS))
      setOperacion(null)
      setOperando(null)
      setLimpiar(true)
      return
    }

    if (operando === null || operacion === null) return
    const actual = parseFloat(display)
    let resultado = 0

    switch (operacion) {
      case '+':
        resultado = operando + actual
        break
      case '-':
        resultado = operando - actual
        break
      case '*':
        resultado = operando * actual
        break
      case '/':
        resultado = actual !== 0 ? operando / actual : 'ERROR'
        break
      case '%':
        resultado = operando % actual
        break
      default:
        return
    }

    if (
      resultado === 'ERROR' ||
      resultado < 0 ||
      resultado > 999999999 ||
      resultado.toString().length > MAX_DIGITOS
    ) {
      setDisplay('ERROR')
    } else {
      const texto = resultado.toString().slice(0, MAX_DIGITOS)
      setDisplay(texto)
      setOperando(resultado)
    }

    setOperacion(null)
    setLimpiar(true)
  }

  const cambiarSigno = () => {
    if (display === 'ERROR') return
    if (display === '0') return
    if (display.startsWith('-')) {
      setDisplay(display.slice(1))
    } else {
      if (display.length < MAX_DIGITOS) {
        setDisplay('-' + display)
      }
    }
  }

  const limpiarTodo = () => {
    setDisplay('0')
    setOperando(null)
    setOperacion(null)
    setLimpiar(false)
  }

  return {
    display,
    ingresarNumero,
    realizarOperacion,
    calcularResultado,
    cambiarSigno,
    limpiarTodo
  }
}
