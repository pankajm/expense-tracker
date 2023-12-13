import categories from "../constants/categories";

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
        {categories.map((category) => (
          <option value={category} key={category}>
            {category}
          </option>
        ))}
      </select>
    </>
  );
};

export default ExpenseFilter;
