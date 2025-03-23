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
// chest loot = 6,

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
,fullLootTable.rare_jewelry       //18
,fullLootTable.rare_treasure      //19

,fullLootTable.epic_weapon        //20
,fullLootTable.epic_armor         //21
,fullLootTable.epic_jewelry       //22
,fullLootTable.epic_treasure      //23

,fullLootTable.legendary_armor    //24
,fullLootTable.legendary_weapons  //25
,fullLootTable.legendary_jewelry  //26
,fullLootTable.legendary_treasure //27

,fullLootTable.magic_armor        //28
,fullLootTable.magic_jewelry      //29
,fullLootTable.magic_weapon       //30
,fullLootTable.magic_treasure     //31
];

function lootAlgorithm(...arg){
  const table = document.getElementById('lootResultsTable');  
  const itemCount = Math.ceil(Math.round(Math.random()*lootStatModifier/4) + Math.round(Math.random()*lootStatModifierBonus/2));
  table.innerHTML = 
  `<thead>
    <th>Looted Item</th>
    <th>Description</th>
    <th>Value</th>
  </thead>
  <tbody>
  </tbody>`;

  for(const obj of arg){
    tablePop.push(obj);
  };
  
  for(let i=0; i < itemCount; i++){
    const newrow = table.insertRow(1); 
    const cell = [newrow.insertCell(0), newrow.insertCell(1), newrow.insertCell(2)];
    
    const poolMax = arg.length
    const poolMin = arg.length-arg.length

    const randomPoolSelect = Math.round(Math.random()*(poolMax - poolMin)+poolMin);
    const randomItemSelect = Math.round(Math.random()*(tablePop[randomPoolSelect].length-1)); //random item from object (0 - last value)
    
    cell[0].innerHTML = tablePop[randomPoolSelect][randomItemSelect].name; 
    cell[1].innerHTML = tablePop[randomPoolSelect][randomItemSelect].description; 
    cell[2].innerHTML = tablePop[randomPoolSelect][randomItemSelect].value; 
  };
  tablePop = [];
};

function generateLoot() {
if (lootStatModifier > 0){
  if (lootLocationModifier <= 1){
    lootAlgorithm(
      subTables[0] //unique
      ,subTables[1] //monster
      ,subTables[2] //animal
      ,subTables[3] //human food
      ,subTables[4] //nature
      ,subTables[5] //potion 
      ,subTables[6] //ammunition
      ,subTables[7] //dead
      ,subTables[8] //trash
      ,subTables[9]
      ,subTables[10]
      ,subTables[11]
      ,subTables[12] //common
      ,subTables[13]
      ,subTables[14]
      ,subTables[15]
      ,subTables[16] //rare
      ,subTables[17]
      ,subTables[18]
      ,subTables[19]
      ,subTables[20] //epic
      ,subTables[21]
      ,subTables[22]
      ,subTables[23]
      ,subTables[24] //legendary
      ,subTables[25]
      ,subTables[26]
      ,subTables[27]
      ,subTables[28] //magic
      ,subTables[29]
      ,subTables[30]
      ,subTables[31]
    );
  } else if (lootLocationModifier = 2){
    lootAlgorithm(
      subTables[0] //unique
      ,subTables[1] //monster
      ,subTables[2] //animal
      ,subTables[4] //nature
      ,subTables[5] //potion 
      ,subTables[6] //ammunition
      ,subTables[7] //dead
      ,subTables[8] //trash
      ,subTables[9]
      ,subTables[10]
      ,subTables[11]
      ,subTables[12] //common
      ,subTables[13]
      ,subTables[14]
      ,subTables[15]
      ,subTables[16] //rare
      ,subTables[17]
      ,subTables[18]
      ,subTables[19]
      ,subTables[20] //epic
      ,subTables[21]
      ,subTables[22]
      ,subTables[23]
      ,subTables[24] //legendary
      ,subTables[25]
      ,subTables[26]
      ,subTables[27]
      ,subTables[28] //magic
      ,subTables[29]
      ,subTables[30]
      ,subTables[31]
    );
  } else if (lootLocationModifier = 3){
    lootAlgorithm(
      subTables[2] //animal
      ,subTables[4] //nature
      ,subTables[5] //potion 
      ,subTables[6] //ammunition
      ,subTables[12] //common
      ,subTables[13]
      ,subTables[14]
      ,subTables[15]
      ,subTables[16] //rare
      ,subTables[17]
      ,subTables[18]
      ,subTables[19]
      ,subTables[20] //epic
      ,subTables[21]
      ,subTables[22]
      ,subTables[23]
      ,subTables[24] //legendary
      ,subTables[25]
      ,subTables[26]
      ,subTables[27]
      ,subTables[28] //magic
      ,subTables[29]
      ,subTables[30]
      ,subTables[31]
    );
  } else if (lootLocationModifier = 4){
    lootAlgorithm(
      subTables[5] //potion 
      ,subTables[6] //ammunition
      ,subTables[7] //dead
      ,subTables[10]
      ,subTables[14]
      ,subTables[15]
      ,subTables[18]
      ,subTables[19]
      ,subTables[22]
      ,subTables[23]
      ,subTables[26]
      ,subTables[27]
      ,subTables[29]
      ,subTables[31]
    );
  } else if (lootLocationModifier = 5){
    lootAlgorithm(
      subTables[0] //unique
      ,subTables[1] //monster
      ,subTables[2] //animal
      ,subTables[3] //human food
      ,subTables[4] //nature
      ,subTables[5] //potion 
      ,subTables[6] //ammunition
      ,subTables[7] //dead
      ,subTables[8] //trash
      ,subTables[9]
      ,subTables[10]
      ,subTables[11]
      ,subTables[12] //common
      ,subTables[13]
      ,subTables[14]
      ,subTables[15]
      ,subTables[16] //rare
      ,subTables[17]
      ,subTables[18]
      ,subTables[19]
      ,subTables[20] //epic
      ,subTables[21]
      ,subTables[22]
      ,subTables[23]
      ,subTables[24] //legendary
      ,subTables[25]
      ,subTables[26]
      ,subTables[27]
      ,subTables[28] //magic
      ,subTables[29]
      ,subTables[30]
      ,subTables[31]
    );
  } else if (lootLocationModifier = 6){
    lootAlgorithm(
      subTables[3] //human food
      ,subTables[4] //nature
      ,subTables[5] //potion 
    );
}}
else{
  const newrow = table.insertRow(1); 
  const cell = [newrow.insertCell(0), newrow.insertCell(1), newrow.insertCell(2)];
    
  cell[0].innerHTML = 'nothing?'; 
  cell[1].innerHTML = 'your search is fruitless..'; 
  cell[2].innerHTML = 'worthless'; 
}};

// remove uniques from the total table every time one is rolled. 
// remove parens from value form