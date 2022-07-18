CommonJS :
  assert = require('assert');
 let yearsAgo = require("../yearsAgo");

 describe('Testing the yearsAgo function' , function(){
    it( 'should return 46 years from 1976 to current year', function(){
        assert.equal((yearsAgo(1976)), 46)

         });


         it('should rreturn 11  years from 2011 to current year ' , function(){
            assert.equal(yearsAgo(2011), 11)
  });
     it("should return 23 years from 1999 to current year " , function () {
        assert.equal((yearsAgo(1999)), 23)
       
   });

 })