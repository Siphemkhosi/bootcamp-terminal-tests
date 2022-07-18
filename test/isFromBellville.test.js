CommonJS :
  assert = require('assert');
 let isFromBellville = require("../isFromBellville");

 describe('Testing the isFromBellville function' , function(){
    it('should return true for Bellville if reg is CY' , function(){
        assert.equal(isFromBellville('CY 123'), true);

    });
    it('should return false for Bellville if reg is not  CY' , function(){
        assert.equal(isFromBellville('CJ 123'), false);
    });
    it("should return  undefined for Bellville if there's no specified reg" , function () {
        assert.equal(isFromBellville('233 CY'), false)
    });

});

