const classVulcan = document.querySelectorAll('.vulcan');
classVulcan.forEach(function (item) {
    item.style.border = "3px solid orange";
    item.style.borderRadius = "5px";
});
console.log(classVulcan);


const classCaptains = document.querySelector('.captains');
classCaptains.style.border = "1px solid slategrey";

const para = classCaptains.querySelectorAll('p');
para.forEach(function (item) {
    item.style.backgroundColor = "palegoldenrod";
});
console.log(para);

//Use a document method to select the element with the class klingons using a child (combinator) selector (i.e. you should select this element as the child of another element). Store the element in a variable.

//Give the element a background color of skyblue.

const classKlingons = document.querySelector('.klingons');
console.log(classKlingons);
classKlingons.style.backgroundColor = "skyblue";

//task 4



const idJaneway = document.getElementById('janeway');
idJaneway.style.fontFamily = "Arial"; 
idJaneway.style.fontSize = "24px";   //150% of 16px ie 1.5 * 16px = 24px
idJaneway.style.border = "2px dotted firebrick";
idJaneway.style.backgroundColor = "white";
console.log(idJaneway);

//task5

const classSpock = document.querySelector('.spock');
console.log(classSpock);

const ancestorNearest = classSpock.closest('div');
console.log(ancestorNearest);

ancestorNearest.style.border = "5px solid fuchsia";

//task 6
const classOthers = document.querySelector('.others');
console.log(classOthers);

const descendantOthers = classOthers.querySelectorAll('p');
console.log(descendantOthers);
descendantOthers.forEach(function (item) {
    item.matches('.seven') ? item.style.border = "2px dashed tomato" : item.style.color= "darkgreen" , item.style.fontStyle = "italic";
});


//task 7

const newPara = document.createElement('p');
newPara.classList.add('other','borgqueen');
console.log(newPara);
newPara.innerText = "Borg Queen";
classOthers.append(newPara);

//task 8
newPara.classList.remove('borgqueen');
newPara.style.color = "darkred";
newPara.style.fontWeight = "bold";
newPara.style.fontSize = "20px";
newPara.style.fontFamily = "Arial";
newPara.style.border = "2px solid darkred";



const classSeven = classOthers.querySelector('.seven');
console.log(classSeven);
classOthers.removeChild(classSeven);




