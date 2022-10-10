const upperCaseLetters = [...Array(26)].map((_, i) => `${String.fromCharCode(i + "A".charCodeAt())}`)
const lowerCaseLetters = [...Array(26)].map((_, i) => `${String.fromCharCode(i + "a".charCodeAt())}`)
const symbols = [" ", ",", ".", "-", ":", "'", "?"]
const numbers = Array.from(Array(10).keys()).map(n => String(n))

const Board = [ ...lowerCaseLetters, ...upperCaseLetters, ...numbers, ...symbols ]

export default Board