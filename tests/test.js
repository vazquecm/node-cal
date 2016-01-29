'use strict';

const { expect } = require('chai');
const { execSync } = require('child_process');

describe('cal', () => {
  describe('CLI', () => {
    it('should handle the current month', () => {
      const goal = execSync('cal').toString();
      const output = execSync('./cal.js').toString();
      expect(output).to.equal(goal);
    });
  });

// code below is testing for years in zellers, for each "it" you will need a goal and output then what your "expect" outcome will be //
  describe("Zeller's congruence", () => {
     const zellers = require('../lib/zellers.js');

    describe('.modifiedYear', () => {

      it('returns 2014 for Jan 2015', () => {
        const goal = execSync('cal').toString();
        const output = execSync('./cal.js 2016 1').toString();
        expect(zellers.modifiedYear(2015, 1)).to.equal(2014);
      });

       it('returns 2015 for Feb 2015', () => {
        const goal = execSync('cal').toString();
        const output = execSync('./cal.js 2016 2').toString();
        expect(zellers.modifiedYear(2016, 2)).to.equal(2016);
      });

       it('returns 2017 for March 2017', () => {
        const goal = execSync('cal').toString();
        const output = execSync('./cal.js 2017 3').toString();
        expect(zellers.modifiedYear(2017, 3)).to.equal(2017);
      });
    });

    // code below is testing for months in zellers //
    describe('.modifiedMonth', () => {

      it('return 13 for January', () => {
        const goal = execSync('cal').toString();
        const output = execSync('./cal.js 2016 1').toString();
        expect(zellers.modifiedMonth(1)).to.equal(13);
      });

      it('return 14 for February', () => {
        const goal = execSync('cal').toString();
        const output = execSync('./cal.js 2016 2').toString();
        expect(zellers.modifiedMonth(2)).to.equal(14);
      });

      it('return 3 for March', () => {
        const goal = execSync('cal').toString();
        const output = execSync('./cal.js 2016 3').toString();
        expect(zellers.modifiedMonth(3)).to.equal(3);
      });
  });


// code below is testing for days in zellers //
   describe('.getDay', () => {

       it('returns 2 (Tuesday) for March 1, 2016', () => {
         const goal = execSync('cal').toString();
         const output = execSync('./cal.js 2016 3').toString();
         expect(zellers.getDay(2016, 3, 1)).to.equal(2);
      });

      // 2000, 3, 1 === 3
      it('returns 3 (Wed) for March 1, 2000', () => {
         const goal = execSync('cal').toString();
         const output = execSync('./cal.js 2000 3').toString();
         expect(zellers.getDay(2000, 3, 1)).to.equal(3);
       });

      // 2100, 3, 1 === 3
       it('returns 1 (Mon) for March 2, 2200', () => {
         const goal = execSync('cal').toString();
         const output = execSync('./cal.js 2200 3').toString();
         expect(zellers.getDay(2100, 3, 1)).to.equal(1);
         });

       // 2200, 3, 2 === 0
       it('returns 0 (Sun) for March 2, 2200', () => {
         const goal = execSync('cal').toString();
         const output = execSync('./cal.js 2200 3').toString();
         expect(zellers.getDay(2200, 3, 2)).to.equal(0);
         });

      // 2300, 3, 1 === 4
        it('returns 4 (Thur) for March 2, 2200', () => {
         const goal = execSync('cal').toString();
         const output = execSync('./cal.js 2200 3').toString();
         expect(zellers.getDay(2300, 3, 1)).to.equal(4);
         });
       });
  });
});
