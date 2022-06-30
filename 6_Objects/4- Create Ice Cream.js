//Write a factory function createIceCream that accepts Three arguments coneType, iceCreamFlavour, topping and returns and object representing the ice-cream.
//اكتب وظيفة المصنع لإنشاء الآيس كريم الذي يقبل مخروط ثلاث حجج ، ونكهة الآيس كريم ، وتحتل المرتبة الأولى والمرتجعات وكائن يمثل الآيس كريم.
const createIceCream = function (coneType, iceCreamFlavour, topping) {
  topping = "none";
  return {
    coneType: coneType,
    iceCreamFlavour: iceCreamFlavour,
    topping: topping,
  };
};
createIceCream("wafer cone", "chocolate"); // => {coneType: "wafer cone" iceCreamFlavour: "chocolate", topping: none}
createIceCream("waffle cone", "vanilla", "chocolate syrup"); // => {coneType: "waffle cone", iceCreamFlavour: "vanilla", topping: "chocolate syrup"}
createIceCream("sugar cone", "strawberry", "cherry"); // => {coneType: "sugar cone", iceCreamFlavour: "strawberry", topping: "cherry"}
