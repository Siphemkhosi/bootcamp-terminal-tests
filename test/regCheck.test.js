CommonJS :
  assert = require('assert');
 let regCheck = require("../regCheck");

 describe('Testing the regCheck function' , function(){
    it( 'should return true if reg isGP ', function(){
        var isGP = regCheck('DV 23 NB GP', 'GP');
        
        assert.equal(regCheck('DC 55 YU GP', 'GP'), true);
        
        
         });


         it('should rreturn false for isGP if reg is not GP ' , function(){
            var isGP = regCheck('DV 23 NB GP', 'GP');
            assert.equal(regCheck('DC 55 YU GP', 'EC'), false);
  });
     it("should return  true if reg is Bellville" , function () {
    var isBellville = regCheck('CY 189-012', 'CY');
    
       
   });

 });