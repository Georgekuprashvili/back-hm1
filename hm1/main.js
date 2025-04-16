// 1
// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
// let positives = 0;
// nums.forEach((num) => {
//   if (num > 0) {
//     positives++;
//   }
// });
// console.log(positives, "positives");

// const negatives = nums.filter((num) => num < 0);
// let negativestotal = negatives.reduce((tot, curr) => tot + curr);

// console.log([positives, negativestotal]);

// 2
// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
// const newnums = nums.map((num) => num * 2);
// console.log(newnums, "nums * 2");
// const filtered = newnums.filter((num) => num % 3 === 0);
// console.log(filtered);

// 3
// const nums = [19, 5, 42, 2, 77];
// function sum() {
//   let newarray = nums.sort((x, y) => x - y);
//   return (newarray[0] += newarray[1]);
// }
// console.log(sum(nums), "small numbers sum");

// 4
// let arr1 = [13, 64, 15, 17, 88];
// let arr2 = [23, 14, 53, 17, 80];
// let arr3 = [];

// function newarray() {
//   for (let index = 0; index < arr1.length; index++) {
//     arr3.push(arr1[index] > arr2[index] ? arr1[index] : arr2[index]);
//   }
//   return arr3;
// }
// console.log(newarray(arr1, arr2));

// 5
// const characters = [
//   {
//     name: "Luke Skywalker",
//     height: "172",
//     mass: "77",
//     eye_color: "blue",
//     gender: "male",
//   },
//   {
//     name: "Darth Vader",
//     height: "202",
//     mass: "136",
//     eye_color: "yellow",
//     gender: "male",
//   },
//   {
//     name: "Leia Organa",
//     height: "150",
//     mass: "49",
//     eye_color: "brown",
//     gender: "female",
//   },
//   {
//     name: "Anakin Skywalker",
//     height: "188",
//     mass: "84",
//     eye_color: "blue",
//     gender: "male",
//   },
// ];

// let names = characters.map((character) => character.name);
// console.log(names, "names");
// let firstnames = characters.map((character) => character.name.split(" ")[0]);
// console.log(firstnames, "firstnames");

// const grouped = characters.reduce((tot, curr) => {
//   const eye_color = curr.eye_color;
//   if (!tot[eye_color]) {
//     tot[eye_color] = [];
//   }
//   tot[eye_color].push(curr);
//   return tot;
// }, {});
// console.log(grouped);
// for (let id in grouped) {
//   console.log(id + "" + grouped[id].length);
// }

// 6
// const movies = [
//   { title: "Inception", year: 2010, rating: 8.8 },
//   { title: "Interstellar", year: 2014, rating: 8.6 },
//   { title: "Tenet", year: 2020, rating: 7.5 },
//   { title: "Dunkirk", year: 2017, rating: 7.9 },
// ];
// const newfilmes = movies.filter((movie) => movie.rating > 8);
// console.log(newfilmes, "rating > 8");
// const newmassive = movies.map((movie) => movie.title);
// console.log(newmassive);
// let sortalphabet = newmassive.sort();
// console.log(sortalphabet);

// 7
// const students = [
//   { name: "Lia", scores: [90, 85, 100] },
//   { name: "Tom", scores: [70, 60, 75] },
//   { name: "Mia", scores: [88, 92, 95] },
// ];
// const averages = students.map((student) => {
//   const aver =
//     student.scores.reduce((tot, curr) => tot + curr) / student.scores.length;
//   return { ...student, average: aver };
// });
// console.log(averages);
// const more85 = averages.filter((student) => student.average > 85);
// console.log(more85);

// 8
// const employees = {
//   alice: { department: "HR", active: true },
//   bob: { department: "Engineering", active: false },
//   charlie: { department: "Engineering", active: true },
// };

// const newobj = {};
// Object.entries(employees).forEach(([key, value]) => {
//   if (value.active) {
//     if (!newobj[value.department]) {
//       newobj[value.department] = 0;
//     }
//     newobj[value.department]++;
//   }
// });
// console.log(newobj, "newobj");
