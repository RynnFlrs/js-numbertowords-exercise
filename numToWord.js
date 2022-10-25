const onesValue = (num) => {
  switch (num) {
    case '0' : { return 'Zero' }
    case '1' : { return 'One' }
    case '2' : { return 'Two' }
    case '3' : { return 'Three' }
    case '4' : { return 'Four' }
    case '5' : { return 'Five' }
    case '6' : { return 'Six' }
    case '7' : { return 'Seven' }
    case '8' : { return 'Eight' }
    case '9' : { return 'Nine' }
  }
}

const tensValue = (digit) => {
  switch (digit) {
    case '1': { return 'Ten' }
    case '2': { return 'Twenty' }
    case '3': { return 'Thirty' }
    case '4': { return 'Forty' }
    case '5': { return 'Fifty' }
    case '6': { return 'Sixty' }
    case '7': { return 'Seventy' }
    case '8': { return 'Eighty' }
    case '9': { return 'Ninety' }
  }
}
  
const teensValue = (digit) => {
  switch (digit) {
    case '1': { return 'Eleven' }
    case '2': { return 'Twelve' }
    case '3': { return 'Thirteen' }
    case '4': { return 'Fourteen' }
    case '5': { return 'Fifteen' }
    case '6': { return 'Sixteen' }
    case '7': { return 'Seventeen' }
    case '8': { return 'Eighteen' }
    case '9': { return 'Nineteen' }
  }
}

const validator = (num) => {
  if (num < 0 || isNaN(num) || num > '999999') {
      console.log(`${num} is an Invalid Input.`)
      process.exit(1)
  } else {
      return num
  }
}

const removeZeros = (numArr) => {
  let zeroCount = 0
  for (let i = 0; i < numArr.length; i += 1) {
      if (numArr[i] === '0') {
          zeroCount += 1
      } else {
        break
      }
  }

  return numArr.slice(zeroCount)
}

const toTens = (numArr) => {
  const convertedWord = []
  if (numArr[0] !== '0' && numArr[1] === '0') {
    convertedWord.push(tensValue(numArr[0]))
  } else if (numArr[0] === '1' && numArr[1] !== '0') {
    convertedWord.push(teensValue(numArr[1]))
  } else if (numArr[0] !== '0' && numArr[1] !== '0') {
    convertedWord.push(`${tensValue(numArr[0])} ${onesValue(numArr[1])}`)
  }
  return convertedWord
}

const toHundreds = (numArr) => {
  const convertedWord = []
  if (numArr[0] !== '0' && numArr[1] === '0' && numArr[2] === '0') {
    convertedWord.push(`${onesValue(numArr[0])} Hundred`)
  } else if (numArr[0] !== '0' && numArr[1] === '0' && numArr[2] !== '0') {
    convertedWord.push(`${onesValue(numArr[0])} Hundred ${onesValue(numArr[2])}`)
  } else {
    convertedWord.push(`${onesValue(numArr[0])} Hundred ${toTens(numArr.slice(1))}`)
  }
  return convertedWord
}

const converter = (numArr) => {
  const convertedWord = []
  if (numArr.length === 1) {
    convertedWord.push(onesValue(numArr[0]))
  } else if (numArr.length === 2) {
    convertedWord.push(toTens(numArr))
  } else if (numArr.length === 3) {
    convertedWord.push(toHundreds(numArr))
  }
  return convertedWord
}

const numToWord = (convertThis) => {
  const arrNum = removeZeros(validator(convertThis).toString().split(''))
  const convertedWord = []

  if (arrNum.length <= 3) {
    convertedWord.push(converter(arrNum)) // converter(arrNum)
  } else {
    const diff = 6 - arrNum.length
    if (diff > 0) {
      for (let i = 0; i < diff; i += 1) {
        arrNum.unshift('0')
      }
    }
    convertedWord.push(`${converter(removeZeros(arrNum.slice(0, 3)))} Thousand`)
    convertedWord.push(converter(removeZeros(arrNum.slice(3))))
  }
  return convertedWord.join(' ')
}

const inputValueHere = '999'
console.log(`${inputValueHere} => ${numToWord(inputValueHere)}`)
