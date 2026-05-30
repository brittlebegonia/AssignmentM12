// STEP 1
// function Cat() {
//     console.log('Cat');
// }

// const Dog = function() {
//     console.log('Dog');
// };

// STEP 2
// const cat1 = new Cat();
// const dog1 = new Dog();

// STEP 3
// class Animal {
//     create() {
//         console.log('The Animal has been created');
//     }
// }

// const animal = new Animal();
// animal.create();

// STEP 4
// class Animal {

//     constructor(message) {
//         this.message = message;
//     }

//     create() {
//         console.log(this.message);
//     }

// }

// const animal = new Animal('The Animal has been created');

// animal.create();

// STEP 5
// class AnimalInfo {
//     constructor(type, breed, color, height, length) {
//         this.type = type;
//         this.breed = breed;
//         this.color = color;
//         this.height = height;
//         this.length = length;
//     }
// }

// const dog = new AnimalInfo('Dog', 'Pitbull', 'Brown', 32, 48);

// STEP 6
// const Animal = function (init_type, init_breed, init_color, init_height, init_length) {
//     this.type = init_type;
//     this.breed = init_breed;
//     this.color = init_color;
//     this.height = init_height;
//     this.length = init_length;
// };
// const dog = new Animal('Dog', 'Pitbull', 'Brown', 32, 48);

// for (let property in dog) {
//     console.log(property + ': ' + dog[property]);
// }

// STEP 7
// class Animal {

//     constructor(type, breed, color, height, length) {
//         this.type = type;
//         this.breed = breed;
//         this.color = color;
//         this.height = height;
//         this.length = length;
//     }

//     speak() {

//         if (this.type.toLowerCase() === 'dog') {
//             return `The ${this.color} dog is barking!`;
//         }

//         return `The ${this.color} cat is meowing!`;

//     }

// }

// const dog = new Animal('Dog', 'Pitbull', 'Brown', 32, 48);

// console.log(dog.speak());

// STEP 8
// class Animal {

//     constructor(type, breed, color, height, length) {

//         let Type = type;
//         let Breed = breed;
//         let Color = color;
//         let Height = height;
//         let Length = length;

//         function checkType() {

//             if (Type.toLowerCase() === 'dog') {
//                 return 'dog';
//             } else {
//                 return 'cat';
//             }

//         }

//         this.speak = function () {
//             return `The ${checkType()} has made a noise!`;
//         };

//     }

// }

// const pet = new Animal('Dog', 'Pitbull', 'Brown', 36, 58);

// console.log(pet.speak());

// STEP 9
// String.prototype.findWords = function (word) {

//     let words = this.split(' ');
//     let count = 0;

//     for (let i = 0; i < words.length; i++) {

//         if (words[i].toLowerCase() === word.toLowerCase()) {
//             count++;
//         }

//     }

//     alert(`The word "${word}" was found ${count} times.`);
// };

// let message = 'The Dog cat got in a fight with another dog. Then the DOG jumped over a fence.';

// message.findWords('dog');