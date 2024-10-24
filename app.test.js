const calculateKomisi = require('./app.js')

describe('Job 7', () => {
  it('Jika input 100.000 maka output 0', () => {
    const result = calculateKomisi(100000)
    expect(result).toBe(0)
  })

  it('Jika input 1.000.000 maka output 0', () => {
    const result = calculateKomisi(1000000)
    expect(result).toBe(100000)
  })

  it('Jika input 2.000.000 maka output 0', () => {
    const result = calculateKomisi(2000000)
    expect(result).toBe(100000)
  })

  it('Jika input 5.000.000 maka output 250000', () => {
    const result = calculateKomisi(5000000)
    expect(result).toBe(250000)
  })

  it('Jika input 5.500.000 maka output 275000', () => {
    const result = calculateKomisi(5500000)
    expect(result).toBe(275000)
  })
})