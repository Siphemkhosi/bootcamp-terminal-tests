CommonJS :
  assert = require('assert');
 let findItemsOver20 = require("../findItemsOver20");

 describe('Testing the findItemsOver20 function' , function(){
    it( 'should return results of qty over 20 ', function(){
        var itemList = [
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27},
            {name : 'apples', qty : 3},
        ];
        
        var results = [
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27},
        ];
        assert.deepEqual(results, findItemsOver20(itemList));
        
         });
         it( 'should return results2 of qty over 20', function(){
            var itemList2 = [
                {name : 'apples', qty : 10},
                {name : 'pears', qty : 19},
                {name : 'bananas', qty : 17},
                {name : 'apples', qty : 3},
            ];
            
            var results2 = [];
            
            assert.deepEqual(results2, findItemsOver20(itemList2));
            
             });
    
             it( 'should return should return results3 of qty over 20', function(){
                var itemList3 = [
                    {name : 'apples', qty : 40},
                    {name : 'pears', qty : 20},
                    {name : 'bananas', qty : 23},
                    {name : 'apples', qty : 37}
                ];
                
                var results3 = [
                    {name : 'apples', qty : 40},
                    {name : 'bananas', qty : 23},
                    {name : 'apples', qty : 37}
                ];
                
                assert.deepEqual(results3, findItemsOver20(itemList3));
                 });
        
    
        
    


});