Action Registry v 0.0.1
==============

**a super super simple event hook class (contains two methods)**


## register(trigger, action)

**Very simply takes actions argument adds them to the index of the actions property of the object Where trigger is the key.**

Actions can either be a function or an array of functions. If the actions paramater is an array of functions is the register method will call itself and recursively register each function of the array. If an invalid type (not a function or array) is passed to this method an exception is thrown.

##### Usage example:

	  var example1 = new AdgActionRegistry();
	  var func = function(){alert('Helloworld')};
	  exmple1.register('alertHelloWorld', func);
	  
	  
##### Usage example:

	  var example2 = new AdgActionRegistry();
            var func1 = function(){alert('Hello'); };
            var func2 = function(){alert('world'); };
            var funcArray = new Array(func1, func2);
            
            example2.register('alertHelloWorld', funcArray);

## trigger(trigger)
**Very simply invoke all the functions registered to that trigger**
trigger index of actions property is looped through and all functions therein are invoked. There is no guarentee that the functions will execute sequentially.  As of current there is no option to enable sequential execution of functions.
##### Usage example:
	
	example2.trigger("alertHelloWorld");
	
	//result: alerts "Hello" and alerts "world"
