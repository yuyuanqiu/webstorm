var information = {
    name: 'Ioiy Aig',
    age: 21,
    sex: 'female',
    phone: 1500791
};
console.log(information.name);
delete information.age;
console.log(information);
information.age = 18;
console.log(information);
//in左边是对象中的一个属性的字符串
console.log('age' in information);
console.log(typeof [1,1,2]);
//就算两个对象值相同，但就相当于重新new了一样
var nameList = {
    name: 'Ioiy Aig',
    age: 21,
    sex: 'female',
    phone: 1500791
}

// false
console.log(information === nameList);
