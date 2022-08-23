// code your solution here
function saturdayFun(activity = 'roller-skate'){
  return `This Saturday, I want to ${activity}!`;
}

const mondayWork = function (task = 'go to the office') {
  return `This Monday, I will ${task}.`;
}

function wrapAdjective(punctuation = "*") {
  const innerFunction = function (adjective = 'special') {
    return `You are ${punctuation}${adjective}${punctuation}!`;
  }
  return innerFunction;
}