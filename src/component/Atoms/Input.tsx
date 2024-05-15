import React from 'react';

interface InputProps {
  type: string;
  name: string;
  placeholder: string;
  value?: string;
  autoComplete?: string
  defaultValue?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void; // onChange プロパティを追加
  readOnly?: boolean;
}

const Input: React.FC<InputProps> = ({type='', name='', placeholder='', value, autoComplete='', onChange, defaultValue, readOnly}) => {
  return(
      <input 
      type={type} 
      name={name} 
      placeholder={placeholder} 
      value={value}
      autoComplete={autoComplete}
      onChange={onChange} 
      defaultValue={defaultValue}
      readOnly={readOnly} // readOnlyプロパティが指定されている場合のみ設定
      className="flex-1 border border-gray-200 rounded p-2 lg:w-full"
      /> // onChange イベントを追加
  );
};

export default Input;