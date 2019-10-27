const yaml = require('js-yaml');
const fs   = require('fs');
const readingFolder = './exBGPcommunities/';

let total = 0


fs.readdir(readingFolder, (err, files) => {
    files.forEach(file => {
      //console.log(file);
      let aux = 0;
      try {
        const doc = yaml.safeLoad(fs.readFileSync(readingFolder + file, 'utf8'));
        try {
            aux = doc.other.length
            console.log(aux)
        } catch (e){
            //console.log("Undefinded value")
        }
        total += aux
      } catch (e) {
        console.log(e);
      }
    });
    console.log(total)
  });

