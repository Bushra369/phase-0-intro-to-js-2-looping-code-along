// Code your solutions in this file
const name = ["Guadalupe", "Ollie", "Aki"];

function writeCards(array, eventName) {
    const thankYouCard = [];
    for (let i = 0; i < array.length; i++) {
        thankYouCard.push(`Thank you, ${array[i]}, for the wonderful ${eventName} gift!`)
    }
    return thankYouCard;
}
writeCards(["Guadalupe", "Ollie", "Aki"], "birthday");

function countDown(number) {

    while (number >= 0) {
        console.log(number--);
    }
}