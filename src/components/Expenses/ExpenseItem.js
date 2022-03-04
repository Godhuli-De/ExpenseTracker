import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

const ExpenseItem=(props)=> {
  // const expenseDate=new Date(2022,1,2);
  // const expenseTitle= 'Bikharam Chandmal';
  // const expenseAmount= 315;
 
  // function clickHandler(){
  //   console.log("Clicked!@#$");
  // }
  return (
    <Card className="expense-item">
      {/* as date object cannot be directly called so {props.date.toISOString()} */}
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price"> Rs. {props.amount}</div>
      </div>
      {/* <button onClick={clickHandler}>Change Title</button> */}
    </Card>
  );
}

export default ExpenseItem;
