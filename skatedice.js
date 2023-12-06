const stanceOption = ['regular', 'nollie', 'switch', 'fakie'];  
const stance = myArray[Math.floor(Math.random() * stanceOption.length)];  

const trickOption = ['kickflip', 'heelflip', 'fs shove-it', 'bs shove-it'];
const trick = trickOption[Math.floor(Math.random() * trickOption.length)]; 
  
console.log(stance + ' ' + trick);  
