import { FieldValues } from "react-hook-form";

interface Props {
  expenseList: FieldValues[];
  deleteExpense: (index: number, id: number) => void;
}

const ExpenseTable = ({ expenseList, deleteExpense }: Props) => {
  const getTotal = () => {
    const total = expenseList.reduce(
      (accumulator, currentExpense) => accumulator + currentExpense.amount,
      0
    );

    return total;
  };
  return (
    <>
      <table className="table table-bordered mt-5">
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {expenseList.map((expense, index) => {
            return (
              <tr key={index}>
                <td>{expense.description}</td>
                <td>₹{expense.amount}</td>
                <td>{expense.category}</td>
                <td>
                  <button
                    onClick={() => deleteExpense(index, expense.id)}
                    className="btn btn-outline-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
          {expenseList.length ? (
            <tr>
              <td>Total</td>
              <td>₹{getTotal()}</td>
            </tr>
          ) : null}
        </tbody>
      </table>
    </>
  );
};

export default ExpenseTable;
