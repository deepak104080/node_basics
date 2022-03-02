const fs = require('fs');


// fs.mkdir('folder1',(err) => {
//     if(err)
//         console.log(err);
//     else
//         console.log('folder created successfully..');
// })


// fs.rmdir('folder1',(err) => {
//     if(err)
//         console.log(err);
//     else
//         console.log('folder deleted successfully..');
// })

// fs.mkdir('folder2',(err) => {
//     if(err)
//         console.log(err);
//     else {
//         console.log('folder created successfully..');
//         fs.writeFile('./folder2/file1.txt','I work at NS.',(err)=> {
//             if(err) {
//                 console.log(err);
//             }
//             else{
//                 console.log('Successfully created...');

//                 fs.readFile('./folder2/file1.txt','utf8',(err, file)=> {
//                     if(err) {
//                         console.log(err);
//                     }
//                     else{
//                         console.log(file);
//                     }
//                 })
//             }
//         })
//     }
        
// })


// fs.unlink('./folder1/file1.txt',(err) => {
//     if(err) {
//         console.log(err);
//     }
//     else{
//         console.log('Successfully deleted file...');
//         fs.rmdir('folder1',(err) => {
//             if(err)
//                 console.log(err);
//             else
//                 console.log('folder deleted successfully..');
//         })
//     }
// })

fs.readdir('folder2', (err, files) => {
    if(err) {
        console.log(err);
    }
    else{
        console.log(files);
        for(temp of files) {
            console.log(temp);
            fs.unlink('./folder2/'+temp,(err) => {
                if(err) {
                    console.log(err);
                }
                else{
                    console.log('Successfully deleted one file...');
                }
            })
        }
        fs.rmdir('folder2',(err) => {
            if(err)
                console.log(err);
            else
                console.log('folder deleted successfully..');
        })
    }
})

