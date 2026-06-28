const fs = require("fs");
fs.renameSync(
    "text1.txt",
    "message.txt"
);
console.log("Rename done");