let bankAccount = []
let nextId = 1

function createAccount(name, initialBalance) {
   const account = {
    id: nextId,
    owner: name,
    balance: initialBalance
   }
   nextId++
   bankAccount.push(account)
}

function deposit(id, amount) {
  const account = bankAccount.find(b => b.id === id)
  if(!account) {
    console.log("you dont have an account")
    return
  }
  else if(amount <= 0) {
    console.log("not valid amount")
    return
  }
  account.balance += amount
  console.log("successfully deposit " + amount)
  
}

function withdraw(id, amount) {
  const account = bankAccount.find(b => b.id === id)
  if(!account) {
    console.log("you dont have an account")
    return
  } else if(amount <= 0) {
    console.log("not valid amount");
    return
  }
  else if(amount > account.balance) {
    console.log("not enough balance")
    return
  }
  account.balance -= amount
  console.log("successfully witddraw amount" + amount)
}

function transfer(fromId, toId, amount) {
  const fId = bankAccount.find(b => b.id === fromId)
  const tId = bankAccount.find(b => b.id === toId)
  if(!fId) {
    console.log("this account is not available")
    return
  }
  else if(!tId) {
    console.log("this account is not available")
    return
  }
  else if(amount <= 0) {
    console.log("not valid amount")
    return
  }
  else if(fId.balance < amount) {
    console.log("not enough balance")
    return
  }
  tId.balance += amount
  fId.balance -= amount
  console.log("successfully transfer")

}

function printAccount() {
  for(let account of bankAccount) {
    console.log(account.owner + " - " + account.balance) 
  }
}

createAccount("Carl", 800)
createAccount("james", 400)
printAccount()

deposit(3,)
withdraw(2, -1)
transfer(1,2,400)
printAccount()