function romanToDecimal(roman){
  const map={
       I: 1,
       V: 5,
       X: 10,
       L: 50,
       C: 100,
       D: 500,
       M: 1000
   }
   var c=0;
   for(let i = 0; i<roman.length; i++){
       if(
           map[roman[i+1]] && map[roman[i]] < map[roman[i+1]] )
       {
           c+=map[roman[i+1]]-map[roman[i]]
           i++
       }else{
           c+=map[roman[i]]
       }
   }
   return c;
}
