//*************** myModule.js ******************************

// const { expect } = require('chai'); 
// const sum = require('./myModule').sum;

// describe('Demo test', () => {
//     // individual test 
//     it('works with 5 and 3', () => {
//         expect(sum(5, 3)).to.equal(8);
//         // if (sum(5, 3) != 8) {
//         //     throw Error('Did not work as expected')

//     });
// });



//********************symetry***************************
// const { expect} = require('chai');
// const isSymmetric = require('./symetry');

// describe('Symetry function', () => {
//     it('returns true for symetric array', () => {
//         expect(isSymmetric([1, 2, 2, 1])).to.be.true;
//     });

//     it('returns false for non symetric', () => {
//         expect(isSymmetric([1,2 ,3 ])).to.be.false;
//     });

//     it('returns false for symetric non type', () => {
//         expect(isSymmetric([1,2 ,'1'])).to.be.false;
//     });

//     it('returns false for non array, number', () => {
//         expect(isSymmetric(5)).to.be.false;
//     });

//     // test overloading
//     it('returns true for symetric array of odd length', () => {
//         expect(isSymmetric([1, 2, 1])).to.be.true;
//     });
//     it('returns true for symetric array of strings', () => {
//         expect(isSymmetric(['1', '2', '1'])).to.be.true;
//     });
//     it('returns false for non array, string', () => {
//         expect(isSymmetric('aadfrr')).to.be.false;
//     });
// });


//******************* * RGB to Hex ******************************
// const { expect } = require('chai');
// const rgbToHexColor = require('./rgbToHex');



// describe('RGB Converter', () => {
//     describe('Happy path', () => {
//         it('converts white', () => {
//             expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF');
//             expect(() => rgbToHexColor()).to.throw(); // when expect to throw an exception but here it didnt 
//         });
//         it('converts black', () => {
//             expect(rgbToHexColor(0, 0, 0)).to.equal('#000000');
//         });
//         it('converts softuni dark blue', () => {
//             expect(rgbToHexColor(35, 68, 101)).to.be.equal('#234465');
//         });
//     });
//     describe('Invalid parameters', () => {
//         it('returns undefined for missing parameters', () => {
//             expect(rgbToHexColor(255, 255)).to.be.undefined;
//         });
//         it('returns undefined for values out of range', () => {
//             expect(rgbToHexColor(-1, 255, -1)).to.be.undefined;
//         });
//         it('returns undefined for value out of range', () => {
//             expect(rgbToHexColor(1, 256, 1)).to.be.undefined;
//         });
//         it('returns undefined for invalid parameter type', () => {
//             expect(rgbToHexColor('1', 256, 1)).to.be.undefined;
//         });
//     })
// });


//************ add/ subtract task ******************************************

// const { expect } = require('chai');
// const createCalculator = require('./addSubtract');

// describe('Calculator', () => {
//     let instance = null;
//     beforeEach(() => {
//         instance = createCalculator();
//     });
//     it('starts empty', () => {
//         expect(instance.get()).to.equal(0);
//     });
//     it('it has all methods', () => {
//         expect(instance).to.has.ownProperty('add');
//         expect(instance).to.has.ownProperty('subtract');
//         expect(instance).to.has.ownProperty('get');
//     });
//     it('adds single number', () => {
//         instance.add(1);
//         expect(instance.get()).to.equal(1);
//     });
//     it('adds multiple number', () => {
//         instance.add(1);
//         instance.add(2);
//         expect(instance.get()).to.equal(3);
//     });
//     it('subtract single number', () => {
//         instance.subtract(1);
//         expect(instance.get()).to.equal(-1);
//     });
//     it('subtract multiple number', () => {
//         instance.subtract(1);
//         instance.subtract(-2);
//         expect(instance.get()).to.equal(1);
//     });
//     it('add and subtract multiple numbers', () => {
//         instance.add(1);
//         instance.subtract(-2);
//         expect(instance.get()).to.equal(3);
//     });
//     it('works with numbers as strings', () => {
//         instance.add('1');
//         instance.add('2');
//         instance.subtract('4');
//         expect(instance.get()).to.equal(-1);


//     });
// });



//******************* Sum of numbers task***********************************
// const { expect } = require('chai');
// const sum = require('./sumOfNumbers');

// describe('Sum of numbers', () => {
//     it('takes and sum all items of an array', () => {
//         expect(sum([1, 2, 3])).to.be.equal(6);
//     })
//     it('takes an empty array as an argument', () => {
//         expect(sum([])).to.be.equal(0);
//     });
//     it('takes an array with a str to return NaN', () => {
//         expect(sum(['a'])).to.be.NaN;
//     });
//     it('takes a string and return NaN', () => {
//         expect(sum('a')).to.be.NaN;
//     });
// })


// ************isEvenOrOdd**********************


// const { expect } = require('chai');
// const isOddOrEven = require('./evenOdd');

// describe('Even or Odd', () => {
//     it('returns odd', () => {
//         expect(isOddOrEven('a')).to.equal('odd');
//     });
//     it('returns undefined for passing number', () => {
//         expect(isOddOrEven(1)).to.be.undefined;
//     });
//     it('returns undefined for passing number', () => {
//         expect(isOddOrEven([1,2])).to.be.undefined;
//     });
//     it('returns undefined for passing number', () => {
//         expect(isOddOrEven(true)).to.be.undefined;
//     });

//     it('returns even', () => {
//         expect(isOddOrEven('aa')).to.equal('even')
//     });
// });

//****** charLookUp***************

// const { expect } = require('chai');
// const lookupChar = require('./lookUp');

// describe('Look for a character in a string', () => {
//     it('takes string and valid index', () => {
//         expect(lookupChar('eli', 2)).to.equal('i');
//     });
//     it('takes non string and valid index', () => {
//         expect(lookupChar(2, 2)).to.be.undefined;
//     });

//     it('takes non string and valid index', () => {
//         expect(lookupChar([2], 2)).to.be.undefined;
//     });
//     it('takes non string and valid index', () => {
//         expect(lookupChar(true, 2)).to.be.undefined;
//     });
//     it('takes string and invalid index', () => {
//         expect(lookupChar('eli', -1)).to.equal('Incorrect index');
//     });
//     it('string length is less than index', () => {
//         expect(lookupChar('eli', 3)).to.equal('Incorrect index');
//     });
//     it('string and NaN index', () => {
//         expect(lookupChar('eli', 3.3)).to.be.undefined;
//     });


// })


//***********************************MathEnforcer*********************

// const { expect } = require('chai');
// const mathEnforcer = require('./mathEnforcer');

// describe('Math Enforcer', () => {
//     describe('addFive', () => {
//         let instance = null;
//         beforeEach(() => {
//             instance = mathEnforcer;
//         });
//         let a = 1e-5;
//         it('has all methods', () => {
//             expect(instance).to.has.ownProperty('addFive');
//             expect(instance).to.has.ownProperty('subtractTen');
//             expect(instance).to.has.ownProperty('sum');
//         });
//         it('takes number only and works', () => {
//             expect(instance.addFive(2)).to.be.equal(7);
//             expect(instance.addFive(-2)).to.be.equal(3);
//             expect(instance.addFive(3.3)).to.be.closeTo(8.3, a);
//         });
//         it('takes a string as an argument and returns undefined', () => {
//             expect(instance.addFive('a')).to.be.undefined;
//         });
//         it('takes an array as an argument and returns undefined', () => {
//             expect(instance.addFive([1, 2, 3])).to.be.undefined;
//         });
//     });
//     describe('subtractTen', () => {
//         let instance = null;
//         beforeEach(() => {
//             instance = mathEnforcer;

//         });
//         let a = 1e-5;
//         it('takes a number', () => {
//             // expect(instance.subtractTen(10)).to.be.equal(0);
//             // expect(instance.subtractTen(-2)).to.be.equal(-12);

//             expect(instance.subtractTen(3.3)).to.be.closeTo(-6.7, a);
//         });
//         it('takes a string and returns undefined', () => {
//             expect(instance.subtractTen('a')).to.be.undefined;
//         });

//     });
//     describe('sum', () => {
//         let instance = null;
//         beforeEach(() => {
//             instance = mathEnforcer;
//         });
//         let a = 1e-5;
//         it('takes a number', () => {
//             expect(instance.sum(10, 2)).to.be.equal(12);
//         });
//         it('takes a floating', () => {
//             expect(instance.sum(10.3, 2.2)).to.be.closeTo(12.5, a);
//         });
//         it('takes a number', () => {
//             expect(instance.sum(-10, -2)).to.be.equal(-12);
//         });

//         it('takes a string and number', () => {
//             expect(instance.sum('a', 2)).to.be.undefined;
//         });
//         it('takes a num and a string as arguments and returns undefined', () => {
//             expect(instance.sum(2, 'a')).to.be.undefined;
//         });
//     });
// });



//***********************testNumbers Exam *****************************/

// const { expect, assert } = require('chai');
// const testNumbers = require('./testNumbers');

// describe('Test Numbers', () => {
//     describe('init', () => {
//         let instance = null;
//         beforeEach(() => {
//             instance = testNumbers;
//         });

//         it('has all methods', ()=> {
//             expect(instance).to.has.ownProperty('sumNumbers');
//             expect(instance).to.has.ownProperty('numberChecker');
//             expect(instance).to.has.ownProperty('averageSumArray');
//         })
//     });

//     describe('sumNumbers', () => {
//         let instance = null;
//         beforeEach(() => {
//             instance = testNumbers;
//         });

//         it('takes two numbers', () => {
//             expect(testNumbers.sumNumbers(1, 2)).to.equal('3.00');
//         });

//         it('returns undefined', ()=> {
//             expect(testNumbers.sumNumbers('1', 1)).to.be.undefined;
//         });

//         it('returns number to fixed 2 decimals', ()=> {
//             expect(Number(testNumbers.sumNumbers(2.2222, 3.3333))).to.be.closeTo(5.55, 0.1);
//         });
//     });

//     describe('numberChecker', () => {
//         let instance = null;
//         beforeEach(() => {
//             instance = testNumbers;
//         });
//         it('throws an error', ()=> {
//             assert.throws(() => {
//                 (testNumbers.numberChecker('aaa'))}
//                 , Error,
//                  'The input is not a number!');

//         });
//         it('throws an error', ()=> {
//             assert.throws(() => {
//                 (testNumbers.numberChecker([1, 2]))}
//                 , Error,
//                  'The input is not a number!');

//         });

//         it('throws an error', ()=> {
//             assert.throws(() => {
//                 (testNumbers.numberChecker({'a': 2}))}
//                 , Error,
//                  'The input is not a number!');

//         });
//         it('takes a number as string', ()=> {
//             expect(testNumbers.numberChecker('2')).to.equal('The number is even!')
//         });
//         it('takes a number as string', ()=> {
//             expect(testNumbers.numberChecker('3')).to.equal('The number is odd!')
//         });


//     });

//     describe('averageSumArray', () => {
//         let instance = null;
//         beforeEach(() => {
//             instance = testNumbers;
//         });
//         it('calculates average sum', ()=> {
//             expect(testNumbers.averageSumArray([1, 2, 3])).to.equal(2);
//         });
//     })
// })


//*********************numberOperations Exam *************************/



// const { expect, assert } = require('chai');
// const numberOperations = require('./numberOperations.js');

// describe('Number Operations object', () => {

//     describe('init', () => {
//         let instance = null;
//         beforeEach(() => {
//             instance = numberOperations;
//         });

//         it('has all methods', () => {
//             expect(instance).to.has.ownProperty('powNumber');
//             expect(instance).to.has.ownProperty('numberChecker');
//             expect(instance).to.has.ownProperty('sumArrays');
//         })
//     });

//     describe('powNumber', () => {
//         let instance = null;
//         beforeEach(() => {
//             instance = numberOperations;
//         });

//         it('returns +number * number', () => {
//             expect(numberOperations.powNumber(2)).to.equal(4);
//         });

//         it('returns -number * number', () => {
//             expect(numberOperations.powNumber(-2)).to.equal(4);
//         });
//     });

//     describe('numberChecker method', () => {
//         let instance = null;
//         beforeEach(() => {
//             instance = numberOperations;
//         });
//         it('takes a number < 100', () => {
//             expect(numberOperations.numberChecker(99)).to.equal('The number is lower than 100!');
//         });
//         it('takes a number >= 100', () => {
//             expect(numberOperations.numberChecker(100)).to.equal('The number is greater or equal to 100!');
//         });
//         it('takes a number >= 100', () => {
//             expect(numberOperations.numberChecker('101')).to.equal('The number is greater or equal to 100!');
//         });
//         it('throws an error', () => {
//             assert.throws(() => {
//                 (numberOperations.numberChecker([1, 2]))
//             }
//                 , Error,
//                 'The input is not a number!');

//         });
//         it('throws an error', () => {
//             assert.throws(() => {
//                 (numberOperations.numberChecker('a'))
//             }
//                 , Error,
//                 'The input is not a number!');

//         });
//         it('throws an error', () => {
//             assert.throws(() => {
//                 (instance.numberChecker({ 'a': 1 }))
//             }
//                 , Error,
//                 'The input is not a number!');

//         });


//     })
//     describe('sumArrays method', () => {
//         let instance = null;
//         beforeEach(() => {
//             instance = numberOperations;
//         });
//         // it('takes arr1.l > arr2.l', () => {
//         //     expect(instance.sumArrays([1, 2, 3], [4, 5])).to.equal([5, 7, 3])


//         // });
//         it('rr1.l > arr2.l', () => {
//             let actual = instance.sumArrays([1, 2, 3], [4, 5]);
//             let exp = [5, 7, 3];
//             expect(actual.toString()).to.equal(exp.toString());

//         })

//     })
// })

/************************cinema************************************** */

// const { expect, assert } = require('chai');
// const cinema = require('./cinema.js');



// describe('test obj cinema', () => {
//     describe('it has init', () => {
//         let instance = null;
//         beforeEach(() => {
//             instance = cinema;
//         });
//         it('has init', () => {
//             expect(cinema).to.has.ownProperty('showMovies');
//             expect(cinema).to.has.ownProperty('ticketPrice');
//             expect(cinema).to.has.ownProperty('swapSeatsInHall');

//         })
//     })

//     describe('test showMovies', () => {
//         let instance = null;
//         beforeEach(() => {
//             instance = cinema;
//         });

//         it("test movieArr == 0", () => {
//             assert.equal(instance.showMovies([]), 'There are currently no movies to show.')
//         })
//         it("test else case", () => {
//             assert.equal(instance.showMovies(['Movie']), 'Movie')
//             assert.equal(instance.showMovies(['Movie', 'Horror']), 'Movie, Horror')
//             assert.equal(instance.showMovies(['Movie', 'Horror', 'Comedy']), 'Movie, Horror, Comedy')
//         })

//     })
//     describe('test swapSeatsInHall', () => {
//         it('test if()', () => {
//             // let result = cinema.swapSeatsInHall.
//             // console.log(result)
//             assert.equal(cinema.swapSeatsInHall('a', 1), "Unsuccessful change of seats in the hall.")
//             assert.equal(cinema.swapSeatsInHall(0, 1), "Unsuccessful change of seats in the hall.")
//             assert.equal(cinema.swapSeatsInHall(21, 1), "Unsuccessful change of seats in the hall.")
//             // o    If one of the numbers is greater than the capacity of the hall – 20
//             assert.equal(cinema.swapSeatsInHall(1, 0), "Unsuccessful change of seats in the hall.")
//             // o    Seats are less or equal of 0
//             assert.equal(cinema.swapSeatsInHall(1, 21), "Unsuccessful change of seats in the hall.")
//             assert.equal(cinema.swapSeatsInHall(1, 'a'), "Unsuccessful change of seats in the hall.")
//             assert.equal(cinema.swapSeatsInHall(0, 21), "Unsuccessful change of seats in the hall.")
//             assert.equal(cinema.swapSeatsInHall(0, [1]), "Unsuccessful change of seats in the hall.")
//             assert.equal(cinema.swapSeatsInHall(0, { 1: 'a' }), "Unsuccessful change of seats in the hall.")
//             assert.equal(cinema.swapSeatsInHall(1, 0), "Unsuccessful change of seats in the hall.")
//             assert.equal(cinema.swapSeatsInHall(1.5, 21), "Unsuccessful change of seats in the hall.")
//             assert.equal(cinema.swapSeatsInHall(1, { 1: 'a' }), "Unsuccessful change of seats in the hall.")

//             assert.equal(cinema.swapSeatsInHall(1, 1), "Unsuccessful change of seats in the hall.")
//             assert.equal(cinema.swapSeatsInHall(20, 20), "Unsuccessful change of seats in the hall.")


//             assert.equal(cinema.swapSeatsInHall(-1.5, 2), "Unsuccessful change of seats in the hall.")
//             assert.equal(cinema.swapSeatsInHall(1, 21.5), "Unsuccessful change of seats in the hall.")
//             assert.equal(cinema.swapSeatsInHall(21, 21), "Unsuccessful change of seats in the hall.")
//             assert.equal(cinema.swapSeatsInHall(20, 20), "Unsuccessful change of seats in the hall.")
//             assert.equal(cinema.swapSeatsInHall(0, 21), "Unsuccessful change of seats in the hall.")



//         })
//         it('test else case', () => {

//             assert.equal(cinema.swapSeatsInHall(5, 1), "Successful change of seats in the hall.")
//             assert.equal(cinema.swapSeatsInHall(5, 12), "Successful change of seats in the hall.")
//             assert.equal(cinema.swapSeatsInHall(20, 19), "Successful change of seats in the hall.")
//             assert.equal(cinema.swapSeatsInHall(20, 1), "Successful change of seats in the hall.")
//             assert.equal(cinema.swapSeatsInHall(1, 20), "Successful change of seats in the hall.")


//         })
//     })

//     describe('ticketPrice', () => {
//         let instance = null;
//         beforeEach(() => {
//             instance = cinema;
//         });

//         it('successful', () => {
//             expect(instance.ticketPrice('Premiere')).to.equal(12.00);
//             expect(instance.ticketPrice('Normal')).to.equal(7.50);
//             expect(instance.ticketPrice('Discount')).to.equal(5.50);
//         })
//         it('throws an error', () => {
//             assert.throws(() => {
//                 (instance.ticketPrice('something'))
//             },
//             Error,
//             'Invalid projection type.');

//             assert.throws(() => {
//                 (instance.ticketPrice('12'))
//             },
//             Error,
//             'Invalid projection type.');

//         });

//     })
// })


/**********************dealership**************************** */


// const { expect, assert} = require('chai');
// const dealership = require('./dealership.js');

// describe('dealership object', ()=>{

//     describe('init object', () => {
//         it('init' , () => {
//             expect(dealership).to.has.ownProperty('newCarCost');
//             expect(dealership).to.has.ownProperty('carEquipment');
//             expect(dealership).to.has.ownProperty('euroCategory');
//         })

//     });

//     describe('new car cost property', ()=> {
//         let instance = null;
//         beforeEach(() => {
//             instance = dealership;
//         });

//         it('has old model', ()=> {
//             expect(instance.newCarCost('Audi A4 B8', 25000)).to.equal(10000)
//         });
//         it('doesnt have old model', ()=> {
//             expect(instance.newCarCost('BMW', 25000)).to.equal(25000)
//         });

//     })
//     describe('car equipment', ()=> {
//         let instance = null;
//         beforeEach(() => {
//             instance = dealership;
//         });

//         it('takes two arrays', ()=> {
//             let result = instance.carEquipment(['heated seats', 'sliding roof', 'sport rims', 'navigation'], [0, 2, 3]);
//             let actial = JSON.stringify(result);
//             let expected= '["heated seats","sport rims","navigation"]';
//             expect(actial).to.equal(expected);
//         });

//     })

//     describe('euro category', ()=> {
//         let instance = null;
//         beforeEach(() => {
//             instance = dealership;
//         });

//         it('category lt 4', ()=> {
//             expect(instance.euroCategory(2)).to.equal('Your euro category is low, so there is no discount from the final price!');

//         });
//         it('category ge 4', ()=> {
//             expect(instance.euroCategory(4)).to.equal(`We have added 5% discount to the final price: 14250.`);

//         });


//     })




// })

/***********************pizzaplace*********************** */


// const { expect, assert } = require('chai');
// const pizzUni = require('./pizzaPlace.js');

// describe('PizzaPlace', () => {
//     describe('init', () => {
//         it('has own properties', () => {
//             expect(pizzUni).to.has.ownProperty('makeAnOrder');
//             expect(pizzUni).to.has.ownProperty('getRemainingWork');
//             expect(pizzUni).to.has.ownProperty('orderType');

//         })
//     });

//     describe('make an order', () => {
//         let instance = null;
//         beforeEach(() => {
//             instance = pizzUni;
//         });

//         it('throws an error', () => {
//             assert.throws(() => {
//                 (instance.makeAnOrder({a: 1}))
//             },
//             Error,
//             'You must order at least 1 Pizza to finish the order.');

//         })
//         let obj = {orderedPizza: 'Margarita', orderedDrink: 'Coke'};
//         it('ordered drink and pizza', ()=> {
//             expect(instance.makeAnOrder(obj)).to.equal(`You just ordered Margarita and Coke.`);
//         });
//         it('ordered pizza only', ()=> {
//             expect(instance.makeAnOrder({orderedPizza: 'Margarita'})).to.equal(`You just ordered Margarita`);
//         });
//     });

//     describe('get Remaining Work', ()=> {
//         let instance = null;
//         beforeEach(() => {
//             instance = pizzUni;
//         });
//         it('takes an array with status preparing', ()=> {
//             let obj = [{pizzaName: 'Marga', status: 'ready'}, {pizzaName: 'Marg', status: 'preparing'}];
//             expect(instance.getRemainingWork(obj)).to.equal(`The following pizzas are still preparing: Marg.`)
//         });
//         it('takes an array with status preparing', ()=> {
//             let obj = [{pizzaName: 'Marga', status: 'preparing'}, {pizzaName: 'Marg', status: 'preparing'}, {pizzaName: 'Margar', status: 'preparing'}];
//             expect(instance.getRemainingWork(obj)).to.equal(`The following pizzas are still preparing: Marga, Marg, Margar.`)
//         });

//         it('takes an array with status ready', ()=> {
//             let obj = [{pizzaName: 'Marga', status: 'ready'}, {pizzaName: 'Marg', status: 'ready'}];
//             expect(instance.getRemainingWork(obj)).to.equal('All orders are complete!');
//         })

//     })

//     describe('order type', ()=> {
//         let instance = null;
//         beforeEach(() => {
//             instance = pizzUni;
//         });

//         it('type order == carry out', ()=> {
//             expect(instance.orderType(10, 'Carry Out')).to.equal(9);
//         });

//         it('type order == delivery', ()=> {
//             expect(instance.orderType(10, 'Delivery')).to.equal(10);
//         });

//     })
// })


// ************************* REpository ---- TESTING A CLASS **************************************


// const { expect } = require('chai')
// const Repository = require('./repository.js')

// describe(`testing Repository class`, () => {
// 	let instance = {};

// 	beforeEach(() => instance = new Repository({
// 		name: 'string',
// 		age: 'number',
// 		birthday: 'object'
// 	}))


// 	describe('testing count prop', () => {
// 		it(`instance.count -> 0`, () => {
// 			expect(instance.count).to.eq(0)
// 		})

// 	})

// 	describe('testing .add()', () => {
// 		it(
// 			`valid obj passed as input: output -> its id in the collection`,
// 			() => {
// 				expect(instance.add({ name: '', age: 1, birthday: {} })).to
// 					.eq(0)
// 			}
// 		)
// 	})

// 	describe(`testing .getId()`, () => {
// 		it(
// 			`input ID which is not present in the data collection -> throw`,
// 			() => {
// 				expect(() => instance.getId(1)).to
// 					.throw('Entity with id: 1 does not exist!')
// 			}
// 		)
// 	})

// 	describe(`testing .update()`, () => {
// 		it(
// 			`input ID which is not present in the data collection -> throw`,
// 			() => {
// 				expect(() => instance.update(0, {},)).to
// 					.throw(`Entity with id: 0 does not exist!`)
// 			}
// 		)
// 		it(`any property is missing from input object -> throw Error`, () => {
// 			instance.add({ name: '', age: 0, birthday: {}, })
// 			expect(() => instance.update(
// 				0,
// 				{ age: 1, birthday: { date: 0 } }
// 			)).to.throw
// 		})
// 		it(`typeof input[name] !== string -> throw TypeError`, () => {
// 			instance.add({ name: '', age: 0, birthday: {}, })
// 			expect(() => instance.update(
// 				0,
// 				{ name: 0, age: 1, birthday: { date: 0 } }
// 			)).to.throw(TypeError)
// 		})
// 	})

// 	describe(`testing .del()`, () => {
// 		it(`deletes index properly`, () => {
// 			instance.add({ name: '', age: 1, birthday: {} })
// 			instance.add({ name: '', age: 1, birthday: {} })
// 			instance.del(1)
// 			expect(instance.data.has(1)).to.eq(false)
// 		})
// 		it(`throws on index which does not exist in the collection`, () => {
// 			expect(() => instance.del(-1)).to
// 				.throw(`Entity with id: -1 does not exist!`)
// 		})
// 	})
// })

/******************************CHRISTMAS MOVIES************************************** */


// const { expect, assert } = require('chai')
// const ChristmasMovies = require('./christmasMovies.js')

// describe('Testing ChristmasMovies class', () => {
//     let instance = {};
//     beforeEach(() => instance = new ChristmasMovies());

//     describe('init', () => {
//         it('has own props', () => {
//             expect(instance).to.has.ownProperty('movieCollection');
//             expect(instance).to.has.ownProperty('watched');
//             expect(instance).to.has.ownProperty('actors');

//         });
//     })

//     describe('method buy movie', () => {
//         it(

//             `input movie which is present in movie collection -> throw`,
//             () => {
//                 instance.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
//                 expect(() => instance.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern'])).to
//                     .throw(`You already own Home Alone in your collection!`)
//             }
//         );

//         it(
//             `input movie which is not present in movie collection`,
//             () => {
//                 expect(instance.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern'])).to.equal(`You just got Home Alone to your collection in which Macaulay Culkin, Joe Pesci, Daniel Stern are taking part!`)
//             }
//         )

//         it(
//             `input movie which is not present in movie collection`,
//             () => {
//                 expect(instance.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Macaulay Culkin', 'Daniel Stern'])).to.equal(`You just got Home Alone to your collection in which Macaulay Culkin, Joe Pesci, Daniel Stern are taking part!`)
//             }
//         )


//     })

//     describe('method discard Movie', () => {
//         it('movie present in movie collection and its been watched', () => {
//             instance.buyMovie('The Grinch', ['Benedict Cumberbatch', 'Pharrell Williams']);
//             instance.watchMovie('The Grinch');
//             expect(instance.discardMovie('The Grinch')).to.equal(`You just threw away The Grinch!`)

//         });
//         it('movie present in movie collection and its been watched', () => {
//             instance.buyMovie('The Grinch', ['Benedict Cumberbatch', 'Pharrell Williams']);
//             expect(() => instance.discardMovie('The Grinch'))
//                 .to.throw(`The Grinch is not watched!`)

//         });
//         it('movie not present in movie collection', () => {

//             expect(() => instance.discardMovie('The Grinch'))
//                 .to.throw(`The Grinch is not at your collection!`)

//         });
//     })

//     describe('watch movie method', () => {
//         it('movie present in the collection', () => {
//             instance.buyMovie('Home Alone', ['Macaulay Culkin']);
//             instance.watchMovie('Home Alone');
//             expect(instance.watched['Home Alone']).to.equal(1);
//         });

//         it('movie present in the collection', () => {
//             instance.buyMovie('Home Alone', ['Macaulay Culkin']);
//             instance.watchMovie('Home Alone');
//             instance.watchMovie('Home Alone');
//             expect(instance.watched['Home Alone']).to.equal(2);
//         });

//         it('movie present in the collection', () => {
//             instance.buyMovie('Home Alone', ['Macaulay Culkin']);
//             expect(() => instance.watchMovie('Home Alone 2'))
//                 .to.throw('No such movie in your collection!')

//         });
//     })

//     describe('favourite movie', () => {
//         it('have favourite movie', () => {
//             instance.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
//             instance.buyMovie('Home Alone 2', ['Macaulay Culkin']);
//             instance.watchMovie('Home Alone');
//             instance.watchMovie('Home Alone');
//             instance.watchMovie('Home Alone');
//             instance.watchMovie('Home Alone 2');

//             expect(instance.favouriteMovie()).to.equal(`Your favourite movie is Home Alone and you have watched it 3 times!`);
//         })

//         it('does not have a favourite movie', ()=> {
//             instance.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
//             instance.buyMovie('Home Alone 2', ['Macaulay Culkin']);
//             expect(()=> instance.favouriteMovie()).to.throw('You have not watched a movie yet this year!')
//         })
//     })

//     describe('favourite actor method', ()=> {
//         it('has fav actor', ()=> {
//             instance.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
//             instance.buyMovie('Home Alone 2', ['Macaulay Culkin']);
//             instance.watchMovie('Home Alone 2');
//             instance.watchMovie('Home Alone');
//             instance.watchMovie('Home Alone 2');
//             expect(instance.mostStarredActor()).to.equal(`The most starred actor is Macaulay Culkin and starred in 2 movies!`)

//         })

//         it('does not have fav actor', ()=> {

//             expect(()=> instance.mostStarredActor()).to.throw('You have not watched a movie yet this year!')
//         })

//     })

// })



//*********************** VACATIONER********************************** */





/*****************SHAPES*************** */

// const assert = require('assert');
// const Shapes = require('./shapes.js');

// describe('Calculate the Area of Shapes', function() {
//     describe('areaOfRectangle', function() {
//         it('should return the area of a rectangle', function() {
//             assert.equal(Shapes.areaOfRectangle(3, 8), 24);
//         });

//         it('should throw a TypeError for string values', function() {
//             assert.throws(function() {
//                 Shapes.areaOfRectangle('6', '12')
//             }, TypeError, 'No string parameters');
//         });

//         it('should throw an Error for negative values', function() {
//             assert.throws(function() {
//                 Shapes.areaOfRectangle(-20, -12)
//             }, Error, 'No negative numbers');
//         });
//     });
// });


/****************ASYNC SHAPES************* */

// const { expect, assert } = require('chai');
// let asyncShapes = require('./AsyncShapes.js');
// let list = ['Rectangle', 'Triangle', 'Circle', 'Trapezium'];
// let shapesObj;

// const {assert} = require('chai');
// const asyncShapes = require('./AsyncShapes.js');
// let list = ['Rectangle', 'Triangle', 'Circle', 'Trapezium'];
// let shapesObj = new asyncShapes.AsyncShapes(list);

// describe('Async Shapes Functions', function() {
//     it ('should validate an existing shape', function() {
//         shapesObj.validateShape('Square', function(validShape) {
//             assert.equal(validShape, true);
//         });
//     });
// });

// beforeEach('Load Shapes Array', function(){
//     shapesObj  = new asyncShapes.AsyncShapes(list)
// });

// describe('Async Shapes Functions', function() {
//     it ('should return true for an existing shape', function(done) {
//         shapesObj.validateShape('Circle', function(validShape) {
//             assert.equal(validShape, true);
//             done();
//         });
//     });

//     it ('should get a shape by ID', function(done) {
//         shapesObj.getShape(3, function(result) {
//             assert.equal(result, 'Trapezium');
//             done();
//         });
//     });

//     it ('should increase the number of shapes by 1', function(done) {
//         shapesObj.addShape('Parallelogram', function() {
//             assert.equal(list.length, 5);
//             done();
//         });
//     });

//     it ('should remove a shape by ID', function(done) {
//         shapesObj.removeShape(2, function() {
//             assert.equal(list.length, 4);
//             done();
//         });
//     });
// })


/********************ANIMALS*********************** */


// const chai = require('chai')
// const should = chai.should()
// const expect = chai.expect
// const animals = require('./animals.js')
// const Cat = animals.Cat
// const Dog = animals.Dog
// const Snake = animals.Snake
// describe('Animal', function () {
//     //each animal will take in name and age as an argument
//     const spot = Dog('Spot', 9)
//     const sassy = Cat('Sassy', 7)
//     const hiss = Snake('Hiss', 3)
//     //#1st write a test for the things the animals have in common 
//     it('All animals should eat, sleep, and bite', function () {
//         [spot, sassy, hiss].forEach(animal => {
//             animal.eat().should.equal(animal.name + ' is eating.')
//             animal.sleep().should.equal('..zzZZZ')
//             animal.bite().should.equal(animal.name + ' bit you!')
//             })
//         });

//   it('cats and dogs want to cuddle', function () {
//             sassy.cuddle().should.equal('Sassy wants to cuddle!')
//             spot.cuddle().should.equal('Spot wants to cuddle!')
//         })
//   it('snakes do not cuddle', function () {
//             try {
//                 hiss.cuddle()
//             } catch (err) {
//                 should.exist(err)
//             }
//         })
//   it('Objects should not be an created using classical inheritance', function () {
//             let constString = spot.constructor.toString()
//             constString.substring(0, 5).should.not.equal('class')
//         })
    
//   it('Objects should not be created using prototypal inheritance', function () {
//             let constString = spot.constructor.toString()
//             let containsThisKeyword = /this/g.test(construct)
//             expect(containsThisKeyword).to.equal(false)
//         })
// })
