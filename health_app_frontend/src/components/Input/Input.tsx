import { forwardRef, memo } from "react";
import { v4 as uuid } from "uuid";
interface InputType extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  errorText?: string;
}
const Input: React.FC<InputType> = forwardRef<HTMLInputElement, InputType>(
  ({ errorText, label, ...props }, ref) => {
    const id = uuid();

    return (
      <div className="mb-4">
        <label className="font-bold text-[0.875rem]" htmlFor={id}>
          {label}
        </label>
        <input
          ref={ref}
          className="border-[1.5px] border-border-gray w-full py-2 px-4 rounded-[6px] outline-bg-gray mt-2"
          id={id}
          {...props}
        />
        <p className="text-error text-[0.875rem] mt-1">{errorText}</p>
      </div>
    );
  }
);
export default memo(Input);
