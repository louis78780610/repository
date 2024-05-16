import React, { useRef } from 'react';
import personImage from '../../../images/person-image.jpg';
import ErrorMsg from '../../Atoms/ErrorMsg';
import { useDispatch, useSelector } from 'react-redux';
import { updateImageData } from '../../../redux/formSlice';
import { RootState } from '../../../redux/store';

interface RegistrationImageProps {
  labelTitle: string;
  errorText: string;
  onImageChange: (imageData: string) => void; // 画像データを親コンポーネントに伝えるコールバック関数
}

const  RegistrationImage: React.FC<RegistrationImageProps> = ({ labelTitle, errorText, onImageChange }) => {
  const dispatch = useDispatch();
  const imageData = useSelector((state: RootState) => state.form.formData);
  const inputRef = useRef<HTMLInputElement>(null); // useRefの型を指定

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;
    if (fileList && fileList.length > 0) {
      const file = fileList[0];
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target && typeof event.target.result === 'string') {
          const base64Image = event.target.result.split(',')[1];
          const fullBase64Data = `data:image/jpeg;base64,${base64Image}`;
          dispatch(updateImageData(fullBase64Data));
          onImageChange(fullBase64Data);
          // 画像データをローカルストレージに保存
          localStorage.setItem('imageData', fullBase64Data);
        }
      };
      reader.readAsDataURL(file);
    }
  };
  
  const handleIconClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  return (
    <div className="w-full flex flex-col py-5">
      <label htmlFor="fileInput">{labelTitle}</label>
      <div className="image-container flex justify-center items-center my-4">
        <div className="image-container w-24 h-24 border-2 border-gray-300 rounded-full overflow-hidden" onClick={handleIconClick}>
          <img src={imageData.image?.url || personImage} alt="Person" className="w-full h-full object-cover" /> {/* Optional chainingを追加 */}
        </div>
        <input ref={inputRef} type="file" id="fileInput" accept="image/*" onChange={handleFileChange} style={{ display: 'none' }} />
      </div>
      <p className="text-center">タップして画像を変更</p>
      <ErrorMsg text={errorText} />
    </div>
  );
};

export default RegistrationImage;