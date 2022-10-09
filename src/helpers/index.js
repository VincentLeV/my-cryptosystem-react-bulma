import { Buffer } from "buffer"

export const base64Encode = (str) => Buffer.from(str).toString("base64")

export const base64Decode = (cipherText) => Buffer.from(cipherText, "base64").toString("utf-8")

export const getRandNum = () => Math.floor(Math.random() * 9) + 1