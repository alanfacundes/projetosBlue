console.log(`...Jogo do Detetive...\n
Responda "s" para SIM\n
e qualquer outra letra ou "enter" para não!\n`)

let telefone=prompt('Telefonou para a vitima?');
let local=prompt('Esteve no local do crime?');
let proximo=prompt('Mora perto da vitima?');
let devia=prompt('Devia para a vitima?');
let trabalho=prompt('Ja trabalhou com a vitima?');

let res1=0
let res2=0
let res3=0
let res4=0
let res5=0

if (telefone === 's') {
  (++res1)
  }

  if (local === 's') {
  (++res2)
  } 

if (proximo === 's') {
  (++res3)
  }

if (devia === 's') {
  (++res4)
  }

if (trabalho === 's') {
  (++res5)
} 

let resultado=(res1+res2+res3+res4+res5);

if (resultado<=1) {
  console.log('Você é inocente!')
} else if (resultado==2) {
  console.log('Você é suspeito!')
} else if (resultado<=4){
  console.log ('Você é cúmplice!')
} else {console.log('Você é o assassino!!')}