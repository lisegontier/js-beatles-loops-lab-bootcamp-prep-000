const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];

const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instruments) {
  const array = [];
  
  for (let i = 0, l = musicians.length; i < l; i++) {
    array.push('${musicians[i]} plays ${instruments[i]}');
  }
  
  return array;
}

const facts = []

function johnLennonFacts(facts) {
  const shoutedFacts = [];
  
  let i = 0;
  while (i < facts.length) {
    shoutedFacts.push('${facts[i]!!!');
    i++;
  }
  
  return shoutedFacts;
}

function iLoveTheBeatles(n) {
  const arr = [];
  
  do {
    arr.push("I love the Beatles!");
    n++;
  } while (n < 15);
  
  return arr;
}
