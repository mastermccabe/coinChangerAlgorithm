function coinChange(cents){
  var dol, quar, dime, nic = 0;

    dol = Math.floor(cents/100);
    cents = (cents%100);
    quar = Math.floor(cents/25);
    cents = (cents%25);
    dime = Math.floor(cents/10);
    cents = (cents%10);
    nic = Math.floor(cents/5);
    cents = (cents%5);




console.log(dol, " Dollar(s)", quar, " Quarters", dime, " Dimes", nic, "Nichels", cents," cents");

}
