/** Global Looting Variables (adjusted by below levers)**/
let lootLocationModifier = 0
let lootStatModifier = 0
let lootStatModifierBonus = 0
let itemCount = 0
/********************************Location Selector Button Functions*******************/

/*****************************Loot Location Variables*******************/
const location = [
  document.getElementById('lctnSelector_Hmn')
  ,document.getElementById('lctnSelector_Mnstr')
  ,document.getElementById('lctnSelector_Chst')
  ,document.getElementById('lctnSelector_Frntr')
  ,document.getElementById('lctnSelector_Grv')
  ,document.getElementById('lctnSelector_Food')
];
const hoverimage = [
  document.getElementById('lctnSelector_Hmn_Hover')
  ,document.getElementById('lctnSelector_Mnstr_Hover')
  ,document.getElementById('lctnSelector_Chst_Hover')
  ,document.getElementById('lctnSelector_Frntr_Hover')
  ,document.getElementById('lctnSelector_Grv_Hover')
  ,document.getElementById('lctnSelector_Food_Hover')
];

for(let i=0; i<location.length; i++){
location[i].addEventListener('mouseenter', ()=>{
  hoverimage[i].classList.add('lctnSelector_Active');
});
hoverimage[i].addEventListener('mouseenter', ()=>{
  hoverimage[i].classList.add('lctnSelector_Active');
});
location[i].addEventListener('mouseleave', ()=>{
  hoverimage[i].classList.remove('lctnSelector_Active');
});

location[i].addEventListener('click', ()=>{
  hoverimage[i].classList.add('lctnSelector_Active');

  location[i].removeEventListener('mouseenter', ()=>{
    hoverimage[i].classList.add('lctnSelector_Active');
  });
  hoverimage[i].removeEventListener('mouseenter', ()=>{
    hoverimage[i].classList.add('lctnSelector_Active');
  });
  location[i].removeEventListener('mouseleave', ()=>{
    hoverimage[i].classList.remove('lctnSelector_Active');
  });
})};
/**************************Button variables: D20input box (left)**************************/
const enter20ishLMBTN = document.getElementById('d20ValueGenerateBtn');

enter20ishLMBTN.addEventListener('click', ()=>{
  const enter20ishLMInput = document.getElementById('d20Valueinput_1');
  enter20ishLMInput.value > 20 ? lootStatModifier = 20 : lootStatModifier = enter20ishLMInput.value;
  lootStatModifier > 32 ? lootStatModifierBonus = 12 : lootStatModifierBonus > 20 ? lootStatModifierBonus = lootStatModifier - 20: lootStatModifierBonus = 0;
  generateLoot();
});
/**************************Button variables: D20input Stats (Middle)**************************/
const inputStatLMBTN = document.getElementById('inputStatGenerateBtn');
const inputStatModifier_Roll = document.getElementById('inputStatinput_1');
const inputStatModifier_1 = document.getElementById('inputStatBonus_1');
const inputStatModifier_2 = document.getElementById('inputStatBonus_2');
const inputStatModifier_3 = document.getElementById('inputStatBonus_3');

inputStatLMBTN.addEventListener('click', ()=>{
  inputStatModifier_Roll.value > 20 ? lootStatModifier = 20: lootStatModifier = inputStatModifier_Roll.value;
  lootStatModifierBonus = Math.floor((inputStatModifier_1.value*.3)+(inputStatModifier_2.value*.4)+(inputStatModifier_3.value*.3));
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
const table = document.getElementById('lootResultsTable');  
const clipboardButton = document.getElementById('copyToClipboard');

function lootAlgorithm(...arg){
  tablePop = [];
  itemCount = Math.round(Math.random()*2)+Math.round(Math.round(lootStatModifier/5)+Math.floor(lootStatModifierBonus/6)/2);
  table.innerHTML = 
 `<table id="lootResultsTable" class="lootResultsTable">
    <thead>
      <th>Looted Item</th>
      <th>Description</th>
      <th>Value</th>
    </thead>
    <tbody>
      <!--rows generated in js-->
    </tbody>
  </table>`;

  for(const obj of arg){
    tablePop.push(obj);
  };
  
  for(let i=0; i < itemCount; i++){
    const newrow = table.insertRow(1); 
    newrow.id = `newrow_${itemCount-i}`
    const cell = [newrow.insertCell(0), newrow.insertCell(1), newrow.insertCell(2)];
    
    const poolMax = Math.floor(arg.length*(lootStatModifier/20));
    const poolMin = Math.floor(lootStatModifier/4);

    const randomPoolSelect = Math.round(Math.random()*(poolMax - poolMin)+poolMin);
    const randomItemSelect = Math.round(Math.random()*(tablePop[randomPoolSelect].length-1)); //random item from object (0 - last value)
    
    const lootName= tablePop[randomPoolSelect][randomItemSelect].name
    const lootDescription = tablePop[randomPoolSelect][randomItemSelect].description
    const lootValue = tablePop[randomPoolSelect][randomItemSelect].value
    
    cell[0].innerHTML = lootName; 
    cell[1].innerHTML = lootDescription; 
    cell[2].innerHTML = `<div class = "deleteformat">
    <p class="priceText">${lootValue}</p>
    <button class = "deleteitembutton_${i}"
    onclick="
      lootResultsTable.deleteRow(newrow_${itemCount-i}.rowIndex);
      ">-x, sorry!
</div>`;
  };
    
  tablePop = [];
  clipboardButton.innerHTML = `copy results`;
  clipboardButton.addEventListener('click', ()=>{
    const clipboardStaging = [];
  
    for (let i = 1; i<itemCount+1; i++){
      const rows = document.getElementById(`newrow_${i}`);
      const priceCell = rows.cell[2]

      i === 1 ? clipboardStaging.push(`Item ${i}: ${rows.cell[0].innerHTML},  ${rows.cells[1].innerHTML}` )
      : clipboardStaging.push(`
Item ${i}: ${rows.cells[0].innerHTML},  ${rows.cells[1].innerHTML}`)
    };
    console.log(clipboardStaging);
    navigator.clipboard.writeText(clipboardStaging);
    alert("Copied!");
  });
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
  const table = document.getElementById('lootResultsTable');  
  const newrow = table.insertRow(1); 
  const cell = [newrow.insertCell(0), newrow.insertCell(1), newrow.insertCell(2)];
    
  cell[0].innerHTML = 'nothing?'; 
  cell[1].innerHTML = 'your search is fruitless..'; 
  cell[2].innerHTML = 'worthless'; 
}};


/* code testing for Clipboard Content */




// Suggestions:
// remove uniques from the total table every time one is rolled. 
// remove parens from value form