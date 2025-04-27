/** Global Looting Variables (adjusted below)**/
let lootLocationModifier = 0
let lootStatModifier = 0
let lootStatModifierBonus = 0
let itemCount = 0
import{fullLootTable} from '/loot-generator-table.js'

/********************************Location Selector Button Functions*******************/

/*****************************Loot Location Variables*******************/
const location = [
  document.getElementById('lctnSelector_Hmn_Con')
  ,document.getElementById('lctnSelector_Mnstr_Con')
  ,document.getElementById('lctnSelector_Chst_Con')
  ,document.getElementById('lctnSelector_Frntr_Con')
  ,document.getElementById('lctnSelector_Grv_Con')
  ,document.getElementById('lctnSelector_Food_Con')
];
const hoverimage = [
  document.getElementById('lctnSelector_Hmn_Hover')
  ,document.getElementById('lctnSelector_Mnstr_Hover')
  ,document.getElementById('lctnSelector_Chst_Hover')
  ,document.getElementById('lctnSelector_Frntr_Hover')
  ,document.getElementById('lctnSelector_Grv_Hover')
  ,document.getElementById('lctnSelector_Food_Hover')
];

for(let a = 0; a<6; a++ ){
location[a].addEventListener('mouseenter', ()=>{
  hoverimage[a].classList.add('lctnSelector_Active');
});

location[a].addEventListener('mouseleave', ()=>{
  hoverimage[a].classList.remove('lctnSelector_Active');
});

location[a].addEventListener('click', ()=>{
  let c = a
  hoverimage[a].classList.add('lctnSelector_Active_2');
  for(let b=0; b<6; b++){
    if(b===c){continue}
    else{hoverimage[b].classList.remove('lctnSelector_Active_2')}
  }})};

async function populateLootTable(unique, monsterLoot, animal, humanFood, nature, potion, ammunition, dead, x) {
  let lootPool = [];
  let lootPoolReMap = [];

  for(const subTable in fullLootTable) lootPool.push(subTable);
  function funcStackTable(x,y){for(let i = 0; i<x; i++) lootPoolReMap.push(y)};

  lootPool.forEach((subTable)=>{
    subTable.includes('uniqueLoot') ? funcStackTable(unique,subTable)
    : subTable.includes('monsterLoot') ? funcStackTable(monsterLoot,subTable)
    : subTable.includes('animal') ? funcStackTable(animal, subTable)
    : subTable.includes('human_food') ? funcStackTable(humanFood, subTable)
    : subTable.includes('nature') ? funcStackTable(nature, subTable)
    : subTable.includes('potion') ? funcStackTable(potion, subTable)
    : subTable.includes('ammunition') ? funcStackTable(ammunition, subTable)
    : subTable.includes('dead') ? funcStackTable(dead, subTable)
    
    : subTable.includes('trash') ? funcStackTable(x,subTable)
    : subTable.includes('common') ? funcStackTable(x*.8, subTable)
    : subTable.includes('rare') ? funcStackTable(x*.6, subTable)
    : subTable.includes('epic') ? funcStackTable(x*.3, subTable)
    : subTable.includes('legendary') ? funcStackTable(x*.2, subTable)
    : subTable.includes('magic') ? funcStackTable(x/10, subTable)
    : funcStackTable(10, subTable)
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

const table = document.getElementById('lootResultsTable');  
const clipboardButton = document.getElementById('copyToClipboard');
let lootStaging = [];

function generateLoot() {
  if (lootLocationModifier <= 1){
    populateLootTable(
     /*unique*/ 10
      , /*monsterLoot*/ 10
      , /*animal*/ 10
      , /*humanFood*/ 10
      , /*nature*/ 10
      , /*potion*/ 10
      , /*ammunition*/ 10
      , /*dead*/ 10
      , /*x*/ 10);
  } else if (lootLocationModifier = 2){
    populateLootTable(
      /*unique*/ 10
       , /*monsterLoot*/ 10
       , /*animal*/ 10
       , /*humanFood*/ 10
       , /*nature*/ 10
       , /*potion*/ 10
       , /*ammunition*/ 10
       , /*dead*/ 10
       , /*x*/ 10);
   } else if (lootLocationModifier = 3){
    populateLootTable(
      /*unique*/ 10
       , /*monsterLoot*/ 10
       , /*animal*/ 10
       , /*humanFood*/ 10
       , /*nature*/ 10
       , /*potion*/ 10
       , /*ammunition*/ 10
       , /*dead*/ 10
       , /*x*/ 10);
   } else if (lootLocationModifier = 4){
    populateLootTable(
      /*unique*/ 10
       , /*monsterLoot*/ 10
       , /*animal*/ 10
       , /*humanFood*/ 10
       , /*nature*/ 10
       , /*potion*/ 10
       , /*ammunition*/ 10
       , /*dead*/ 10
       , /*x*/ 10);
   } else if (lootLocationModifier = 5){
    populateLootTable(
      /*unique*/ 10
       , /*monsterLoot*/ 10
       , /*animal*/ 10
       , /*humanFood*/ 10
       , /*nature*/ 10
       , /*potion*/ 10
       , /*ammunition*/ 10
       , /*dead*/ 10
       , /*x*/ 10);
   } else if (lootLocationModifier = 6){
    populateLootTable(
      /*unique*/ 10
       , /*monsterLoot*/ 10
       , /*animal*/ 10
       , /*humanFood*/ 10
       , /*nature*/ 10
       , /*potion*/ 10
       , /*ammunition*/ 10
       , /*dead*/ 10
       , /*x*/ 10)};
  lootAlgorithm()};

function lootAlgorithm(){
  let tablePop = [];
  itemCount = Math.round(lootStatModifier/10 + (Math.random()*(lootStatModifierBonus/6)))
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



  //random item selector algorithm
  if (itemCount === 0){lootStaging.push(['Nothing!', 'Your search yeilds no results..', '0gp'])}
  else{
    for(let i=0; i < itemCount; i++){
      const poolNum = flexSubtables.length;
      const poolMax = math.round(poolNum * 
        (((lootStatModifier)+ //1-20
        (Math.floor(lootStatModifierBonus/7)*10)) //0-10
        /30)
      );
      const randomPoolSelect = Math.round(Math.random() * (poolMax));
      const randomItemSelect = Math.round(Math.random()*(tablePop[randomPoolSelect].length-1));

      const lootName= tablePop[randomPoolSelect][randomItemSelect].name
      const lootDescription = tablePop[randomPoolSelect][randomItemSelect].description
      const lootValue = tablePop[randomPoolSelect][randomItemSelect].value
      
      lootStaging.push([lootName, lootDescription, lootValue]);
  };}
  console.log(lootStaging)

  //handling duplicate items
  for(let i = 0; i<lootStaging.length; i++){


    const newrow = table.insertRow(1); 
    newrow.id = `newrow_${itemCount-i}`
    const cell = [newrow.insertCell(0), newrow.insertCell(1), newrow.insertCell(2)];

    cell[0].innerHTML = lootStaging[i][0]; 
    cell[1].innerHTML = lootStaging[i][1]; 
    cell[2].innerHTML = `<div class = "deleteformat">
    <p class="priceText">${lootStaging[i][2]}</p>
    <button class = "deleteitembutton_${i}"
    onclick="
      lootResultsTable.deleteRow(newrow_${itemCount-i}.rowIndex);
      ">-x, sorry!
</div>`;
  };

  //clipboard button functionality
  clipboardButton.innerHTML = `copy results`;
  clipboardButton.addEventListener('click', ()=>{
    let clipboardStaging = '';
    const rows = table.getElementsByTagName('thead')[0].getElementsByTagName('tr');
    
    for (let i = 1; i<rows.length; i++){
      const cell = [table.getElementsByTagName('tr')[i].getElementsByTagName('td')[0].innerHTML, table.getElementsByTagName('tr')[i].getElementsByTagName('td')[1].innerHTML,table.getElementsByTagName('tr')[i].getElementsByTagName('td')[2].innerHTML];
      const price = table.getElementsByTagName('tr')[i].getElementsByTagName('td')[2].getElementsByTagName('div')[0].getElementsByTagName('p')[0].innerHTML;

      i === 1 ? clipboardStaging +=(`Item ${i}: ${cell[0]},  ${cell[1]}, (${price})` )
      : clipboardStaging +=(`
Item ${i}: ${cell[0]},  ${cell[1]}, (${price})`)
    };
    navigator.clipboard.writeText(clipboardStaging);
    alert("Copied!");
    });
};



// Suggestions:
// remove uniques from the total table every time one is rolled. 
// remove parens from value form