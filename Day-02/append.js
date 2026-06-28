const fs = require("fs");
fs.appendFileSync(
    "text.txt",
    "\nYes, agreed"
);
console.log("Appended");