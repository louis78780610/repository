interface TextAreaProps {
  name: string;
  value?: string;
  maxLength?: number;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void; // onChange プロパティを追加
}

const TextArea: React.FC<TextAreaProps> = ({name='', onChange, value, maxLength}) => {
  return(
    <div>
      <textarea 
      name={name} 
      onChange={onChange}
      value={value}
      maxLength={maxLength}
      className="border border-gray-200 rounded w-full mt-12 h-40 resize-none"/>
    </div>
  );
};

export default TextArea;