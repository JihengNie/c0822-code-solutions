/* exported Transaction */
function Transaction(type, amount) {
  if (typeof amount === 'number') {
    this.type = type;
    this.amount = amount;
  } else {
    return 'Please enter a valid number';
  }
}
