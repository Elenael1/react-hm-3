import './App.css';
import { FriendsList } from './components/Friends/FriendsList/FriendsList';
import friends from '../src/components/data/friends.json'
import users from '../src/components/data/users.json'
import { UserList } from './components/user/userList/UserList';
import { StatisticsList } from './components/statistics/statisticsList/StatisticsList';
import statistics from './components/data/statistics.json'
import { TransactionList } from './components/transactions/transactionList/TransactionList';
import transactions from './components/data/transaction.json'

function App() {
  return (
    <div className="App">
       <FriendsList friends={friends}/>
     <UserList users={users}/> 
     <StatisticsList statistics={statistics}/>
     <TransactionList transactions={transactions}/>
    </div>
  );
}
export default App;
