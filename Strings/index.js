//practice strings here
const name = "devX~shub";
console.log(name);
console.log(`name is ${name}`);
const newName = new String("DEVx~SHUB")
console.log(newName);

console.log(name[0]);

console.log(name.__proto__);


console.log(newName.length)

console.log(name.toUpperCase());

console.log(name.charAt('3'));
console.log(name.indexOf('s'));

const newString = name.substring(0,4) // 0 to 3
console.log(newString);
const newString2 = name.slice(-6,5) // 3 to 3 beacuse if we start from last index it will be as -1,-2,-3,-4 ans so on as example we see next output
console.log(newString2);
console.log(name.slice(-1));

//Removing spaces
const demo = "   shub    "
console.log(demo);//with all spaces
console.log(demo.trim());//removed all spaces from front and back
console.log(demo.trimEnd());//remove spaces form back
console.log(demo.trimStart());//remove space from front
 
//checking if something is present and replacing with some value
console.log(name.includes('~'))
console.log(name.replace('~','-'))//it removes the symbol with new one
console.log(name);//as we can see the previous action does not effect on the original one cause it is stored in stack memory
const nname = name.replace('~','-')
console.log(nname.includes('~'))

console.log(nname.split('-'));//splitting based on the given string
