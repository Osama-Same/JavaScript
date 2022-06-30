let str = "Please locate where 'locate' occurs!";
let s = "   osa   a";
let txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log(str.indexOf("locate")); // 7
console.log(str.lastIndexOf("locate")); //14
console.log(str.search("where")); // 14
console.log(str.includes("where")); // true
console.log(txt.length); // 26
console.log(str.slice(7)); // locate where 'locate' occurs!
console.log(str.slice(7, 13)); // locate
console.log(str.substring(7, 13)); // locate
console.log(str.replace("where", "osama")); // Please locate osama 'locate' occurs!
console.log(str.charAt()); // p
console.log(str.toUpperCase()); // PLEASE LOCATE WHERE 'LOCATE' OCCURS!
console.log(str.toLocaleLowerCase()); // please locate where 'locate' occurs!
console.log(str.concat(txt)); // Please locate where 'locate' occurs!ABCDEFGHIJKLMNOPQRSTUVWXYZ
console.log(str.startsWith("P")); // true
console.log(str.startsWith("s")); // false
console.log(str.endsWith("!")); // true
console.log(str.endsWith("s")); // false
const regex1 = /where/;
const regex2 = /eat/;
console.log(str.match(regex1)); //  ["where", index: 14, input: "Please locate where 'locate' occurs!", groups: undefined]
console.log(str.match(regex2)); // null
console.log(str.repeat(2));
// Please locate where 'locate' occurs!
// Please locate where 'locate' occurs!
console.log(str.replace(/^\s+|\s+$/gm,'')) // remove space
console.log(str.trim()) // remove space
 