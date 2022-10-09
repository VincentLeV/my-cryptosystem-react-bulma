import { useState, useEffect, useCallback } from "react";
import { base64Encode, getRandNum } from "../helpers";
import Board from "../constants/Board";

const useEncrypt = () => {
  const [ key, setKey ] = useState("")
  const [ plainText, setPlainText ] = useState("")
  const [ cipherText, setCipherText ] = useState("")
  const [ shiftedBoard, setShiftedBoard ] = useState([])
  const [ shiftValue, setShiftValue ] = useState()

  const onPlainTextChange = (value) => setPlainText(value)
  
  const onKeyChange = (value) => setKey(value)

  const onBoardChange = (value) => setShiftedBoard(value)

  const onShiftValueChange = (value) => setShiftValue(value)

  const generateKey = () => {
    if (!plainText) return
  
    // Get the number of positions that the Board should shift to the right
    const shiftValue = getRandNum()
  
    const shiftedBoard = [...Board].map((_, i, a) => a[(i + shiftValue) % a.length])
  
    // Find all indexes of plaintext characters
    const plainTextIndexes = []
    plainText
      .trim()
      .split("")
      .forEach(c => plainTextIndexes.push(shiftedBoard.findIndex((item) => item === c)))
  
    // Generate random numbers accordingly
    const randNums = []
    for (let i = 0; i < plainTextIndexes.length; i++) {
      const num = Math.floor(Math.random() * 68)
      randNums.push(num)
    }
  
    // Insert random number after every plaintext index
    const key = plainTextIndexes.flatMap((num, i) => (i + 1) % 1 === 0 ? [num, randNums[i]] : num)

    onKeyChange(key)
    onBoardChange(shiftedBoard)
    onShiftValueChange(shiftValue)
  
    // return { key, shiftedBoard, shiftValue }
  }

  const createNumPairs = useCallback(() => {
    const arr = []

    key.forEach((_, i) => {
      if (i % 2 === 0) {
        arr.push({ a: key[i], b: key[i + 1] })
      }
    })

    return arr
  }, [key])

  const encrypt = useCallback(() => {
    const valuePairs = createNumPairs()

    let res = plainText
    valuePairs.forEach(el => {
      res = res.replace(shiftedBoard[el.a], shiftedBoard[el.b]) 
    })

    return base64Encode(`${res}/${shiftValue}/`)
  }, [createNumPairs, plainText, shiftValue, shiftedBoard])

  useEffect(() => {
    if (key) {
      const result = encrypt()
      setCipherText(result)
    }
  }, [key, encrypt])

  return { 
    plainText,
    onPlainTextChange,
    key,
    onKeyChange, 
    generateKey,
    cipherText, 
    shiftedBoard,
    setShiftedBoard, 
    shiftValue,
    setShiftValue 
  }
}

export default useEncrypt;