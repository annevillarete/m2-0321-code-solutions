/* exported Account */
function Account (number, holder) {
    this.number = number;
    this.holder = holder;
    this.transactions = [];
};

var account = new Account(); 

Account.prototype.deposit = function(amount) {
    if (this._isPositive(amount)) {
      this.holder += amount;
      return true;
    } else {
    return false;
  }
}
  
Account.prototype.withdraw = function(amount) {
    if (this._isPositive(amount)) {
      this.holder -= amount;
      return true;
    }
    return false;
  };

Account.prototype._isPositive = function(amount) {
    const isPositive = amount > 0;
    if (!isPositive) {
      return false;
    }
    return true;
  }

Account.prototype.getBalance = function () {
    this.transactions++;
};

