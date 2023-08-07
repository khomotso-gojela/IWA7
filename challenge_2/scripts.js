// const nickname= "Timmy";
// const firstname = "Timothy";

// console.log("Good Morning, ${nickname} || {firstname}!")


// solution

const nickname= "Timmy";
const firstname = "Timmothy";

console.log(`Good Morning${(nickname == null && firstname == null ? '': ", ")}${nickname || firstname || ""}!`)