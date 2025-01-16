function amountOfMoneySpentCustomers(customersMoney) {
    let resultSum = 0;
    customersMoney.forEach(customerMoney => {
        resultSum += customerMoney;
    });
    return resultSum;
  }
  
  let richestCustomers = [10000, 20000, 30000];
  console.log(amountOfMoneySpentCustomers(richestCustomers));