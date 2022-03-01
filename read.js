const readline = require('readline');


//process - global variable of nodejs

const rl = readline.createInterface({input: process.stdin, output: process.stdout});

// console.log(rl);

let num1 = 5;
let num2 = 6;

rl.question(`Enter the sum of ${num1} and ${num2}\n`, (userInput) => {
    console.log('From Console - ',userInput.trim());
    if(userInput == num1 + num2) {
        console.log('\nAnswer correct...');
        rl.close();
    }
    else{
        rl.setPrompt('\n Your answer is incorrect. Plz type again...');
        rl.prompt();
        rl.on('line', (userInput) => {
            if(userInput == num1 + num2) {
                console.log('\nAnswer correct finally ...\n');
                rl.close();
            }
            else {
                rl.setPrompt('\n Again your answer is incorrect. Plz type again...');
                rl.prompt();
            }
        })
    }
})

rl.on('close', () => {
    console.log('\nAnswer correct. You have reached next level.....');
})

