const fs = require('fs');

function main() {
    fs.readFile('data.json', 'utf-8', (err, data) => {
        if (err) {
            console.error("error reading this file: data.json", err);
        }

        try {
            const jsonObj = JSON.parse(data);
            let minValue = Infinity;
            let minKey = null;
            for (const key in jsonObj) {
                if (jsonObj.hasOwnProperty(key)) {
                  const value = jsonObj[key].value;
                  if (value < minValue) {
                    minValue = value;
                    minKey = key;
                  }
                }
              } 
            if (minKey !== null) {
            let valueName = jsonObj[minKey].txt;
            let minValue = jsonObj[minKey].value;
            let lowestValueStr = valueName + ":" + minValue;
            fs.writeFile('output.txt', lowestValueStr, 'utf8', (err) => {
                if (err) {
                  console.error('Error writing to file:', err);
                } 
              });
            } else {
              console.log('No elements found in the JSON.');
            }
        }
    

    catch (error) {
            console.error('Error parsing data.JSON:', error);}
        });
}

main('data.json');

