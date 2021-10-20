const { expect } = require('chai');
const { beforeEach } = require('mocha');
const cinema = require('./cinemaSecondAttempt.js');


describe('Testing Cinema Object', ()=> {
    
    describe('init the cinema object', ()=> {
        it('has own props', ()=> {
            expect(cinema).to.has.ownProperty('showMovies');
            expect(cinema).to.has.ownProperty('ticketPrice');
            expect(cinema).to.has.ownProperty('swapSeatsInHall');

        })
    })

    describe('show movies', ()=> {
        it('takes empty array', ()=> {
            expect(cinema.showMovies([])).to.equal('There are currently no movies to show.');
        });
        it('takes array.length > 0', ()=> {
            expect(cinema.showMovies(['Home Alone', 'The Grinch', 'Puzzle']))
            .to.equal('Home Alone, The Grinch, Puzzle');
        });
        it('takes array.length > 0', ()=> {
            expect(cinema.showMovies(['Home Alone']))
            .to.equal('Home Alone');
        });

    })

    describe('ticket Price', ()=> {
        it('takes projection type present', ()=> {
            expect(cinema.ticketPrice('Premiere')).to.equal(12.0);
            expect(cinema.ticketPrice('Normal')).to.equal(7.5);
            expect(cinema.ticketPrice('Discount')).to.equal(5.5);
        });

        it('takes projection price not present', ()=> {
            expect(()=> cinema.ticketPrice('some')).to.throw('Invalid projection type.');
            expect(()=> cinema.ticketPrice('12')).to.throw('Invalid projection type.');
        })
    })

    describe('swap seats in hall', ()=> {
        it('takes valid seat numbers', ()=> {
            expect(cinema.swapSeatsInHall(1, 20)).to.equal("Successful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(20, 1)).to.equal("Successful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(4, 5)).to.equal("Successful change of seats in the hall.")
        })

        it('takes invalid seat numbers', ()=> {
            expect(cinema.swapSeatsInHall('a', 20)).to.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall([1], 5)).to.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(1.5, 5)).to.equal("Unsuccessful change of seats in the hall.")
            expect(cinema.swapSeatsInHall(-1, 1)).to.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(0, 1)).to.equal("Unsuccessful change of seats in the hall.");

            expect(cinema.swapSeatsInHall(20, 21)).to.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(2, 'a')).to.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(2, [1])).to.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(2, 1.5)).to.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(1, 0)).to.equal("Unsuccessful change of seats in the hall.");

            expect(cinema.swapSeatsInHall(0, 0)).to.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(0, 21)).to.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(21, 0)).to.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(0, 1)).to.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(21, 0)).to.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(21, 21)).to.equal("Unsuccessful change of seats in the hall.");


        })

        
    })
})