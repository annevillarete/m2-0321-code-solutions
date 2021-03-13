/* exported Transaction */
function Transaction (type, amount) {
    this.type = 'deposit'||'withdrawal';
    this.amount = 10;
};

var aTransaction = new Transaction();

Transaction.prototype.getTransaction = function () {
    var oneTransaction = this.type + this.amount;
    return oneTransaction;
};





