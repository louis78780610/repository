// FormField.tsx
import React from 'react';
import Label from "../Atoms/Label";
import Input from "../Atoms/Input";
import ErrorMsg from "../Atoms/ErrorMsg";

interface FormFieldProps {
  labelTitle: string;
  inputType: string;
  inputName: string;
  errorText?: string;
  value: string;
  autoComplete?: string;
  maxLength?: number; // maxLengthを追加
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormField: React.FC<FormFieldProps> = ({ labelTitle, inputType, inputName, errorText, value, autoComplete, maxLength, onChange }) => {
  return (
    <div className="w-full flex flex-col py-5">
      <Label title={labelTitle} />
      <Input
        type={inputType}
        name={inputName}
        placeholder=""
        value={value}
        autoComplete={autoComplete}
        onChange={onChange}
        maxLength={maxLength} // maxLengthを渡す
      />
      <div className="flex items-start">
        <ErrorMsg text={errorText} />
      </div>
    </div>
  );
};

export default FormField;
