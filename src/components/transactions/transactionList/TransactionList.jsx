import { TransactionItem } from "../transactionItem/TransactionItem"



export const TransactionList = ({transactions}) => {
  return (
    <div>
        {transactions.map(({id, type, amount, currency })=> {
            return <TransactionItem key={id} type={type} amount={amount} currency={currency}/>
        })}
    </div>
  )
}
// {
//     "id": "1e0700a2-5183-4291-85cc-2065a036a683",
//     "type": "invoice",
//     "amount": "964.82",
//     "currency": "LRD"
//   },
