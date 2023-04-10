function eat(food){
  if(typeof food != 'string'){
    return 'argument is not a string'
  } else {
		return food + ' tasted really good.'
	}
};

console.log(eat('bananas'));