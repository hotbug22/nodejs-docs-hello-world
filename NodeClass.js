function Class() {
    this.name = 'Hello there!';
    this.message;
}

Class.prototype.setMessage = function (msg) {
    this.message = msg;
    
}

Class.prototype.getMessage = function(){
    return this.message;
}

module.exports = Class;