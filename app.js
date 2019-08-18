//const argv = require('yargs').argv;
//const argv = require('./config/yargs.js').argv;
const { argv } = require('./config/yargs.js');
//
const { newTodo, printList, update, borrar } = require('./to-do/to-do.js');
//
console.log(argv);
//
let comando = argv._[0];

switch (comando) {
    case 'new':
        console.log('create new to-do');
        let toDo = newTodo(argv.d);
        console.log(toDo);
        break;
    case 'print':
        console.log('show all things to do');
        printList();
        break;
    case 'done':
        console.log('update an item to done');
        let actualizado = update(argv.d, argv.u);
        console.log(actualizado);

        break;
    case 'borrar':
        console.log('borrando ... item');

        borrar(argv.d);
        console.log(argv.d, 'borrado');


        break;

    default:
        console.log('comando is unkown');
        break;
}