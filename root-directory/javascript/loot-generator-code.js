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
  generateLoot();
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
  generateLoot();
});

/**************************Button variables: RandomD20 (Right)**************************/
const randRollValueChange = document.getElementById("randRollOutput")
const randRollNumChange = document.getElementById("randRollValueMakeBtn")
const randRollGoLootBtn = document.getElementById("randRollGenerateBtn")
randRollNumChange.addEventListener('click', ()=>{
  const randomNumber = Math.ceil(Math.random()*20);
  randRollValueChange.textContent = randomNumber;
  lootStatModifier = randomNumber;
});

randRollGoLootBtn.addEventListener('click', ()=>{
  generateLoot();
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

/**************************Loot Table Variables: Populate and generate final loot table**************************/

import{fullLootTable} from './loot-generator-table.js';

let tablePop = [];
let subTables = [
fullLootTable.uniqueLootTable     //0
,fullLootTable.monsterLootTable   //1
,fullLootTable.animal_loot        //2
,fullLootTable.human_food_loot    //3
,fullLootTable.nature_loot        //4
,fullLootTable.potion_loot        //5
,fullLootTable.ammunition_loot    //6
,fullLootTable.dead_loot          //7
,fullLootTable.trash_weapon       //8
,fullLootTable.trash_armor        //9
,fullLootTable.trash_treasure     //10
,fullLootTable.trash_regional     //11
,fullLootTable.common_weapon      //12
,fullLootTable.common_armor       //13
,fullLootTable.common_jewelry     //14
,fullLootTable.common_treasure    //15
,fullLootTable.rare_weapon        //16
,fullLootTable.rare_armor         //17
];

function lootAlgorithm(arg){
  const table = document.getElementById('lootResultsTable');  
  const runCount = arg.length;
  let itemCount = Math.ceil(lootStatModifier/4 + lootStatModifierBonus/2);

  for(let i=0; i < runCount; i++){
    tablePop.push(subTables[i]);
  };
  console.log(tablePop)
  for(let i=0; i<itemCount; i++){
    const newrow = table.insertRow(1); 
    const cell1 = newrow.insertCell(0);
    const cell2 = newrow.insertCell(1);
    const cell3 = newrow.insertCell(2);

    cell1.innerHTML = tablePop[0][i].name; 
    cell2.innerHTML = tablePop[0][i].description; 
    cell3.innerHTML = tablePop[0][i].value; 
}
tablePop = [];
};

function generateLoot() {
if (lootStatModifier > 0){
  if (lootLocationModifier <= 1){
    lootAlgorithm(
      subTables[12]
      ,subTables[13]
      ,subTables[14]
      ,subTables[15]
    );
  } else if (lootLocationModifier = 2){

  } else if (lootLocationModifier = 3){

  } else if (lootLocationModifier = 4){

  } else if (lootLocationModifier = 5){

  } else if (lootLocationModifier = 6){

}}
else{

}};



/*
const lootTableroll = [];
function lootTableRollPop(p1, p2){
    for(i=0; i<p1; i++){
  lootTableroll.push(p2[i]);
};
};

function populateLootTableroll(p1,p2){
rollTotal = Math.floor(p1/4);
rollBonus = Math.ceil(p2/5);

if (lootLocationModifier === 1){
  lootTableRollPop(fullLootTable.dead_loot.length, fullLootTable.dead_loot);
  console.log(lootTableroll[0].name);
  finalLootTable()
  //loottableroll[x].name and .desc and .value will populate our total table
} else if (lootLocationModifier === 2){

}else if (lootLocationModifier === 3){

}else if (lootLocationModifier === 4){

}else if (lootLocationModifier === 5){

}else {

}};

function finalLootTable(){
  if (rollTotal>0) {
  for(i=0; i<(rollBonus+rollTotal); i++){
    const table = document.getElementById('lootResultsTable');  
    const newrow = table.insertRow(1); 
    const cell1 = newrow.insertCell(0);
    const cell2 = newrow.insertCell(1);
    const cell3 = newrow.insertCell(2);
  
    cell1.innerHTML = lootTableroll[i].name; 
    cell2.innerHTML = lootTableroll[i].description; 
    cell3.innerHTML = lootTableroll[i].value; 
  }} else{
  const table = document.getElementById('lootResultsTable');  
  const newrow = table.insertRow(1); 
  const cell1 = newrow.insertCell(0);
  const cell2 = newrow.insertCell(1);
  const cell3 = newrow.insertCell(2);

  cell1.innerHTML = ""; 
  cell2.innerHTML = "you find nothing!"; 
  cell3.innerHTML = "0gp"; 
  };
console.log('roll table went');
};
*/
