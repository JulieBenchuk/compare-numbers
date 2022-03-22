const staffCompany = [
    {name: "Aleksander", age: 23},
    {name: "Sergey", age: 45},
    {name: "Svetlana", age: 29},
    {name: "Igor", age: 33},
    {name: "Diana", age: 37}
]
function compareAge (pers1, pers2) {
    if (pers1.age>pers2.age) {
        return 1;
    } else if (pers1.age===pers2.age) {
        return 0;
    } else {
        return -1;
    }
}

function printOrder(staffCompany) {
    for (var i = 0; i < staffCompany.length; i++) {
        console.log("Name: " + staffCompany[i].name + ", " + staffCompany[i].age + " y.o.");
    }
}
staffCompany.sort(compareAge);
printOrder(staffCompany);