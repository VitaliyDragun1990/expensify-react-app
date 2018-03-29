/************* OBJECT DESTRUCTURING ******************/
// const person = {
//     name: 'Andrew',
//     age: 27,
//     location: {
//         city: 'Philadelphia',
//         temp: 92
//     }
// };
//
// const { name: firstName = 'Anonymous', age, location: { city, temp: temperature } } = person;
//
// console.log(`${firstName} is ${age} from ${city}`);
//
// if (city && typeof temperature === 'number') {
//     console.log(`It's ${temperature} in ${city}`);
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };
//
// const { publisher: { name: publisherName = 'Self-Published' } } = book;
//
// console.log(publisherName);

/************* ARRAY DESTRUCTURING ******************/
// const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];
// const [, city, state = 'New York'] = address;
// console.log(`You are in ${city} ${state}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [itemName, , mediumPrice] = item;
console.log(`A medium ${itemName} costs ${mediumPrice}`);

