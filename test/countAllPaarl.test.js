CommonJS :
  assert = require('assert');
 let countAllPaarl = require("../countAllPaarl");

 describe('Testing the countAllPaarl function' , function(){
    it( 'should return 2 plates for allPaarl', function(){
        assert.equal(2, countAllPaarl('CJ 345 123, CK 345, CJ 123'));
         });
    it('should return 3 plates for allPaarl ' , function(){
        assert.equal(3, countAllPaarl('CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123'));
 });
    it("should return 0 plates for allPaarl " , function () {
        assert.equal(0, countAllPaarl('CL 345 123, CK 345, CA 123 , CA 344 , CF 555'));
       
    });

});