import { screen, render } from '@testing-library/react'
import { ThemeProvider } from '@emotion/react'
import { travelportTheme } from '../styles/index'
import App from '../components/App/App'

test('renders the app', () => {
  render(
    <ThemeProvider theme={travelportTheme}>
      <App />
    </ThemeProvider>
  )
  const linkElement = screen.getByText(/Characters/i)
  expect(linkElement).toBeInTheDocument()
})
