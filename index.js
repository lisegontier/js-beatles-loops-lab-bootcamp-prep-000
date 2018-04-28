var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];

var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instruments) {
  var arr = [];
  for (let i = 0, l = musicians.length; i < l; i++) {
    arr.push('${musicians[i]} plays ${instruments[i]}');
  }
  return arr;
}
