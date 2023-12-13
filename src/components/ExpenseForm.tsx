import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import categories from "../constants/categories";

const schema = z.object({
  description: z.string().min(1, { message: "Provide Valid Description" }),
  amount: z
    .number({ invalid_type_error: "Provide valid amount" })
    .positive()
    .int()
    .min(1, { message: "Provide valid amount in Rupees" }),
  category: z.string().min(1, { message: "Provide valid category" }),
});

type FormData = z.infer<typeof schema>;

interface Props {
  onFormSubmit: (data: FieldValues) => void;
}

const ExpenseForm = ({ onFormSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FieldValues) => {
    onFormSubmit(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          id="description"
          type="text"
          className="form-control"
          {...register("description")}
        />
        {errors.description && (
          <p className="text-danger mt-2">{errors.description.message}</p>
        )}
      </div>
      <div className="form-group mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          id="amount"
          type="number"
          className="form-control"
          {...register("amount", { valueAsNumber: true })}
        />
        {errors.amount && (
          <p className="text-danger mt-2">{errors.amount.message}</p>
        )}
      </div>
      <div className="form-group mb-3">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <select
          id="category"
          className="form-select"
          aria-label="Default select example"
          defaultValue=""
          {...register("category")}
        >
          <option></option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        {errors.category && (
          <p className="text-danger mt-2">{errors.category.message}</p>
        )}
      </div>
      <button type="submit" className="btn btn-primary mt-2">
        Submit
      </button>
    </form>
  );
};

export default ExpenseForm;
