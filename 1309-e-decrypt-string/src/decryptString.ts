
export const decryptString = (str: string): string => {

  let output = [];  

  for (let i=0; i<str.length; i++){ 
    switch (str[i+2]){
      case '#':
          output.push(numberToChar(Number(str[i]+str[i+1])))
          i += 2;
          break
      default:
        output.push(numberToChar(Number(str[i])))
    }
  }
  return output.join('')
}

export const numberToChar = (num: number): string =>  {
  const baseCode = 'a'.charCodeAt(0) - 1;

  return String.fromCharCode(num+baseCode)
}


// String.fromCharCode()