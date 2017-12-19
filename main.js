/*
This is the start of our coffee shop program. To finish it, complete the makeDrink method so that it:

Only allows you make a drink if it's a drink in the drinkRequirements object. 
Otherwise alert: "Sorry, we don't make DRINKNAME".
If the drink is part of the drinkRequirements object, reduce the amount of beans by the 
number of beans required for that drink.
If there are not enough beans to make that drink, alert: "Sorry, we're all out of beans!".*/

var coffeeShop = {
  beans: 40,

  drinkRequirements: {
    latte: 10,
    americano: 5,
    doubleShot: 15,
    frenchPress: 12
  },

  makeDrink: function (drinkType) {
    for (var drink in this.drinkRequirements) {
      var check = false;
      if (drinkType === drink){
        this.beans = this.beans - this.drinkRequirements[drink];
        if (this.beans < 0) {
          alert("Sorry, we're all out of beans!");
        check = true;
        return;
        } else {
          alert("There are " + this.beans + " beans left.");
        check = true;
        return;
        }
      }
    }
    if (check === false) {
      alert ("Sorry, we don't make " + drinkType);
    }
  }
}

coffeeShop.makeDrink("latte");
coffeeShop.makeDrink("americano");
coffeeShop.makeDrink("filtered");
coffeeShop.makeDrink("doubleShot");
coffeeShop.makeDrink("frenchPress");