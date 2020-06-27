var dollarToEuro = function(dollarValue){
	return dollarValue * 0.89;
}
var euroToYen = function(euroValue){
	return euroValue * 124.15;
}
//***** YOUR CODE BELOW ******///
let dollarValue = 137;
let euroValue = dollarToEuro(dollarValue)
console.log(euroToYen(euroValue));

