

// function getInputValue() {
//     let depositInput = document.getElementById('Deposit-input');
//     let depositAmountText = depositInput.value;
//     let depositAmount = parseFloat(depositAmountText)
//     depositInput.value = '';
//     return depositAmount;

// }

document.getElementById('deposit-button').addEventListener('click', function () {
    let depositInput = document.getElementById('Deposit-input');
    let depositAmountText = depositInput.value;
    let depositAmount = parseFloat(depositAmountText)
    // console.log(depositAmount);
    // let depositAmount = getInputValue()

    // get current amount
    let dipositTotal = document.getElementById('deposit-total');
    let depositTotalText = dipositTotal.innerText;
    let previousDepositTotal = parseFloat(depositTotalText)
    dipositTotal.innerText = previousDepositTotal + depositAmount;
    console.log(depositTotalText);
    // update balance
    let balanceTotal = document.getElementById('balance-total');
    let balanceTotalText = balanceTotal.innerText;
    let previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal + depositAmount;

    depositInput.value = '';

})

// handel withdraw batton
document.getElementById('withdrow-button').addEventListener('click', function () {
    let withdrawInput = document.getElementById('withdrow-input')
    let withdrawInputText = withdrawInput.value;
    let withdrawAmount = parseFloat(withdrawInputText)
    // console.log(withdrawAmount)
    // get current withdraw
    let withdrowTotal = document.getElementById('withdrow-total');
    let withdrowTotalText = withdrowTotal.innerText;
    let previousWithdrawTotal = parseFloat(withdrowTotalText);
    // console.log(previousWithdrawTotal);
    withdrowTotal.innerText = withdrawAmount + previousWithdrawTotal;

    // balance update
    let balanceTotal = document.getElementById('balance-total');
    let balanceTotalText = balanceTotal.innerText;
    let previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal - withdrawAmount;
    withdrawInput.value = ''
})