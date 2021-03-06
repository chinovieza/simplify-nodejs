const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.addListener('myEvent', function(args) {
    console.log('addListener -> I found you : myEvent', args);
});
emitter.on('myEvent', function(args) {
    console.log('on -> I found you : myEvent', args);
});

emitter.emit('myEvent', {id:1, name:'chino'});
emitter.emit('myEvent', {type:'response', content_type:'text/html', header:'200 OK'});

emitter.addListener('yourEvent', function(arg1, arg2) {
    console.log('addListener -> I found you : yourEvent', arg1, arg2);
});

emitter.emit('yourEvent', 8, 'chinovieza');