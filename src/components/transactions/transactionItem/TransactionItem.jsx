

export const TransactionItem = ({type, amount, currency }) => {
  return (
    <div>
        
        <p>{type}</p>
        <p>{amount}</p>
        <p>{currency}</p>
        <hr />
    </div>
  )
}
