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
    
    const minimumm =  Math.min(leftMinMax.min, rightMinMax.min);
    const maxmumm=    Math.max(leftMinMax.max, rightMinMax.max);
    console.log(minimumm);
    console.log(maxmumm);
    const median = Math.floor((minimumm+maxmumm)/2);
    console.log(median);    
}

  
  
  
  
  
  // JavaScript function to toggle selection of elevator buttons
  function toggleSelection(floor) {
    var button = document.getElementById('button' + floor);
  // console.log(button);
    button.classList.toggle('selected');
  }

  // Function to start the lift
  function startLift() {
    var selectedFloors = [];
    var buttons = document.querySelectorAll('.button.selected');
    buttons.forEach(function(button) {
      selectedFloors.push(button.id.replace('button', ''));
    });

   console.log('Selected floors:', selectedFloors);
/*---------------------------------------------------------------------------------------------------*/
   if(selectedFloors.length===1){
    console.log("single");
   }
   else if(selectedFloors.length>=2){
    minmaxRecursive(selectedFloors,0,selectedFloors.length-1);
    
    
   }

    console.log('Lift started!');
  }
