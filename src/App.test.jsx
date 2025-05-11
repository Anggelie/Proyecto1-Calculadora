import { render, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from './App'

describe('Calculadora', () => {
  it('muestra 7 cuando se presiona el botón 7', () => {
    const { getByText } = render(<App />)
    fireEvent.click(getByText('7'))
    expect(getByText('7')).toBeDefined()
  })

  it('muestra resultado 10 cuando se presiona 7 + 3 =', () => {
    const { getByText } = render(<App />)
    fireEvent.click(getByText('7'))
    fireEvent.click(getByText('+'))
    fireEvent.click(getByText('3'))
    fireEvent.click(getByText('='))
    expect(getByText('10')).toBeDefined()
  })
})
