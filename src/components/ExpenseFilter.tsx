interface Props {
  onFilterChange: (e: React.ChangeEvent) => void;
}

const ExpenseFilter = ({ onFilterChange }: Props) => {
  return (
    <>
      <select
        id="category"
        className="form-select mt-5"
        aria-label="Default select example"
        defaultValue=""
        onChange={onFilterChange}
      >
        <option>All categories</option>
        <option value="Groceries">Groceries</option>
        <option value="Utilities">Utilities</option>
        <option value="Entertainment">Entertainment</option>
      </select>
    </>
  );
};

export default ExpenseFilter;
