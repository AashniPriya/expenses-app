import Card from "./Card";
import ExpenseDate from "./ExpenseDate";
import "./Expenseitem.css";

function Expenseitem(props) {
  const clickHandler = () => {
    console.log("clciked!!");
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">rs {props.amount}</div>
      </div>
      <button onClick={clickHandler}>change title</button>
    </Card>
  );
}

export default Expenseitem;
