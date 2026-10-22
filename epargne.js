
const prix = 50000;
let epargne = 4000;
let semaines = 1;
let totalEpargne = 0;

while (epargne < prix) {
    console.log(semaines);
    epargne += 4000;
    semaines++ ;
}   
console.log(`Il faudra ${semaines} semaines pour atteindre le prix de ${prix} avec une épargne de ${epargne}.`);

