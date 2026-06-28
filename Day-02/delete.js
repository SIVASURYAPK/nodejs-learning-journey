const fs = require("fs");
fs.unlinkSync(
    "message.txt"
);

fs.mkdirSync(
    "day2-node"
);
console.log("Folder Created");


fs.rmdirSync(
    "day2-node"
);
console.log("Folder Deleted");