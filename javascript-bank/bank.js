/* exported Bank */
function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccounts = function (holder, balance) {
  if (balance > 0 && typeof balance === 'number' && balance % 1 === 0) {
    var newAccount = new Account(this.nextAccountNumber, holder);
    newAccount.deposit(balance);
    this.accounts.push(newAccount);
    this.nextAccountNumber = this.nextAccountNumber + 1;
  } else {
    return null;
  }
};
