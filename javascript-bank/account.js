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

    // if (this.transactions = []) {
    //       return 0;
    //     } else { 
    //       this.transactions++;
    //     }
       
    //   };

// function Stopwatch(startTimeInSeconds) {
//   this.elapsedSeconds = startTimeInSeconds;
// }

// Stopwatch.prototype.tick = function () {
//   this.elapsedSeconds++;
// };


// Stopwatch.prototype.getTime = function () {
//   var seconds = this.elapsedSeconds;
//   var secondsPerHour = 3600;
//   var hours = Math.floor(seconds / secondsPerHour);
//   seconds -= (secondsPerHour * hours);
//   var secondsPerMinute = 60;
//   var minutes = Math.floor(seconds / secondsPerMinute);
//   seconds -= (secondsPerMinute * minutes);
//   hours = hours.toString();
//   hours = hours.padStart(2, '0');
//   minutes = minutes.toString();
//   minutes = minutes.padStart(2, '0');
//   seconds = seconds.toString();
//   seconds = seconds.padStart(2, '0');
//   return hours + ':' + minutes + ':' + seconds;
// };

// Stopwatch.prototype.reset = function () {
//   this.elapsedSeconds = 0;
// };