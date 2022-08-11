const student = [
    {id: 21, name: 'moyori', age: 23},
    {id: 54, name: 'mim', age: 33},
    {id: 65, name: 'mithila', age: 222},
    {id: 88, name: 'moni', age: 21},
];
const names  = student.map(s => s.name);
const ids = student.map(s => s.id);
const bigger = student.filter(s => s.id>40);
const biggerOne = student.find(s => s.id>40);

console.log(names, ids, bigger, biggerOne);