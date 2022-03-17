var classlist = ['one', 'two', 'three', 'four', 'five'];
var randomnumber = Math.floor(Math.random() * classlist.length);
console.log(randomnumber);
document.body.classList.remove(...classlist);

document.body.classList.add(classlist[randomnumber]);