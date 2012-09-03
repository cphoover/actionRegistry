function AdgActionRegistry(){
        this.actions = {};
}
AdgActionRegistry.prototype.do = function(trigger){
    if(typeof this.actions[trigger] == "undefined"){ throw "no trigger found named: " + trigger; }
    for(var i in this.actions[trigger]){
        this.actions[trigger][i]();
    }
};

AdgActionRegistry.prototype.register = function(trigger, action){
 //if the index hasn't been initialized initialize it..
 if(typeof this.actions[trigger] == 'undefined'){
    this.actions[trigger] = new Array();
 }
//if paramater is a function just push it.
 if(typeof action == "function"){
        this.actions[trigger].push(action);
 }
 else if(action instanceof Array){
    for(var i in action){
        this.register(trigger, action[i]);
    }
 }
 else{
    throw "Invalid type passed to register method. " + trigger + " : " + action;
 }
}
