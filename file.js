const fs = require('fs');

// writefile - create a file
// readfile - read content of a file

fs.writeFile('file1.txt','I work at NS.',(err)=> {
    if(err) {
        console.log(err);
    }
    else{
        console.log('Successfully created...');

        fs.readFile('file1.txt','utf8',(err, file)=> {
            if(err) {
                console.log(err);
            }
            else{
                console.log(file);
            }
        })
    }
})

// fs.rename('file1.txt', 'file2.txt', (err)=> {
//         if(err) {
//             console.log(err);
//         }
//         else{
//             console.log('Successfully renamed...');
//         }
//     }
// )

// fs.unlink('file2.txt',(err) => {
//     if(err) {
//                     console.log(err);
//                 }
//                 else{
//                     console.log('Successfully deleted...');
//                 }
// })


// fs.appendFile('file1.txt' , 'I line at GGN.', (err)=>{
//     if(err) {
//                             console.log(err);
//                         }
//                         else{
//                             console.log('Successfully appended...');
//                         }
// })