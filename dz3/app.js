function hoursToMinutes() {
  let userInput = Number(prompt('Hours to minutes converter, input hours'));
  if(isNaN(userInput)) {
    alert('this is not a number, please enter a number');
    hoursToMinutes();
  } else {
    const result = userInput * 60 * 60;
    alert(`there are ${result} seconds in ${userInput} hours`);
  }
}

hoursToMinutes();