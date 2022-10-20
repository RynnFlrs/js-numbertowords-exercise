const onesValue = (digit) => {
  switch (digit) {
    case '0':
      return 'Zero'
    case '1':
      return 'One'
    case '2':
      return 'Two'
    case '3':
      return 'Three'
    case '4':
      return 'Four'
    case '5':
      return 'Five'
    case '6':
      return 'Six'
    case '7':
      return 'Seven'
    case '8':
      return 'Eight'
    case '9':
      return 'Nine'
    default:
      return 'invalid'
  }
}

const tensValue = (digit) => {
  switch (digit) {
    case '1':
      return 'Ten'
    case '2':
      return 'Twenty'
    case '3':
      return 'Thirty'
    case '4':
      return 'Forty'
    case '5':
      return 'Fifty'
    case '6':
      return 'Sixty'
    case '7':
      return 'Seventy'
    case '8':
      return 'Eighty'
    case '9':
      return 'Ninety'
    default:
      return 'invalid'
  }
}

const teensValue = (digit) => {
  switch (digit) {
    case '1':
      return 'Eleven'
    case '2':
      return 'Twelve'
    case '3':
      return 'Thirteen'
    case '4':
      return 'Fourteen'
    case '5':
      return 'Fifteen'
    case '6':
      return 'Sixteen'
    case '7':
      return 'Seventeen'
    case '8':
      return 'Eighteen'
    case '9':
      return 'Nineteen'
    default:
      return 'invalid'
  }
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
  } else if (numArr[0] !== '0' && numArr[1] !== '0') {
    convertedWord.push(`${onesValue(numArr[0])} Hundred ${toTens(numArr.slice(1))}`)
  }
  return convertedWord
}

const toThousands = (numArr) => {
  const convertedWord = []
  if (numArr[0] !== '0' && numArr[1] === '0' && numArr[2] === '0' && numArr[3] === '0') {
    convertedWord.push(`${onesValue(numArr[0])} Thousand`)
  } else if (numArr[0] !== '0' && numArr[1] !== '0' && numArr[2] === '0' && numArr[3] === '0') {
    convertedWord.push(`${onesValue(numArr[0])} Thousand ${toHundreds(numArr.slice(1))}`)
  } else if (numArr[0] !== '0' && numArr[1] !== '0' && numArr[2] !== '0' && numArr[3] === '0') {
    convertedWord.push(`${onesValue(numArr[0])} Thousand ${toHundreds(numArr.slice(1))}`)
  } else if (numArr[0] !== '0' && numArr[1] === '0' && numArr[2] === '0' && numArr[3] !== '0') {
    convertedWord.push(`${onesValue(numArr[0])} Thousand ${onesValue(String(numArr.slice(3)))}`)
  } else if (numArr[0] !== '0' && numArr[1] === '0' && numArr[2] !== '0' && numArr[3] !== '0') {
    convertedWord.push(`${onesValue(numArr[0])} Thousand ${toTens(numArr.slice(2))}`)
  } else if (numArr[0] !== '0' && numArr[1] !== '0' && numArr[2] !== '0' && numArr[3] !== '0') {
    convertedWord.push(`${onesValue(numArr[0])} Thousand ${toHundreds(numArr.slice())}`)
  }
  return convertedWord
}

const toTenThousands = (numArr) => {
  const convertedWord = []
  if (numArr[0] !== '0' && numArr[1] === '0' && numArr[2] === '0' && numArr[3] === '0' && numArr[4] === '0') {
    convertedWord.push(`${tensValue(numArr[0])} Thousand`)
  } else if (numArr[0] === '1' && numArr[1] !== '0' && numArr[2] === '0' && numArr[3] === '0' && numArr[4] === '0') {
    convertedWord.push(`${teensValue(numArr[1])} Thousand`)
  } else if (numArr[0] === '1' && numArr[1] !== '0' && numArr[2] !== '0' && numArr[3] === '0' && numArr[4] === '0') {
    convertedWord.push(`${teensValue(numArr[1])} Thousand ${toHundreds(numArr.slice(2))}`)
  } else if (numArr[0] === '1' && numArr[1] !== '0' && numArr[2] !== '0' && numArr[3] !== '0' && numArr[4] === '0') {
    convertedWord.push(`${teensValue(numArr[1])} Thousand ${toHundreds(numArr.slice(2))}`)
  } else if (numArr[0] === '1' && numArr[1] !== '0' && numArr[2] === '0' && numArr[3] === '0' && numArr[4] !== '0') {
    convertedWord.push(`${teensValue(numArr[1])} Thousand ${onesValue(numArr[4])}`)
  } else if (numArr[0] !== '0' && numArr[1] !== '0' && numArr[2] === '0' && numArr[3] === '0' && numArr[4] === '0') {
    convertedWord.push(`${tensValue(numArr[0])} ${onesValue(numArr[1])} Thousand`)
  } else if (numArr[0] !== '0' && numArr[1] !== '0' && numArr[2] !== '0' && numArr[3] === '0' && numArr[4] === '0') {
    convertedWord.push(`${tensValue(numArr[0])} Thousand ${toHundreds(numArr.slice(2))}`)
  } else if (numArr[0] !== '0' && numArr[1] !== '0' && numArr[2] !== '0' && numArr[3] !== '0' && numArr[4] === '0') {
    convertedWord.push(`${tensValue(numArr[0])} Thousand ${toHundreds(numArr.slice(2))}`)
  } else if (numArr[0] === '1' && numArr[1] === '0' && numArr[2] === '0' && numArr[3] === '0' && numArr[4] !== '0') {
    convertedWord.push(`${tensValue(numArr[0])} Thousand ${onesValue(String(numArr.slice(4)))}`)
  } else if (numArr[0] === '1' && numArr[1] === '0' && numArr[2] === '0' && numArr[3] !== '0' && numArr[4] === '0') {
    convertedWord.push(`${tensValue(numArr[0])} Thousand ${tensValue(numArr[3])}`)
  } else if (numArr[0] === '1' && numArr[1] === '0' && numArr[2] === '0' && numArr[3] === '1' && numArr[4] !== '0') {
    convertedWord.push(`${tensValue(numArr[0])} Thousand ${teensValue(String(numArr.slice(4)))}`)
  } else if (numArr[0] === '1' && numArr[1] === '0' && numArr[2] === '0' && numArr[3] !== '0' && numArr[4] !== '0') {
    convertedWord.push(`${tensValue(numArr[0])} Thousand ${toTens(numArr.slice(3))}`)
  } else if (numArr[0] === '1' && numArr[1] === '0' && numArr[2] !== '0' && numArr[3] !== '0' && numArr[4] !== '0') {
    convertedWord.push(`${tensValue(numArr[0])} Thousand ${toHundreds(numArr.slice(2))}`)
  } else if (numArr[0] === '1' && numArr[1] !== '0' && numArr[2] !== '0' && numArr[3] !== '0' && numArr[4] !== '0') {
    convertedWord.push(`${teensValue(numArr[1])} Thousand ${toHundreds(numArr.slice(2))}`)
  } else if (numArr[0] !== '0' && numArr[1] !== '0' && numArr[2] !== '0' && numArr[3] !== '0' && numArr[4] !== '0') {
    convertedWord.push(`${tensValue(numArr[0])} ${onesValue(numArr[1])} Thousand ${toHundreds(numArr.slice(2))}`)
  }
  return convertedWord
}

const toHundredThousands = (numArr) => {
  const convertedWord = []
  if (numArr[0] !== '0' && numArr[1] === '0' && numArr[2] === '0' && numArr[3] === '0' && numArr[4] === '0' && numArr[5] === '0') {
    convertedWord.push(`${onesValue(numArr[0])} Hundred Thousand`)
  } else if (numArr[0] !== '0' && numArr[1] === '0' && numArr[2] === '0' && numArr[3] === '0' && numArr[4] === '0' && numArr[5] !== '0') {
    convertedWord.push(`${onesValue(numArr[0])} Hundred Thousand ${onesValue(numArr[5])}`)
  } else if (numArr[0] !== '0' && numArr[1] !== '0' && numArr[2] === '0' && numArr[3] === '0' && numArr[4] === '0' && numArr[5] === '0') {
    convertedWord.push(`${onesValue(numArr[0])} Hundred ${toTenThousands(numArr.slice(1))}`)
  } else if (numArr[0] !== '0' && numArr[1] !== '0' && numArr[2] !== '0' && numArr[3] !== '0' && numArr[4] === '0' && numArr[5] === '0') {
    convertedWord.push(`${onesValue(numArr[0])} Hundred ${toTenThousands(numArr.slice(1))}`)
  } else if (numArr[0] !== '0' && numArr[1] !== '0' && numArr[2] !== '0' && numArr[3] !== '0' && numArr[4] !== '0' && numArr[5] === '0') {
    convertedWord.push(`${onesValue(numArr[0])} Hundred ${toTenThousands(numArr.slice(1))}`)
  } else if (numArr[0] !== '0' && numArr[1] === '1' && numArr[2] !== '0' && numArr[3] === '0' && numArr[4] === '0' && numArr[5] === '0') {
    convertedWord.push(`${onesValue(numArr[0])} Hundred ${toTenThousands(numArr.slice(1))}`)
  } else if (numArr[0] !== '0' && numArr[1] === '0' && numArr[2] === '0' && numArr[3] === '0' && numArr[4] === '1' && numArr[5] !== '0') {
    convertedWord.push(`${onesValue(numArr[0])} Hundred Thousand ${teensValue(numArr[5])}`)
  } else if (numArr[0] !== '0' && numArr[1] === '0' && numArr[2] === '0' && numArr[3] === '0' && numArr[4] !== '0' && numArr[5] === '0') {
    convertedWord.push(`${onesValue(numArr[0])} Hundred Thousand ${tensValue(numArr[4])}`)
  } else if (numArr[0] !== '0' && numArr[1] === '0' && numArr[2] === '0' && numArr[3] !== '0' && numArr[4] === '0' && numArr[5] === '0') {
    convertedWord.push(`${onesValue(numArr[0])} Hundred Thousand ${toHundreds(numArr.slice(3))}`)
  } else if (numArr[0] !== '0' && numArr[1] === '0' && numArr[2] === '0' && numArr[3] === '0' && numArr[4] !== '0' && numArr[5] !== '0') {
    convertedWord.push(`${onesValue(numArr[0])} Hundred Thousand ${toTens(numArr.slice(4))}`)
  } else if (numArr[0] !== '0' && numArr[1] === '0' && numArr[2] === '0' && numArr[3] !== '0' && numArr[4] !== '0' && numArr[5] !== '0') {
    convertedWord.push(`${onesValue(numArr[0])} Hundred Thousand ${toHundreds(numArr.slice(3))}`)
  } else if (numArr[0] !== '0' && numArr[1] === '0' && numArr[2] !== '0' && numArr[3] !== '0' && numArr[4] !== '0' && numArr[5] !== '0') {
    convertedWord.push(`${onesValue(numArr[0])} Hundred ${onesValue(numArr[2])} Thousand ${toHundreds(numArr.slice(3))}`)
  } else if (numArr[0] !== '0' && numArr[1] !== '0' && numArr[2] !== '0' && numArr[3] !== '0' && numArr[4] !== '0' && numArr[5] !== '0') {
    convertedWord.push(`${onesValue(numArr[0])} Hundred ${toTenThousands(numArr.slice(1))}`)
  } else if (numArr[0] !== '0' && numArr[1] !== '0' && numArr[2] === '0' && numArr[3] !== '0' && numArr[4] !== '0' && numArr[5] !== '0') {
    convertedWord.push(`${onesValue(numArr[0])} Hundred ${toTenThousands(numArr.slice(1))}`)
  }
  return convertedWord
}

const numToWord = (digit) => {
  if (Number.isNaN(digit)) {
    console.log(`${digit} is invalid`)
  } else if (Number(digit) > 999999) {
    console.log('Exceeding Value!')
  } else {
    let arrNum = String(digit).split('')
    const convertedWord = []
    let ommmitZero = 0

    for (let i = 0; i < arrNum.length - 1; i += 1) {
      if (arrNum[i] === '0') {
        ommmitZero += 1
      } else {
        break
      }
    }

    arrNum = arrNum.slice(ommmitZero)

    if (arrNum.length === 1) { // ones
      convertedWord.push(onesValue(arrNum[0]))
    }

    if (arrNum.length === 2) {
      convertedWord.push(toTens(arrNum))
    }

    if (arrNum.length === 3) {
      convertedWord.push(toHundreds(arrNum))
    }

    if (arrNum.length === 4) {
      convertedWord.push(toThousands(arrNum))
    }

    if (arrNum.length === 5) {
      convertedWord.push(toTenThousands(arrNum))
    }

    if (arrNum.length === 6) {
      convertedWord.push(toHundredThousands(arrNum))
    }

    return convertedWord.join(' ')
  }
  return false
}

console.log(numToWord(999999))
