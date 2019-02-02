function decimalToRoman(decimal){
  let remainder = decimal;
  const correspondance = {
      1: 'I',
      4: 'IV',
      5: 'V',
      9: 'IX',
      10: 'X',
      40: 'XL',
      50: 'L',
      90: 'XC',
      100: 'C',
      400: 'CD',
      500: 'D',
      900: 'CM',
      1000: 'M',
  }
  let creatingRomanNumber = []
  while( remainder > 0 ){
    let smallerNumbers = []

    //In order to find the highest decimal value less or equal to the remainder
    //first find all the keys that are smaller than the remainder and add them in "smallerNumbers" array
    for( var key in correspondance ){
      if( Number(key) <= remainder ){
        smallerNumbers.push(Number(key))
      }else{
        break;
      }
    }
    //select the maximum of them. The maximum of a minimum set is called infimum:
    let infimum = Math.max(...smallerNumbers)
    remainder = remainder - infimum;
    creatingRomanNumber.push(correspondance[infimum])
  }
  const myRomanNumber = creatingRomanNumber.join('')
  return myRomanNumber
}
