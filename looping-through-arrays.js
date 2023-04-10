const pets = ['cat', 'dog', 'rat'];

for(let i = 0;i < pets.length;i++){
  pets[i] = pets[i] + 's';
};

//pets.forEach(function(val, i){
//	pets[i] = val + 's'
//})

console.log(pets);