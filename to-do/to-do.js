const fs = require('fs');
const colors = require('colors');

let todoList = [];

const saveDb = () => {
    let data = JSON.stringify(todoList);
    fs.writeFile('db/data.json', data, (err) => {
        if (err) { throw new Error('no se pudo grabar el archivo .json') }
    });
}

const cargarDB = () => {
    try {

        todoList = require('../db/data.json');
        return todoList;
    } catch (error) {
        todoList = [];
        return todoList;
    }
    //console.log(todoList);

}

const printList = () => {
    let data = cargarDB();
    for (const item of data) {
        console.log(item);
        console.log('=======To Do ==============='.green);
        console.log(item.description);
        console.log('State:', item.complete ? colors.green(item.complete) : colors.red(item.complete));
        console.log('============================'.green);

    }
}
const update = (desc, completado = true) => {
    cargarDB();
    let todoIndex = todoList.findIndex(item => item.description === desc);
    if (todoIndex >= 0) {
        todoList[todoIndex].complete = completado;
        saveDb();
        return true
    } else {
        return false
    }

}

const borrar = (selected) => {
    cargarDB();
    let newList = todoList.filter(item => {
        if (item.description !== selected) {
            return item
        }
    })
    todoList = newList;
    saveDb();
}
const newTodo = (description) => {
    cargarDB();
    let toDo = {
        description: description,
        complete: false
    };
    todoList.push(toDo);
    saveDb();
    return toDo;
}


module.exports = { newTodo, printList, update, borrar };