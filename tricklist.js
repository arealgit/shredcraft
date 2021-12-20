const allEs = [
"Ollie", 
"Nollie",
"Switch Ollie",
"Fakie Ollie"
];

const oneeighties = [
"Regular Frontside 180",
"Regular Backside 180",
"Nollie Frontside 180",
"Nollie Backside 180"
];

const swoneeighties = [
"Switch Frontside 180",
"Switch Backside 180",
"Half-Cabellario",
"Fakie Backside 180"
];


const shuvits = [
"Regular Frontside Shuvit",
"Regular Backside Shuvit",
"Nollie Frontside Shuvit",
"Nollie Backside Shuvit"
];

const swshuvits = [
"Switch Frontside Shuvit",
"Switch Backside Shuvit",
"Fakie Frontside Shuvit",
"Fakie Backside Shuvit"
];

const kickflips = [
"Regular Kickflip",
"Nollie Kickflip",
"Switch Kickflip",
"Fakie Kickflip"
];

const heelflips = [
"Regular Heelflip",
"Nollie Heelflip",
"Switch Heelflip",
"Fakie Heelflip"
];

document.getElementById("allEs").innerHTML = allEs;
document.getElementById("oneeighties").innerHTML = oneeighties + "," + swoneeighties;
document.getElementById("shuvits").innerHTML = shuvits + "," + swshuvits;
document.getElementById("kickflips").innerHTML = kickflips;
document.getElementById("heelflips").innerHTML = heelflips;
