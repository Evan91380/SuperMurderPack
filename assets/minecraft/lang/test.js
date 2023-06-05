data = require("./lang.json")
const fs = require("fs")

let en = {	
"Don't forget the ressource pack!": " ",
"Click here to download the ressource pack!": " ",
}
let fr = {}
const regexReturnLine = /\\n/g
for(let key in data) {
    if(data[key]["en"] !== null) en[key.replace(regexReturnLine, "\n")] = data[key]["en"].replace(regexReturnLine, "\n")
    if(data[key]["fr"] !== null) fr[key] = data[key]["fr"].replace(regexReturnLine, "\n")
}


fs.writeFileSync(`./en_us.json`, JSON.stringify(en, null, '\t'))
fs.writeFileSync(`./fr_fr.json`, JSON.stringify(fr, null, '\t'))