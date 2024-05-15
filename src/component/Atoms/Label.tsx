interface LabelProps {
  title: string;
}

const IMAGE_ID = "imageId";

const Label: React.FC<LabelProps> = ({title}) => {
  return (
    <>
    <label htmlFor={IMAGE_ID}>
      {title}
    </label>
    </>
  );
};

export default Label;