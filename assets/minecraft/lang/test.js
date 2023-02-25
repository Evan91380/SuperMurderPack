data = require("./lang.json")
const fs = require("fs")

let en = {}
let fr = {}

for(let key in data) {
    if(data[key]["en"] !== null) en[key.replace("\\n", "\n")] = data[key]["en"].replace("\\n", "\n")
    if(data[key]["fr"] !== null) fr[key] = data[key]["fr"].replace("\\n", "\n")
}

fs.writeFileSync(`./en_us.json`, JSON.stringify(en, null, '\t'))
fs.writeFileSync(`./fr_fr.json`, JSON.stringify(fr, null, '\t'))