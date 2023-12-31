// blog btn for others site visited
document.getElementById('btn-blog').addEventListener('click', function(){
  window.location.href = 'question.html';
})

// Card callcultion start:
// Triangle
let serial = 0;
document.getElementById('btn-triagle').addEventListener('click', function(){
  serial += 1;
  const firstName = getTextValueById('first-name');
  const triagleLand = getInputValueById('triangle-land');
  const triagleHeight = getInputValueById('triangle-height')
  if(isNaN(triagleLand, triagleHeight)){
    alert('Please enter the provide numbers!')
    return;
  }
  const triagleArea = (0.5 * triagleLand * triagleHeight).toFixed(2);

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

// Rectangle

document.getElementById('btn-rectangle').addEventListener('click', function(){
 serial += 1;
  const secondName = getTextValueById('second-name');
  const rectangleWidth = getInputValueById('rectangle-width');
  const rectangleLength = getInputValueById('rectangle-length');
  if(isNaN(rectangleWidth, rectangleLength)){
    alert('Please enter the provide numbers!')
    return;
  }
  const rectangleArea = (rectangleWidth * rectangleLength).toFixed(2);
  
  //Create element and Appendchild-----------
  const container = document.getElementById('table-container');
  const tr = document.createElement('tr');
  tr.innerHTML = `
    <td> ${serial} </td>
    <td> ${secondName} </td> 
    <td> ${rectangleArea}<span>cm</span><sup>2</sup></td>
    <td> <button class="bg-blue-500 px-2 py-1 text-white rounded-xl">Convert to m<span>2</span></button>
    </td>
  `
  container.appendChild(tr);
})

// Parallelogram

document.getElementById('btn-parallelogram').addEventListener('click', function(){
  serial += 1;
  const thirdName = getTextValueById('third-name');
  const parallelogramLand = getInputValueById('parallelogram-land');
  const parallelogramHeight = getInputValueById('parallelogram-height');
  const parallelogramArea = (parallelogramLand * parallelogramHeight).toFixed(2);
  
  //Create element and Appendchild-----
  const container = document.getElementById('table-container');
  const tr = document.createElement('tr');
  tr.innerHTML = `
    <td> ${serial} </td>
    <td> ${thirdName} </td> 
    <td> ${parallelogramArea}<span>cm</span><sup>2</sup></td>
    <td> <button class="bg-blue-500 px-2 py-1 text-white rounded-xl">Convert to m<span>2</span></button>
    </td>
  `
  container.appendChild(tr);
})

// Rhombus 

  document.getElementById('btn-rhombus').addEventListener('click', function(){
    serial += 1;
    const forthName = getTextValueById('forth-name');
    const rhombusD1 = getInputValueById('rhombus-d1');
    const rhombusD2 = getInputValueById('rhombus-d2');  
    const rhombusArea = (0.5 * rhombusD1 * rhombusD2).toFixed(2);
    
     //Create element and Appendchild-----
    const container = document.getElementById('table-container');
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td> ${serial} </td>
      <td> ${forthName} </td> 
      <td> ${rhombusArea}<span>cm</span><sup>2</sup></td>
      <td> <button class="bg-blue-500 px-2 py-1 text-white rounded-xl">Convert to m<span>2</span></button>
      </td>
    `
    container.appendChild(tr);
  })

  // Pentagon
  
  document.getElementById('btn-Pentagon').addEventListener('click', function(){
    serial += 1;
    const fifthName = getTextValueById('fifth-name');
    const PentagonP = getInputValueById('pentagon-p');
    const pentagonB = getInputValueById('pentagon-b');
    const pentagonArea = (0.5 * PentagonP * pentagonB).toFixed(2);

     //Create element and Appendchild-----
    const container = document.getElementById('table-container');
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td> ${serial} </td>
      <td> ${fifthName} </td> 
      <td> ${pentagonArea}<span>cm</span><sup>2</sup></td>
      <td> <button class="bg-blue-500 px-2 py-1 text-white rounded-xl">Convert to m<span>2</span></button>
      </td>
    `
    container.appendChild(tr);
  })

  // Ellipse

  document.getElementById('btn-ellipse').addEventListener('click', function(){
    serial += 1;
    const sixthName = getTextValueById('sixth-name');
    const ellipseA = getInputValueById('ellipse-a');
    const ellipseB = getInputValueById('ellipse-b');
    const ellipseArea = (3.14 * ellipseA * ellipseB).toFixed(2);
    
     //Create element and Appendchild-----
    const container = document.getElementById('table-container');
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td> ${serial} </td>
      <td> ${sixthName} </td> 
      <td> ${ellipseArea}<span>cm</span><sup>2</sup></td>
      <td> <button class="bg-blue-500 px-2 py-1 text-white rounded-xl">Convert to m<span>2</span></button>
      </td>
    `
    container.appendChild(tr);

  })

  // Random color all card
  document.addEventListener('mouseover', function(){
    const cards = document.getElementsByClassName('card');
    for (const card of cards) {
      card.style.backgroundColor = randomColor();
    }
  });

  // ============== Function ====================
// function -1: for get input value

  function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = '';
    return inputFieldValue;
  }

  // function-2: for get innerText value
  function getTextValueById(idName){
    const textElement = document.getElementById(idName).innerText;
    return textElement;
  }

// function for Random Color
  function randomColor() {
    let color = [];
    for (let i = 0; i < 3; i++) {
      color.push(Math.floor(Math.random() * 256));
    }
    return 'rgb(' + color.join(', ') + ')';
  } 
  