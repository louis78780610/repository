interface PostDetailTextAreaProps {
  name: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void; // onChange プロパティを追加
}

const PostDetailTextArea: React.FC<PostDetailTextAreaProps> = ({name='', onChange, value}) => {
  return(
    <div>
      <textarea 
      name={name} 
      onChange={onChange}
      defaultValue={value}
      className="flex-1 border border-gray-200 rounded p-2 w-full mt-4 h-40 resize-none"/>
    </div>
  );
};

export default PostDetailTextArea;