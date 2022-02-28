const EventEmitter = require('events');
const { emit, addListener, removeListener, setMaxListeners, removeAllListeners } = require('process');

const eventEmitter = new EventEmitter();


eventEmitter.on('newevent',()=> {
    console.log('New Event received... - ', a, b);
})

console.log('waiting for event....');

setTimeout(function(){
    eventEmitter.emit('newevent');
},5000)

// ---------------------

eventEmitter.on('newevent',(a,b)=> {
    console.log('New Event received... - ', a, b);
})


console.log('waiting for event....');

setTimeout(function(){
    eventEmitter.emit('newevent', 5, 6);
},5000)



//---------------------------------------
class Person extends EventEmitter {
    constructor(firstName) {
        super();
        this._firstname = firstName;
    }

    get firstname(){
        return this._firstname;
    }
}

let person1 = new Person('Deepak');
let person2 = new Person('ABC');

person1.on('displayname', ()=> {
    console.log('Name of person is  - ', person1.firstname);
});

person1.on('displaydetails', ()=> {
    console.log('Name of person is  - ', person1.firstname, 'Working at NS');
});

person2.on('displayname', ()=> {
    console.log('Name of person is  - ', person2.firstname);
});

person2.emit('displayname');
person1.emit('displayname');

person1.emit('displaydetails');


//---------------------------
// emit - Event emit
// addListener - on - Listen Events
// listeners() - array of all event listners for that object
// removeListener - off - delete that listener
// once - single time listen
// setMaxListeners() - max limit of listeners
// removeAllListeners() - remove all listener