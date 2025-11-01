const fs = require('node:fs');

let jsonData = null;

const stringFileData = fs.readFileSync('./datasets/quotes.jsonl', 'utf-8');
try{
    jsonData = jsonlToJson(stringFileData)

    //Adding id and quoteLength property to the every object
    let id = 1
    let quoteLength = 0
    jsonData.map(object => {
            object['id'] = `${id}`
            quoteLength = object['quote'].length
            object['quoteLength'] = `${quoteLength}`
            id = id + 1
    })

    jsonToJsonl(jsonData)
} catch (err) {
    console.error('Error reading file: ', err)
}

function jsonlToJson(jsonlStringData){
    const jsonData = jsonlStringData.trim().split("\n").map(line => JSON.parse(line));
    return jsonData;
}

function jsonToJsonl(jsonData){
    let jsonlData = "";

    for (const object of jsonData) {
        if(object !== jsonData[Object.keys(jsonData).length-1]){
            jsonlData += `${JSON.stringify(object)}\n`;
        }else{
            jsonlData += JSON.stringify(object);
        }
    }
    return jsonlData;   
}

fs.writeFileSync('./datasets/quotes.jsonl',jsonToJsonl(jsonData))