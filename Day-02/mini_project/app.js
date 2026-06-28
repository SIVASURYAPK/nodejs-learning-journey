const fs = require("fs");
function addNote(data){
    fs.appendFileSync(
        "notes.txt",
        data
    );
    console.log("Text Appended");
}

function showNotes(){
    const data = fs.readFileSync(
        "notes.txt" , "utf-8"
    );
    
    console.log(data);
}

function clearNote(){
    fs.unlinkSync(
        "notes.txt"
    );

    console.log("File cleared");
}

module.exports = {
    addNote,showNotes,clearNote
};