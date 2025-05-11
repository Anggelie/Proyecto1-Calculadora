import Button from '../Button'

export default {
  title: 'Calculadora/Boton',
  component: Button
}

export const Numero = {
  args: {
    valor: '7',
    alHacerClick: () => alert('Presionaste 7')
  }
}

export const Operador = {
  args: {
    valor: '+',
    alHacerClick: () => alert('Presionaste +')
  }
}
