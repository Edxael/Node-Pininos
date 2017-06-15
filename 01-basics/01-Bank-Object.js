console.log("Bank Account");
console.log("");

var bank = {
  accounts: [],
  getBalance:function(){
    console.log("Your curretn balance is: ", this.balance);
    console.log("");
  },
  deposit: function(user, amount){
    var move = 0;

    if(typeof(amount) !== 'number'){
      console.log("Cant plete Deposit, amount is NOT a NUMBER.")
      move += 1;
    }else{
      for(x in this.accounts){
        if(user === this.accounts[x]["user"]){
          move += 1;
          console.log("   Report of Deposit in ", user, " Account:");
          console.log("Balance before Deposit: ", this.accounts[x]["balance"]);
          console.log("Amount to deposit: ", amount);
          this.accounts[x]["balance"] += amount;
          console.log("Balance after Deposit: ", this.accounts[x]["balance"]);
        }
      }
    }
    if(move === 0){console.log("No account with user: ", user);}
    move = 0;
    console.log("");
  },
  withdraw: function(user, amount){
    var move = 0;

    if(typeof(amount) !== 'number'){
      console.log("Cant plete Withraw, amount is NOT a NUMBER.")
      move += 1;
    }else{
      for(x in this.accounts){
        if(user === this.accounts[x]["user"]){
          move += 1;
          console.log("   Repor of Withraw in ", user, " Account:");
          console.log("Banalce before Withraw: ", this.accounts[x]["balance"]);
          console.log("Amount to Withraw: ", amount);
          this.accounts[x]["balance"] -= amount;
          console.log("Banalce after Withraw: ", this.accounts[x]["balance"]);
        }
      }
    }
    if(move === 0){console.log("No account with user: ", user);}
    move = 0;
    console.log("");
  },
  createAccount(user, balance){

    this.accounts.push(
      {
        user: user,
        balance: balance
      }
    );
  },
  getAccount(user){
    var move = 0;
    for(x in this.accounts){
      if(this.accounts[x]["user"] === user){
        console.log(this.accounts[x]);
        move += 1;
      }
    }
    if(move === 0){console.log("No account with user: ", user);}
    move = 0;
  }
}


bank.createAccount("Edxael", 55);
bank.createAccount("Mario", 15);
bank.createAccount("Steward", 12);
console.log( bank.accounts );
console.log("");

bank.deposit("Mario", "k");
console.log( bank.accounts );
console.log("");


bank.getAccount("Mario");
