const a = 5;
const b = 10;
console.log("Fifteen is " + (a + b) + " and\nnot " + (2 * a + b) + ".");
// "Fifteen is 15 and
// not 20."
console.log(`check bien: a= ${a} b= ${b} and a+ b = ${a + b}`);

//bài 8: object
console.log("lesson 8");
let c = {};
let d = "Huong";
console.log(` type of c:`, typeof a, `type  of d: `, typeof d);

let obj = {
  name: "Huong",
  address: "Vinh Phuc",
  email: "huongthienbinh@gmail.com",
  gender: "male",
  f: function () {
    console.log(`hele inside function`);
    return "";
  },
};
console.log(`My name is: ${obj.name}`);
console.log(`Where are you from?, i'm from ${obj.address}`);
console.log(`call function: `, obj.f());

//video 9: array
console.log("hello video 9");
let h = {
  name: "huong",
  age: 25,
};
console.log("check data object: ", h);
console.log("my name is ", h.name);
let g = ["mu", "liverpool", "cr7"]; // khai báo mảng rỗng
let m = {}; //khai báo 1 object rỗng
console.log("type of g", typeof g, g);
console.log("first item: ", g[0], "second item", g[1]);
let u = [
  {
    name: "huosdka",
    age: 21,
  },
  { name: "coook", age: 23 },
];
console.log(u);
