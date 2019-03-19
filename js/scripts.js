// Business Logic for BankAccount ---------

// contstructor!
function Account(name, balance) {
  this.name = name;
  this.balance = balance;
}

function AccountChanges(deposit, withdrawal) {
  this.deposit = deposit;
  this.withdrawal = withdrawal;
}

Account.prototype.newBalance = function() {
  this.balance = initialDeposit + deposit - withdrawal;
}



$(document).ready(function(){

  $('form#inputform').submit(function(event){
    event.preventDefault();


    var newAccount = new Account();
    newAccount.name = $('#name').val();

    var depWith = new AccountChanges()

    initialDeposit = parseInt($('#initial-deposit').val()) || 0;
    deposit = parseInt($('#deposit').val()) || 0;
    withdrawal = parseInt($('#withdrawal').val()) || 0;

    /newAccount.balance = newAccount.newBalance(initialDeposit,deposit,withdrawal)






      $("#show-balance").show();
      $(".current-balance").text(newAccount.balance);

  });


});
