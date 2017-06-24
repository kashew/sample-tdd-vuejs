import component from './Hello'

describe('Component: Hello', () => {
  it('has a created hook', () => {
    expect(component.data).to.be.a('function')
  })
})
