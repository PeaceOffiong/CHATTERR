interface InputFormProps {
    type: "text" | "email" | "password" | "number";
    name: string;
    placeholder?: string;
    label?: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    errorMessage: string;
  }
  
  const InputForm: React.FC<InputFormProps> = ({
    type,
    name,
    value,
    label,
    placeholder,
    onChange,
    errorMessage
  }) => {
    return (
      <>
        <div className="flex flex-col gap-1 w-full">
          <div className="flex justify-between">
            <label htmlFor="LastName">{label}</label>
            <small className="text-red-700">{value ? errorMessage : ""}</small>
          </div>
          <input
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="border-grey-500 p-4 border-2 rounded-md h-10 md:h-10 w-full"
            required
          />
        </div>
      </>
    );
  };
  
  export default InputForm;
  