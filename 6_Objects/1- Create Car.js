//Write a factory function createCar that accepts three string arguments brand, name, color and returns an object representing the car.
//اكتب وظيفة المصنع إنشاء السيارة التي تقبل ثلاث سلاسل من العلامات التجارية والاسم واللون وإرجاع كائن يمثل السيارة.
const createCar = function (brand, name, color) {
  return { brand: brand, name: name, color: color };
};
createCar("Toyota", "Prius", "Black"); // => {brand: "Toyota", name: "Prius", color: "Black"}
