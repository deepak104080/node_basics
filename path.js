const path = require('path');
const { join } = require('path/posix');

console.log(path.basename('https://www.newtonschool.co/launchpad'));
console.log(path.dirname('https://www.newtonschool.co/launchpad'));
console.log(path.extname('https://www.newtonschool.co/launchpad'));


// join - links multiple urls
// format - format of file url