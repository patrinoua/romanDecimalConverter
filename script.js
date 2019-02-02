
$('.decimalToRoman').on('input', () => {

  let inputValue = $('.decimalToRoman').val()
  console.log(inputValue);
  //if input value is not a number
  if(!/^\d*$/.test(inputValue)){
    $('#outputDecimal')[0].innerText = ''
    $('#errorDecimal')[0].innerText = 'Please enter a number'
  }else{
    if(inputValue > 12000){
      $('#errorDecimal')[0].innerText = 'Number too long'
      $('#outputDecimal')[0].innerText = ''
    }else{
      $('#errorDecimal')[0].innerText = ''
      $('#outputDecimal')[0].innerText = decimalToRoman(inputValue)
    }
  }
})

$('.romanToDecimal').on('input', () => {

  let inputValue = $('.romanToDecimal').val()
  let lastInputedChar = inputValue.slice(inputValue.length-1, inputValue.length)

  if(['I','V','X','L','C','D','M'].includes(lastInputedChar.toUpperCase())){
    $('#errorRoman')[0].innerText = ''
    $('#outputRoman')[0].innerText = romanToDecimal(inputValue.toUpperCase())
  }else{
    if($('.romanToDecimal').val()==''){
      $('#outputRoman')[0].innerText = ''
      $('#errorRoman')[0].innerText = ''
    }else{
      $('#outputRoman')[0].innerText = ''
      $('#errorRoman')[0].innerText = 'Please enter a valid roman number'
    }
  }
})
