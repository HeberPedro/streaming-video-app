import { render } from '@testing-library/react'
import Home from 'src/presentation/pages'

describe('Home Page', () => {
  it('should render the Home page', () => {
    render(<Home />)
  })
})
