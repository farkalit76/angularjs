import {Todo} from '../app/todo/todo';

export const TODO_ITEMS: Todo[] =[
    {
        id:1,
        name:'Lunch party',
        notes:'sea food',
        due: new Date(new Date().setDate(new Date().getDate() + 4)),
        done: false
    },
    {
        id:2,
        name:'Visit Dubai',
        notes:'confirm meeting',
        due: new Date(new Date().setDate(new Date().getDate() + 5)),
        done: false
    },
    {
        id:3,
        name:'Purchase fruits',
        notes:'For Breakfast',
        due: new Date(new Date().setDate(new Date().getDate() - 1)),
        done: false
    }
];