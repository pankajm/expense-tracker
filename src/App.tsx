import { FieldValues } from "react-hook-form";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";
import ExpenseFilter from "./components/ExpenseFilter";
import { useState, ChangeEvent } from "react";

function App() {
  const [expenseList, setExpenseList] = useState<FieldValues[]>([]);
  const [originalExpenseList, setOriginalExpenseList] = useState<FieldValues[]>(
    []
  );
  const handleSubmit = (data: FieldValues) => {
    setExpenseList([...expenseList, { ...data, id: expenseList.length + 1 }]);
    setOriginalExpenseList([
      ...originalExpenseList,
      { ...data, id: originalExpenseList.length + 1 },
    ]);
  };

  const handleDeleteExpense = (index: number, id: number) => {
    const newExpenseList = [...expenseList];
    newExpenseList.splice(index, 1);
    setExpenseList(newExpenseList);
    const allExpenses = originalExpenseList.filter(
      (expense) => expense.id !== id
    );
    setOriginalExpenseList(allExpenses);
  };

  const onFilterChange = (e: ChangeEvent) => {
    const element = e.target as HTMLInputElement;
    if (element.value === "All categories") {
      setExpenseList([...originalExpenseList]);
    } else {
      const newExpenseList = originalExpenseList.filter(
        (expense) => expense.category === element.value
      );
      setExpenseList(newExpenseList);
    }
  };

  return (
    <>
      <ExpenseForm onFormSubmit={handleSubmit}></ExpenseForm>
      <ExpenseFilter onFilterChange={onFilterChange}></ExpenseFilter>
      <ExpenseTable
        expenseList={expenseList}
        deleteExpense={handleDeleteExpense}
      ></ExpenseTable>
    </>
  );
}

export default App;
