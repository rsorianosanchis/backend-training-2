const argv = require('yargs')
    .command('new', 'cretaes anew to-do item', {
        description: {
            demand: true,
            alias: 'd',
            desc: 'descripcion de la tarea'
        }
    })
    .command('done', 'update to done', {
        description: {
            demand: true,
            alias: 'd',
            desc: 'descripcion de la tarea'
        },
        update: {
            default: true,
            alias: 'u',
            desc: 'marca la tarea como completada o pendiente'
        }
    })
    .command('print', 'shows all items to do', {

    })
    .command('borrar', 'borra la tarea a traves de la descripcion', {
        description: {
            demand: true,
            alias: 'd',
            desc: 'descripcion de la tarea'
        },

    })
    .help()
    .argv;

module.exports = { argv };