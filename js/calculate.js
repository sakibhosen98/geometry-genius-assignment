
// Triangle
let serial = 0;
document.getElementById('btn-triagle').addEventListener('click', function(){
  serial += 1;
  const firstName = getTextValueById('first-name');
  const triagleLand = getInputValueById('triangle-land');
  const triagleHeight = getInputValueById('triangle-height');
  const triagleArea = 0.5 * triagleLand * triagleHeight;
  
  // Create element and appendChild
  const container = document.getElementById('table-container');
  const tr = document.createElement('tr');
  tr.innerHTML = `
    <td> ${serial} </td>
    <td> ${firstName} </td> 
    <td> ${triagleArea}<span>cm</span><sup>2</sup></td>
    <td> <button class="bg-blue-500 px-2 py-1 text-white rounded-xl">Convert to m<span>2</span></button>
    </td>
  `
  container.appendChild(tr);
})



// =============================================
// function -1
function getInputValueById(idName){
  const inputElement = document.getElementById(idName).value;
  const value = parseInt(inputElement);
  return value;
  }

  // function-2
  function getTextValueById(idName){
    const textElement = document.getElementById(idName).innerText;
    return textElement;
  }