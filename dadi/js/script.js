const min = 1;
const max = 6;

const random_person = Math.floor(Math.random() * (max - min + 1) + min);
console.log(`il giocatore ha fatto uscire il numero: ${random_person}`)
const random_pc = Math.floor(Math.random() * (max - min + 1) + min);
console.log(`il computer ha fatto uscire il numero: ${random_pc}`)

if(random_person > random_pc){
    console.log(`${random_person} è maggiore di ${random_pc} : il giocatore vince`)
}
else if(random_person < random_pc){
    console.log(`${random_pc} è maggiore di ${random_person} : il computer vince`)
}
else{
    console.log(`${random_pc} è ${random_person} sono uguali: è un pareggio`)
}