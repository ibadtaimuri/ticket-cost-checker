// Ticket Checker System (Infant, Toddler, Young Adult, Adult, Old Age) Submit on LinkedIn
var age = -8;
if (age > 0 && age <= 2) {
    console.log("Infant - No ticket for your child");
}
else if (age > 2 && age <= 5) {
    console.log("Toddler - Your Ticket cost is PKR 20");
}
else if (age > 5 && age <= 18) {
    console.log("Young Adult - Your Ticket cost is PKR 50");
}
else if (age > 18 && age <= 65) {
    console.log("Adult - Your Ticket cost is PKR 200");
}
else if (age > 65) {
    console.log("Senior Citizen - You Ticket cost is PKR 100");
}
else {
    console.log("Invalid Age");
}
