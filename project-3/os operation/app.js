// ⬇ Required Core Modules
const fs = require("fs");
const path = require("path");
const os = require("os");


// 1) Create a new file and write some text
fs.writeFileSync("example.txt", "Hello, This is my first Node.js File!");
console.log("File created and text written.");


// 2) Read the content of the file
const data = fs.readFileSync("example.txt", "utf8");
console.log("File Content:", data);


// 3) Append new content to the same file
fs.appendFileSync("example.txt", "\nThis is appended text.");
console.log("New text appended.");


// 4) Delete the file
// fs.unlinkSync("example.txt");
// console.log("🗑 File deleted."); 
// (Note: Delete line ko run karne ke liye comment hatana)


// 5) Get Absolute Path of Current File
console.log(" Absolute Path:", __filename);


// 6) Display only file name & extension
console.log(" File Name:", path.basename(__filename));
console.log(" File Extension:", path.extname(__filename));


// 7) Print OS Information
console.log("Platform:", os.platform());
console.log("CPU Architecture:", os.arch());
console.log("Total Memory:", os.totalmem());
