import { useState, useCallback } from "react"
import Board from "../constants/Board"
import { base64Decode } from "../helpers"

const useDecrypt = () => {
  const [ cipherText, setCipherText ] = useState("")
  const [ key, setKey ] = useState("")
  const [ plainText, setPlainText ] = useState("")

  const onPlainTextChange = (value) => setPlainText(value)

  const onCipherTextChange = (value) => setCipherText(value)

  const onKeyChange = (value) => setKey(value)

  const createNumPairs = useCallback(() => {
    const arr = []

    if (!key.includes(",")) return

    key.split(",").forEach((_, i) => {
      if (i % 2 === 0) {
        arr.push({ a: Number(key.split(",")[i]), b: Number(key.split(",")[i + 1]) })
      }
    })

    return arr
  }, [key])

  const decrypt = useCallback(() => {
    const valuePairs = createNumPairs()

    if (!valuePairs || !cipherText) return

    const decodedCipherText = base64Decode(cipherText.trim())

    const [shiftPattern] = decodedCipherText.match(/(\/\d\/)+/g)

    if (!shiftPattern) return 

    const shiftValue = shiftPattern.substring(1, shiftPattern.length - 1)
    const shiftedBoard = [...Board].map((_, i, a) => a[(i + Number(shiftValue)) % a.length])

    let res = ""
    valuePairs.forEach(el => {
      res += shiftedBoard[el.a]
    })

    return res
  }, [createNumPairs, cipherText])

  const startDecrypt = () => {
    if (key) {
      const result = decrypt()
      onPlainTextChange(result)
    }
  }

  return { 
    plainText,
    key, 
    cipherText,
    onKeyChange, 
    onCipherTextChange, 
    startDecrypt 
  }
}

export default useDecrypt