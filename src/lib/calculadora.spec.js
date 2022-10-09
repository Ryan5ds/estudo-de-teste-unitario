const {sum} = require('./calculadora')

it('', () => {
    expect(sum(2,2)).toBe(4)
})

it('', () => {
    expect(sum('2','2')).toBe(4)
})

it('', () => {
    expect(() => {
        sum(2 , '')
    }).toThrowError
})