CommonJS :
  assert = require('assert');
 let totalPhoneBill = require("../totalPhoneBill");

 describe('Testing the totalPhoneBill function' , function(){
    it( 'should return R7.45 for 3 sms and 2 calls', function(){
        assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'));
         });


         it('should rreturn R5.50 for 2 calls ' , function(){
            assert.equal('R5.50', totalPhoneBill('call, call'));
  });
     it("should return  rreturn R1.95 for 3 sms" , function () {
        assert.equal('R1.95', totalPhoneBill('sms, sms, sms'));
       
   });

 });