/*
Given a string, your task is to count how many palindromic substrings in this string.

The substrings with different start indexes or end indexes are counted as different substrings even they consist of same characters.
*/

export const countSubstrings = (str: string): number => {
  // find even length sub strings
  const numEvenPalindromes: number = countEvenPalindromes(str);
  const numOddPalindromes: number = countOddPalindromes(str);
  
  //find odd length substrings
  return numEvenPalindromes + numOddPalindromes
}

export const countEvenPalindromes = (str: string) : number => {
  let count = 0;
  
  for(let i=0; i<str.length; i++){
    let pLead = i+1;
    let pTail = i;

    while (str[pTail] === str[pLead] && pLead < str.length && pTail > -1){
      count +=1;
      pTail -= 1;
      pLead += 1;
    }
  }

  return count
  
}

export const countOddPalindromes = (str: string) : number => {
  let count = 0;
  
  for(let i=0; i<str.length; i++){
    let pLead = i;
    let pTail = i;

    while (str[pTail] === str[pLead] && pLead < str.length && pTail > -1){
      count +=1;
      pTail -= 1;
      pLead += 1;
    }
  }

  return count
}