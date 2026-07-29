function createAccount(name, amount) {
    let owner = name
    let balance = amount
    return {
        deposit: function(amount) {
             balance += amount
        },
        withdraw: function(amount) {
             balance -= amount
        },
        getBalance: function() {
            return "balance: " + balance
        },
        getOwner: function() {
            return "owner: " + owner
        }

    }
}

const carl = createAccount("car", 400)

console.log(carl.balance)
console.log(carl.getOwner())