function withdraw(account, amount) {
    account.total -= amount;
    return account.total;
}

export default withdraw;