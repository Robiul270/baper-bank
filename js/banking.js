document.getElementById('deposit-button').addEventListener('click', function(){
    const depositInput = document.getElementById('deposit-input');
// from deposit input     
    const depositAmountText = depositInput.value;
    const depositAmount= parseFloat(depositAmountText);
    // get current deposit 
    const depositTotal = document.getElementById('deposit-total');
// to total deposit 
    const depositTotalText = depositTotal.innerText;
    const previousDepositTotal = parseFloat(depositTotalText);

    depositTotal.innerText = depositAmount +  previousDepositTotal;

    // update balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    balanceTotal.innerText = depositAmount + previousBalanceTotal;
    // clear input field
    depositInput.value = '';
});

// handle withdraw butto 
document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawAmountText);
    withdrawInput.value = '';

    // update withdraw total 
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalText);
    withdrawTotal.innerText = previousWithdrawTotal
    + withdrawAmount;

    // update balance after withdraw 
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText; 
    const previousBalanceTotal = parseFloat(balanceTotal);

    balanceTotal.value = previousBalanceTotal - withdrawAmount;
});