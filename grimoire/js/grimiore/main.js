// Put your code here

const spells = [
    {
        name: "Turn enemy into a newt",
        IsEvil: true,
        EnergyRequired: 5.1
    },
    {
        name: "Conjure some gold for a local charity",
        IsEvil: false,
        EnergyRequired: 2.99
    },
    {
        name: "Give a deaf person the ability to heal",
        isEvil: false,
        EnergyRequired: 12.2
    },
    {
        name: "Make yourself emperor of the universe",
        IsEvil: true,
        EnergyRequired: 100.0
    },
    {
        name: "Convince your relatives your political views are correct",
        IsEvil: false,
        EnergyRequired: 2921.5
    }
];

console.log("Do you believe in magic?");
console.log("------------------------");

const spellBook = () => {
    let goodBook = spells.filter(spell => !spell.IsEvil)
    console.log("Good Book");
    goodBook.forEach(spell => console.log(`  ${spell.name}`));;
    console.log("");
    let evilBook = spells.filter(spell => spell.IsEvil);
    console.log("Evil Book");
    evilBook.forEach(spell => console.log(`  ${spell.name}`));
};

spellBook();