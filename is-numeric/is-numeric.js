// Write code to create a function that accepts a string and 
//determines if the string is a valid number. You may not use any regex, built-in methods type 
//conversion to accomplish this.

var isNumeric = function(str) {
    var string = str
    var newString = isNaN(str);
    if(newString){
        return false;
    }
    else if(string === ""){
        return false;
    }
    else{
        return true;
    }

};
