import { render, screen } from '@testing-library/react'
import Welcome from '../Components/Welcome'

describe('Welcome component', () => {
    test('dovrebbe renderizzare correttamente il titolo e il testo', () => {
        render(<Welcome />)

        expect(
            screen.getByText(/benvenuto in epibooks/i)
        ).toBeInTheDocument()


        expect(
            screen.getByText(/la tua libreria digitale/i)
        ).toBeInTheDocument()


        expect(
            screen.getByText(/non dimenticare di lasciare un commento/i)
        ).toBeInTheDocument()
    })
})