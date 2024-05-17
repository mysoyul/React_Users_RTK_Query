type InputProps = {
    type: string;
    placeholder: string;
  };
  
  type TextFieldProps = {
    label: string;
    inputProps: InputProps;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string;
  };
  
  const TextField = ({ label, inputProps, onChange, value }: TextFieldProps) => {
    return (
      <div className="flex flex-col">
        <label className="mb-2 text-base text-gray-800">{label}</label>
        <input
          className="bg-gray-200 py-2 px-3 border-2 outline-none"
          {...inputProps}
          onChange={onChange}
          value={value}
        />
      </div>
    );
  };
  
  export default TextField;