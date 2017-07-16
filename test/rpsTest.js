const expect = require('chai').expect;
const rockPaperScissors = require("../rps");

describe('RockPaperScissors', () => {
    describe('smoke tests', () => {
        it('should exists', () => {
            expect(rockPaperScissors).to.exist;
        });

        it('should be an object', () => {
            expect(rockPaperScissors).to.be.a('function');
        });
    });
    describe('tie conditions', () => {
        it('should return tie on "rock" vs "rock"', () =>{
           expect(rockPaperScissors('rock', 'rock')).to.equal('tie');
        });
        it('should return tie on "paper" vs "paper"', () =>{
            expect(rockPaperScissors('paper', 'paper')).to.equal('tie');
        });
        it('should return tie on "scissors" vs "scissors"', () =>{
            expect(rockPaperScissors('scissors', 'scissors')).to.equal('tie');
        });
    });
    describe('playerA winning', () => {
        it('should return playerA on "rock" vs "scissors"', () =>{
            expect(rockPaperScissors('rock', 'scissors')).to.equal('playerA');
        });
        it('should return playerA on "paper" vs "rock"', () =>{
            expect(rockPaperScissors('paper', 'rock')).to.equal('playerA');
        });
        it('should return playerA on "scissors" vs "paper"', () =>{
            expect(rockPaperScissors('scissors', 'paper')).to.equal('playerA');
        });
    });
    describe('playerB winning', () => {
        it('should return playerB on "scissors" vs "rock"', () =>{
            expect(rockPaperScissors('scissors', 'rock')).to.equal('playerB');
        });
        it('should return playerB on "rock" vs "paper"', () =>{
            expect(rockPaperScissors('rock','paper')).to.equal('playerB');
        });
        it('should return playerB on "paper" vs "scissors"', () =>{
            expect(rockPaperScissors('paper', 'scissors')).to.equal('playerB');
        });
    });

});
