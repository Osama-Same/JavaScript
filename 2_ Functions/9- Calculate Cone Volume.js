// [9] Write two functions calculateConeVolume and calculateConeSurfaceArea that accepts two number arguments height and radius and returns the volume and surface area for a Right Circular Cone
// [9] اكتبْ دوالتين حاسبة "وحدة التخزين" واحتسب "وحدة اتصال" التي تقبل اثنين وسيطات الأرقام الارتفاع ونصف القطر وإرجاع الحجم و منطقة سطح مخروط دائري أيمن
const calculateConeSurfaceArea = function (height, radius) {
  return Math.PI * radius * (radius + (height * 2 + radius * 2) ** 0.5);
};
console.log(calculateConeSurfaceArea(10, 6)); // => ≈ 376 || 376.99 || 376.9911184307752
console.log(calculateConeSurfaceArea(10, 6)); // => ≈ 332 || 332.91 ||332.91904316461034
