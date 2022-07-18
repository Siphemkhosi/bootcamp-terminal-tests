CommonJS :
  assert = require('assert');
 let transportFee = require("../transportFee");

 describe('Testing the transportFee function' , function(){
    it( 'should return free for nightshift', function(){
        assert.equal(transportFee('nightshift'), 'free', 'for night shift return free');

         });


         it('should rreturn R10 for afternoon' , function(){
            assert.equal(transportFee('afternoon'), 'R10');
  });
     it("should return  return R20 for morning" , function () {
        assert.equal(transportFee('morning'), 'R20');
       
   });

 });
