describe("AdgActionRegistry", function(){
    it("Can be Instantiated", function(){
        var x1 = new AdgActionRegistry();
        expect(x1).toBeDefined();
    });

    describe("register method", function(){
        it("can register actions when given a function as param", function(){
            var x2 = new AdgActionRegistry();
            window.x2 = x2;
            var func = function(){alert('test'); };
            x2.register('alertEvent', func);
            var contains = false;
            //loop through the actions see if our funciton is in there
            for(var i in x2.actions.alertEvent){
               var action =  x2.actions.alertEvent[i];
               if(action.toString() == func.toString()){
                contains = true;
               }
            }
            expect(contains).toBeTruthy();
        });


        it("can register actions when given an array of functions as param", function(){
            var x3 = new AdgActionRegistry();
            var func1 = function(){alert('Hello'); };
            var func2 = function(){alert('world'); };
            var funcArray = new Array(func1, func2);
            
            x3.register('alertEvent', funcArray);
            var contains = false;
            
            //loop through the actions see if our funciton is in there
            for(var i in x3.actions.alertEvent){
               var action =  x3.actions.alertEvent[i];
               
               if(action.toString() == func2.toString()){
                contains = true;
               }
            }

            expect(contains).toBeTruthy();


        });


        //exception handling tests here...
        it("throws an exception if passed an invalid type (int, string, object)", function(){
            var x4 = new AdgActionRegistry();
            expect(function(){
                     x4.register('myTrigger', 1 );
            }).toThrow();

            expect(function(){
                     x4.register('myTrigger', "stringy" );
            }).toThrow();

            expect(function(){
                     x4.register('myTrigger', {asdf:1} );
            }).toThrow();
        });

    });


    
});
