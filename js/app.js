class UI {
  constructor() {
    this.budgetFeedback = document.querySelector(".budget-feedback");
    this.expenseFeedback = document.querySelector(".expense-feedback");
    this.budgetForm = document.getElementById("budget-form");
    this.budgetInput = document.getElementById("budget-input");
    this.budgetAmount = document.getElementById("budget-amount");
    this.expenseAmount = document.getElementById("expense-amount");
    this.balance = document.getElementById("balance");
    this.balanceAmount = document.getElementById("balance-amount");
    this.expenseForm = document.getElementById("expense-form");
    this.expenseInput = document.getElementById("expense-input");
    this.amountInput = document.getElementById("amount-input");
    this.expenseList = document.getElementById("expense-list");
    this.itemList = [];
    this.itemID = 0;
  }
  //submit budget method
  submitBudgetForm(){
    const value = this.budgetInput.value;
    if(value==='' || value <0){
      this.budgetFeedback.classList.add('showItem');
      this.budgetFeedback.innerHTML=`<p>vallue cannot be empty or negative</p>`;
      const self= this;
      console.log(this);

      setTimeout(function(){
        console.log(this);
        console.log(self);
        this.budgetFeedback.classList.remove('showItem');
      }, 4000);
    }
    else {
      this.budgetAmount.textContent = value;
      this.budgetInput.value = '';
      this.showBalance();
    }
  }
  //show balance
  showBalance() {
    console.log(`Show me the money!`);
  }
}

function eventListeners(){
  const budgetForm = document.getElementById('budget-form');
  const expenseForm = document.getElementById('expense-form');
  const expenseList = document.getElementById('expense-list');


  //new instance of the UI Class
  const ui = new UI()

  // budget form submit
  budgetForm.addEventListener('submit', function(event){
    event.preventDefault();
    ui.submitBudgetForm();
  })
  // expense form submit
  expenseForm.addEventListener('submit', function(event){
    event.preventDefault();
  })
  // budget form submit
  expenseList.addEventListener('submit', function(){})
}

document.addEventListener('DOMContentLoaded', function(){
  eventListeners();
})