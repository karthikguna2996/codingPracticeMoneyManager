import './index.css'

const TransactionItem = props => {
  const {details, onClickDelete} = props
  const {id, inputText, amountText, typeText} = details

  const letDelete = () => {
    onClickDelete(id, amountText, typeText)
  }
  return (
    <li className="tItem">
      <p>{inputText}</p>
      <p>Rs {amountText}</p>
      <p>{typeText}</p>
      <button onClick={letDelete} data-testid="delete" type="delete">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default TransactionItem
