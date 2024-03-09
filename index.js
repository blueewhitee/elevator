function minmaxRecursive(selectedFloors, start, end) {
    // Base case: when array contains only one element
    if (start === end) {
        return { min: selectedFloors[start], max: selectedFloors[start] };
    }
    
    // Base case: when array contains only two elements
    if (end === start + 1) {
        return { 
            min: Math.min(selectedFloors[start], selectedFloors[end]),
            max: Math.max(selectedFloors[start], selectedFloors[end])
        };
    }
    
    
    // Divide the array into two halves and find minmax of each half recursively
    const mid = Math.floor((start + end) / 2);
    const leftMinMax = minmaxRecursive(selectedFloors, start, mid);
    const rightMinMax = minmaxRecursive(selectedFloors, mid + 1, end);
    
    // Compare minmax of two halves
    return{
    
    min:  Math.min(leftMinMax.min, rightMinMax.min),
    max:   Math.max(leftMinMax.max, rightMinMax.max)}
  //  console.log(minimumm);}
   // console.log(maxmumm);
  //  const median = Math.floor((minimumm+maxmumm)/2);
    //console.log(median+" Is median");  


}

function toggleSelection2(median) {
    // Sabhi toggle buttons se "selected" class hatao
    var allButtons = document.querySelectorAll('.button');
    allButtons.forEach(function(button) {
        button.classList.remove('selected');
    });

    // Ab specific toggle button par "selected" class jodo
    var button = document.getElementById('button' + median);
    button.classList.add('selected');
}




function startLift() {
    var selectedFloors = [];
    var buttons = document.querySelectorAll('.button.selected');
    buttons.forEach(function(button) {
      selectedFloors.push(button.id.replace('button', ''));
    });

   console.log('Selected floors:', selectedFloors);
   console.log(selectedFloors[selectedFloors.length-1]);
   console.log('Lift started!');
/*---------------------------------------------------------------------------------------------------*/
   if(selectedFloors.length===1){
    console.log("single liftttt");
   }
   else if(selectedFloors.length>=2){
   let value=minmaxRecursive(selectedFloors,0,selectedFloors.length-1);
   let min = value['min'];
  let max = value['max'];
  let median = Math.floor((min+max)/2);
  console.log("found the best floor to stop lift "+median);
  
  
  toggleSelection2(median);
    
    
   }

    
  }
  // JavaScript function to toggle selection of elevator buttons
  function toggleSelection(floor) {
    var button = document.getElementById('button' + floor);
  // console.log(button);
    button.classList.toggle('selected');

  }


