function coinChanger(cents){
  arr = [100, 25, 10, 5];
  names = ["Dollars","Quarters","Dimes","Nickels"];
  for (var x =0; x < 4; x++){
    var denom = (cents/arr[x]);
    cents = (cents%arr[x]);
    console.log(Math.floor(denom), names[x]);
  }
  console.log(cents, "pennies");
}
//enter into coneole something like-> coinChanger(399)
