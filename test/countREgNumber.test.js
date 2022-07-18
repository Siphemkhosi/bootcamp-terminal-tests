CommonJS :
  assert = require('assert');
 let countREgNumber = require("../countREgNumber");

 describe('Testing the countRegNumber function' , function(){
    it( 'should return 3 ', function(){
     
      var regCount = countREgNumber('CA 182736,CY 523519,CJ 812328')
      assert.equal(regCount, 3);
       
        
        
         });


         it('should rreturn 1  ' , function(){
          var regCount = countREgNumber('CA 182736')
          assert.equal(regCount, 1);
  });
     it("should return  4" , function () {
      var regCount = countREgNumber('CA 182736, CF 999991, CA 123567, CY 222987')
      assert.equal(regCount, 4);
    
       
   });

 });