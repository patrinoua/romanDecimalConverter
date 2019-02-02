
$('.decimalToRoman').on('input',()=>{
  if(!/^\d*$/.test($('input').val())){
    $('#output')[0].innerText = ''
    $('#error')[0].innerText = 'Please enter a number'
  }else{
    if($('input').val().length > 4){
      $('#output')[0].innerText = ''
      $('#error')[0].innerText = 'Number too long'
    }else{
      $('#error')[0].innerText = ''
      $('#output')[0].innerText = decimalToRoman($('.decimalToRoman').val())
    }
  }
})

$('.romanToDecimal').on('input',()=>{
  let lastInputedChar = $('.romanToDecimal').val().slice($('.romanToDecimal').val().length-1,$('.romanToDecimal').val().length)
  if(['I','V','X','L','C','D','M'].includes(lastInputedChar.toUpperCase())){
    $('#errorRoman')[0].innerText = ''
    $('#outputRoman')[0].innerText = romanToDecimal($('.romanToDecimal').val().toUpperCase())
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
