/* exported Bank */
function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  if (balance > 0 && typeof balance === 'number' && balance % 1 === 0 && balance) {
    var newAccount = new Account(this.nextAccountNumber, holder);
    newAccount.deposit(balance);
    this.accounts.push(newAccount);
    this.nextAccountNumber = this.nextAccountNumber + 1;
    return newAccount.number;
  } else {
    return null;
  }
};

Bank.prototype.getAccount = function (number) {
  if (this.accounts.length > number - 1) {
    return this.accounts[number - 1];
  } else {
    return null;
  }
};

Bank.prototype.getTotalAssets = function () {
  if (this.accounts.length === 0) {
    return 0;
  }
  var total = 0;
  for (var i = 0; i < this.accounts.length; i++) {
    total = total + this.accounts[i].getBalance();
  }
  return total;
};
