// Put your code here

const names = ["Nashville", "Hong Kong", "The back yard", "Earth",
    "London", "The mall", "Ryman Auditorium", "The Great Wall of China"];

console.log("All Place Names");

for (name of names) {
    console.log(name);
}

const thePlaceNames = names.filter(name => name.startsWith("The"));

console.log("'The' Place Names");
for (placeName of thePlaceNames) {
    console.log(placeName);
}