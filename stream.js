const fs = require('fs');

const readStream = fs.createReadStream('./file1.txt', 'utf8');
const writeStream = fs.createWriteStream('./file_copy.txt');


readStream.on('data', (chunk)=>{
    console.log(chunk);
    writeStream.write(chunk);
})


readStream.pipe(writeStream);
