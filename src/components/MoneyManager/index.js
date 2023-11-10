import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import MoneyDetails from '../MoneyDetails'

import TransactionItem from '../TransactionItem'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    balanceCount: 0,
    yourIncome: 0,
    yourExpenses: 0,
    inputText: '',
    amountText: '',
    typeText: 'Income',
    transactionsList: [],
  }

  addItem = () => {
    const {typeText, inputText, amountText, yourExpenses} = this.state
    console.log(typeText)
    if (typeText === 'Income') {
      const newTransaction = {
        id: uuidv4(),
        inputText,
        amountText,
        typeText,
      }

      this.setState(prevState => ({
        balanceCount: prevState.balanceCount + parseInt(amountText),
        yourIncome: prevState.yourIncome + parseInt(amountText),
        transactionsList: [...prevState.transactionsList, newTransaction],
        inputText: '',
        amountText: '',
        typeText: 'Income',
      }))
    } else {
      const newTransaction = {
        id: uuidv4(),
        inputText,
        amountText,
        typeText,
      }
      this.setState(prevState => ({
        balanceCount: prevState.balanceCount - parseInt(amountText),
        yourExpenses: prevState.yourExpenses + parseInt(amountText),
        transactionsList: [...prevState.transactionsList, newTransaction],
        inputText: '',
        amountText: '',
        typeText: 'Income',
      }))
    }
  }

  onClickDelete = (did, amount, tText) => {
    const {inputText, amountText, typeText, transactionsList} = this.state
    console.log(transactionsList)
    console.log(amount)
    if (tText === 'Income') {
      this.setState(prevState => ({
        transactionsList: prevState.transactionsList.filter(
          eachItem => eachItem.id !== did,
        ),
        balanceCount: prevState.balanceCount - parseInt(amount),
        yourIncome: prevState.yourIncome - parseInt(amount),
      }))
    } else {
      this.setState(prevState => ({
        transactionsList: prevState.transactionsList.filter(
          eachItem => eachItem.id !== did,
        ),
        balanceCount: prevState.balanceCount + parseInt(amount),
        yourExpenses: prevState.yourExpenses - parseInt(amount),
      }))
    }
  }

  changeTitle = event => {
    this.setState({inputText: event.target.value})
  }

  changeAmount = event => {
    this.setState({amountText: event.target.value})
  }

  changeType = event => {
    this.setState({typeText: event.target.value})
  }

  render() {
    const {inputText, amountText, typeText, transactionsList} = this.state
    return (
      <div>
        <div>
          <h1>Hi,Richard</h1>
          <p>Welcome back to your</p>
          <span>Money Manager</span>
        </div>
        <MoneyDetails details={this.state} />
        <div>
          <h1>Add Transaction</h1>
          <label htmlFor="Title">TITLE</label>
          <input
            id="Title"
            type="text"
            placeholder="Title"
            onChange={this.changeTitle}
            value={inputText}
          />
          <label htmlFor="Amount">AMOUNT</label>
          <input
            id="Amount"
            type="text"
            placeholder="Amount"
            onChange={this.changeAmount}
            value={amountText}
          />
          <select onChange={this.changeType} value={typeText}>
            {transactionTypeOptions.map(eachItem => (
              <option id={eachItem.optionId}>{eachItem.displayText}</option>
            ))}
          </select>
          <button type="button" onClick={this.addItem}>
            Add
          </button>
        </div>
        <div>
          <h1>History</h1>
          <div className="table">
            <p>Title</p>
            <p>Amount</p>
            <p>Type</p>
          </div>
          <ul>
            {transactionsList.map(eachItem => (
              <TransactionItem
                details={eachItem}
                key={eachItem.id}
                onClickDelete={this.onClickDelete}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default MoneyManager
