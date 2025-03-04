/** Global Looting Variables (adjusted by below levers)**/
let lootLocationModifier = 0
let lootStatModifier = 0
let lootStatModifierBonus = 0

/********************************Location Selector Button Functions*******************/

/*****************************Loot Location Variables*******************/
let opacityModifierHmnElem = 0
let opacityModifierMnstrElem = 0
let opacityModifierChstElem = 0
let opacityModifierFrntrElem = 0
let opacityModifierGrvElem = 0
let opacityModifierFoodElem = 0

const monsterSearchButton = [
  document.getElementById("lctnSelector_Mnstr_a")
  , document.getElementById("lctnSelector_Mnstr_Hover")
]
const humanSearchButton = [
  document.getElementById("lctnSelector_Hmn_a")
  , document.getElementById("lctnSelector_Hmn_Hover")
]
const chestSearchButton = [
  document.getElementById("lctnSelector_Chst_a")
  , document.getElementById("lctnSelector_Chst_Hover")
]
const furnitureSearchButton = [
  document.getElementById("lctnSelector_Frntr_a")
  , document.getElementById("lctnSelector_Frntr_Hover")
]
const graveSearchButton = [
  document.getElementById("lctnSelector_Grv_a")
  , document.getElementById("lctnSelector_Grv_Hover")
]
const pantrySearchButton = [
  document.getElementById("lctnSelector_Food_a")
  , document.getElementById("lctnSelector_Food_Hover")
]

/*************Human Button interations****************/
for(let i=0; i<=1; i++){
humanSearchButton[i].addEventListener("mouseover", ()=>{
  humanSearchButton[1].style.opacity = .8
})};
humanSearchButton[0].addEventListener("mouseleave", ()=>{
  humanSearchButton[1].style.opacity = opacityModifierHmnElem
});
for(let i=0; i<=1; i++){
humanSearchButton[i].addEventListener("click", ()=>{
  humanSearchButton[1].style.opacity = .8, opacityModifierHmnElem = .8
  monsterSearchButton[1].style.opacity = 0, opacityModifierMnstrElem = 0
  chestSearchButton[1].style.opacity = 0, opacityModifierChstElem = 0
  furnitureSearchButton[1].style.opacity = 0, opacityModifierFrntrElem = 0
  graveSearchButton[1].style.opacity = 0, opacityModifierGrvElem = 0
  pantrySearchButton[1].style.opacity = 0, opacityModifierFoodElem = 0
  lootLocationModifier = 1
})};

/*************Monster Button interations****************/
for(let i=0; i<=1; i++){
monsterSearchButton[i].addEventListener("mouseover", ()=>{
  monsterSearchButton[1].style.opacity = .8
})};
monsterSearchButton[0].addEventListener("mouseleave", ()=>{
  monsterSearchButton[1].style.opacity = opacityModifierMnstrElem
});
for(let i=0; i<=1; i++){
monsterSearchButton[1].addEventListener("click", ()=>{
  humanSearchButton[1].style.opacity = 0, opacityModifierHmnElem = 0
  monsterSearchButton[1].style.opacity = .8, opacityModifierMnstrElem = .8
  chestSearchButton[1].style.opacity = 0, opacityModifierChstElem = 0
  furnitureSearchButton[1].style.opacity = 0, opacityModifierFrntrElem = 0
  graveSearchButton[1].style.opacity = 0, opacityModifierGrvElem = 0
  pantrySearchButton[1].style.opacity = 0, opacityModifierFoodElem = 0
  lootLocationModifier = 2
})};

/*************Chest Button interations****************/
for(let i=0; i<=1; i++){
chestSearchButton[i].addEventListener("mouseover", ()=>{
  chestSearchButton[1].style.opacity = .8
})};
chestSearchButton[0].addEventListener("mouseleave", ()=>{
  chestSearchButton[1].style.opacity = opacityModifierChstElem
});
for(let i=0; i<=1; i++){
chestSearchButton[i].addEventListener("click", ()=>{
  humanSearchButton[1].style.opacity = 0, opacityModifierHmnElem = 0
  monsterSearchButton[1].style.opacity = 0, opacityModifierMnstrElem = 0
  chestSearchButton[1].style.opacity = .8, opacityModifierChstElem = .8
  furnitureSearchButton[1].style.opacity = 0, opacityModifierFrntrElem = 0
  graveSearchButton[1].style.opacity = 0, opacityModifierGrvElem = 0
  pantrySearchButton[1].style.opacity = 0, opacityModifierFoodElem = 0
  lootLocationModifier = 3
})};

/*************Furniture Button interations****************/
for(let i=0; i<=1; i++){
furnitureSearchButton[i].addEventListener("mouseover", ()=>{
  furnitureSearchButton[1].style.opacity = .8
})};
furnitureSearchButton[0].addEventListener("mouseleave", ()=>{
  furnitureSearchButton[1].style.opacity = opacityModifierFrntrElem
});
for(let i=0; i<=1; i++){
furnitureSearchButton[i].addEventListener("click", ()=>{
  humanSearchButton[1].style.opacity = 0, opacityModifierHmnElem = 0
  monsterSearchButton[1].style.opacity = 0, opacityModifierMnstrElem = 0
  chestSearchButton[1].style.opacity = 0, opacityModifierChstElem = 0
  furnitureSearchButton[1].style.opacity = .8, opacityModifierFrntrElem = .8
  graveSearchButton[1].style.opacity = 0, opacityModifierGrvElem = 0
  pantrySearchButton[1].style.opacity = 0, opacityModifierFoodElem = 0
  lootLocationModifier = 4
})};

/*************Grave Button interations****************/
for(let i=0; i<=1; i++){
graveSearchButton[i].addEventListener("mouseover", ()=>{
  graveSearchButton[1].style.opacity = .8
})};
graveSearchButton[0].addEventListener("mouseleave", ()=>{
  graveSearchButton[1].style.opacity = opacityModifierGrvElem
});
for(let i=0; i<=1; i++){
graveSearchButton[i].addEventListener("click", ()=>{
  humanSearchButton[1].style.opacity = 0, opacityModifierHmnElem = 0
  monsterSearchButton[1].style.opacity = 0, opacityModifierMnstrElem = 0
  chestSearchButton[1].style.opacity = 0, opacityModifierChstElem = 0
  furnitureSearchButton[1].style.opacity = 0, opacityModifierFrntrElem = 0
  graveSearchButton[1].style.opacity = .8, opacityModifierGrvElem = .8
  pantrySearchButton[1].style.opacity = 0, opacityModifierFoodElem = 0
  lootLocationModifier = 5
})};

/*************Pantry Button interations****************/
for(let i=0; i<=1; i++){
pantrySearchButton[i].addEventListener("mouseover", ()=>{
  pantrySearchButton[1].style.opacity = .8
})};
pantrySearchButton[0].addEventListener("mouseleave", ()=>{
  pantrySearchButton[1].style.opacity = opacityModifierFoodElem
});
for(let i=0; i<=1; i++){
pantrySearchButton[i].addEventListener("click", ()=>{
  humanSearchButton[1].style.opacity = 0, opacityModifierHmnElem = 0
  monsterSearchButton[1].style.opacity = 0, opacityModifierMnstrElem = 0
  chestSearchButton[1].style.opacity = 0, opacityModifierChstElem = 0
  furnitureSearchButton[1].style.opacity = 0, opacityModifierFrntrElem = 0
  graveSearchButton[1].style.opacity = 0, opacityModifierGrvElem = 0
  pantrySearchButton[1].style.opacity = .8, opacityModifierFoodElem = .8
  lootLocationModifier = 6
})};
/**************************Button variables: D20input box (left)**************************/
const enter20ishLMBTN = document.getElementById('d20ValueGenerateBtn');

enter20ishLMBTN.addEventListener('click', ()=>{
  const enter20ishLMInput = document.getElementById('d20Valueinput_1');
  lootStatModifier = enter20ishLMInput.value || 0;
  (lootStatModifier > 20) ? lootStatModifierBonus = enter20ishFinalModifier - 20 : lootStatModifierBonus = 0;
  generateLootTable(lootStatModifier, lootStatModifierBonus);
});
/**************************Button variables: D20input Stats (Middle)**************************/
const inputStatLMBTN = document.getElementById('inputStatGenerateBtn');
const inputStatModifier_Roll = document.getElementById('inputStatinput_1');
const inputStatModifier_1 = document.getElementById('inputStatBonus_1');
const inputStatModifier_2 = document.getElementById('inputStatBonus_2');
const inputStatModifier_3 = document.getElementById('inputStatBonus_3');

inputStatLMBTN.addEventListener('click', ()=>{
  lootStatModifier = inputStatModifier_Roll.value;
  lootStatModifierBonus = Math.floor(
    (inputStatModifier_1.value*.3)+(inputStatModifier_2.value*.4)+(inputStatModifier_3.value*.3)
  );
  console.log(lootStatModifierBonus);
  generateLootTable(lootStatModifier, lootStatModifierBonus);
});



/**********loop to populate dropdown menus**************/
function dropdownMenuCreate(element, optionCount){
  for(let i=0; i<=optionCount; i++){
    const button = document.getElementById(element);
    const newOption = document.createElement("option");
    newOption.value = i; 
    newOption.text = '+'+i; 
    button.appendChild(newOption);
  }};
  dropdownMenuCreate('inputStatBonus_1',12);
  dropdownMenuCreate('inputStatBonus_2',12);
  dropdownMenuCreate('inputStatBonus_3',12);
/**************************Button variables: RandomD20 (Right)**************************/
const randRollValueChange = document.getElementById("randRollOutput")
const randRollNumChange = document.getElementById("randRollValueMakeBtn")
const randRollGoLootBtn = document.getElementById("randRollGenerateBtn")

randRollNumChange.addEventListener('click', ()=>{
  const randomNumber = Math.floor(Math.random()*20);
  randRollValueChange.textContent = randomNumber;
  lootStatModifier = randomNumber;
});
randRollGoLootBtn.addEventListener('click',generateLootTable(lootStatModifier));

/**************************Button variables: Stat Widget Revealers (Footer)**************************/
/*Reveal enter20 button*/
const enter20ishbtn = document.getElementById("d20Roller");
const enter20ishdiv = document.getElementById("d20ValueCon");
enter20ishbtn.addEventListener("click", ()=>{
  enter20ishdiv.style.opacity > 0 ? enter20ishdiv.style.opacity = 0: enter20ishdiv.style.opacity = .8
});
/*Reveal Inputstats Button*/
const inputStatRollbtn = document.getElementById("inputRoll");
const inputStatRolldiv = document.getElementById("inputStatCon");
inputStatRollbtn.addEventListener("click",()=>{
  inputStatRolldiv.style.opacity > 0 ? inputStatRolldiv.style.opacity = 0: inputStatRolldiv.style.opacity = .8
});
/*Reveal Random Button*/
const randRollbtn = document.getElementById("randRoll");
const randRolldiv = document.getElementById("randRollCon");
randRollbtn.addEventListener("click",()=>{
  randRolldiv.style.opacity > 0 ? randRolldiv.style.opacity = 0: randRolldiv.style.opacity = .8
});

/*************content in containers*******************/
const lootbagName1js = document.getElementById("lootbagName1");
const lootbagDesc1js = document.getElementById("lootbagDesc1");
const lootbagVal1js = document.getElementById("lootbagVal1");

const lootbagName2js = document.getElementById("lootbagName2");
const lootbagDesc2js = document.getElementById("lootbagDesc2");
const lootbagVal2js = document.getElementById("lootbagVal2");

async function callJSONLootTable(){
try{
  const JSONtableResponse = await fetch('/Users/coleman/Desktop/VS Code Practice/Loot Generator/Loot Table.json');
  if (!JSONtableResponse.ok){
    throw new Error('PROBLEM!!!!');
  }
  const lootOutput = Response.json()
  console.log(lootOutput)
}
catch{error} {
console.error(error.message)
}};


function generateLootTable(lootmodifier, lootStatModifierBonus) {
  callJSONLootTable()
}