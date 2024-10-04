let numbers = new Array("1", "2", "3", "4", "5");
console.log(numbers[0])
console.log(numbers[2])
console.log(numbers[4])

console.log(numbers.length);


let fruits = ["pear", "grapefruit", "dragonfruit"];
fruits.push("pear");
console.log(fruits);



let grades = ["40", "78", "89", "99", "30"]
let passing = grades.filter(grade => grade >= 50)
console.log(passing);

grades.sort((a,b)=> a - b);
console.log(grades);



let array = ['morning', 'day', 'night']
array.forEach((value, index) => {
    console.log(`${index}: ${value}`);
});

let [firstarray, secondarray] = array;
console.log(firstarray);
console.log(secondarray)
