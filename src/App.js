import { useDispatch, useSelector } from 'react-redux';
import './App.css';

const App = () => {

  const dispath = useDispatch()
  const cash = useSelector(state => state.cashR.cash)

  const addCash = (cash) => {
    dispath({type:"ADD_CASH", payload : cash})
  }

  const getCash = (cash) => {
    dispath({type:"GET_CASH", payload : cash})
  }

  console.log(cash)

  return (
    <div className="app-wrapper">
      <h1>{cash}</h1>
      <button onClick={() => addCash(+prompt("Введите сумму..."))}>Пополнить счет</button>
      <button onClick={() => getCash(+prompt("Введите сумму..."))}>Снять со счета</button>
    </div>
  );
}

export default App;
