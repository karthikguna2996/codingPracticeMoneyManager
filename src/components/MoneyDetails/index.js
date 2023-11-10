import './index.css'

const MoneyDetails = props => {
  const {details} = props
  const {balanceCount, yourIncome, yourExpenses} = details
  return (
    <div>
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
        />
        <p>Your Balance</p>
        <p data-testid="balanceAmount">RS {balanceCount}</p>
      </div>
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
        />
        <p>Your Income</p>
        <p data-testid="incomeAmount">RS {yourIncome}</p>
      </div>
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
        />
        <p>Your Expenses</p>
        <p data-testid="expensesAmount">RS {yourExpenses}</p>
      </div>
    </div>
  )
}

export default MoneyDetails
