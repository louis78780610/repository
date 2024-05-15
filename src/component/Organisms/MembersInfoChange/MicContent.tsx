// MicContent.tsx

import React, { useState } from 'react';
import FormField from "../../Molecules/FormField";
import Title from "../../Atoms/Title";
import Button from "../../Atoms/Button";
import RegistrationImage from '../Registration/RegistrationImage';
import { useDispatch, useSelector } from 'react-redux';
import { updateFormData, setFieldError } from '../../../redux/formSlice';
import { RootState } from '../../../redux/store';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const MicContent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<ThunkDispatch<RootState, unknown, PayloadAction>>();

  const formData = useSelector((state: RootState) => state.form.formData);
  const errors = useSelector((state: RootState) => state.form.errors);
  const isSubmitting = useSelector((state: RootState) => state.form.submitting || false);
  const [imageError, setImageError] = useState<string>('');


  const [validationErrors, setValidationErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(updateFormData({ name, value }));
  };

  const handleImageChange = (imageData: string) => {
    dispatch(updateFormData({ name: 'image', value: { url: imageData } }));
  };

  const handleButtonClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const errors: { [key: string]: string } = {};
    const regex = /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/;

    if (!formData.name) {
      errors.name = "名前を入力してください";
    } else if (formData.name.length < 8) {
      errors.name = "名前は8文字以上で入力してください";
    }
    if (!formData.email) {
      errors.email = "メールアドレスを入力してください";
    } else if (!regex.test(formData.email)) {
      errors.email = "正しいメールアドレスを入力してください";
    }
    if (!formData.image?.url) {
      setImageError('jpg形式のファイルを選択して下さい。');
    }

    const hasError = Object.values(errors).some(error => error !== '');

    const requestBody = {
      name: formData.name,
      email: formData.email,
      representative_image: formData.image?.url, // 画像URLを取得
    };

    if (hasError) {
      setValidationErrors(errors);
    } else {
      try {
        const response = await axios.put(`/user/1`, requestBody); // userIdを取得する必要あり

        if (response.status === 204) {
          dispatch(setFieldError({}));
          navigate("/MyPage");
          // フォームデータを更新
          dispatch(updateFormData({ name: 'email', value: formData.email }));
          dispatch(updateFormData({ name: 'password', value: '' }));
          dispatch(updateFormData({ name: 'checkPassword', value: '' }));
          dispatch(updateFormData({ name: 'name', value: '' }));
        }
      } catch (error) {
        console.error('Update failed:', error);
      }
    }
  };

  return (
    <div className="h-screen w-full flex items-center justify-center pt-24 sm:mt-32 lg:mt-44">
      <form className="w-2/5 pt-36 md:w-full md:px-8 sm:w-3/5 lg:w-3/5">
        <div className="pb-7">
          <Title title="会員情報変更"/>
        </div>
        <div className="flex flex-col items-center">
          <FormField 
            labelTitle="ニックネーム(８文字以上)" 
            inputType="text" 
            inputName="name" 
            value={formData.name} 
            errorText={validationErrors.name || errors.name} 
            onChange={handleChange}
          />
          <FormField 
            labelTitle="ログインID(メールアドレス)" 
            inputType="text" 
            inputName="email" 
            value={formData.email} 
            errorText={validationErrors.email || errors.email} 
            onChange={handleChange}
          />
          <RegistrationImage 
            labelTitle="ユーザーアイコン画像" 
            errorText={imageError} 
            onImageChange={handleImageChange} 
          />
        </div>
        <div className="flex justify-end pt-7 pb-24 sm:pb-12 sm:pt-3">
          <Button 
            type="button" 
            disabled={isSubmitting} 
            onClick={handleButtonClick} 
            children="登録する"
          />
        </div>
      </form>
    </div>
  );
};

export default MicContent;


// import React, { useState } from 'react';
// import FormField from "../../Molecules/FormField";
// import Title from "../../Atoms/Title";
// import Button from "../../Atoms/Button";
// import RegistrationImage from '../Registration/RegistrationImage';
// import { useDispatch, useSelector } from 'react-redux';
// import { updateFormData, setFieldError } from '../../../redux/micSlice'; // setFieldError をインポート
// import { RootState } from '../../../redux/store';
// import { ThunkDispatch } from '@reduxjs/toolkit';
// import { PayloadAction } from '@reduxjs/toolkit';
// import { useNavigate } from 'react-router-dom';


// const MicContent = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch<ThunkDispatch<RootState, unknown, PayloadAction>>();

//   const formData = useSelector((state: RootState) => state.mic.formData);
//   const errors = useSelector((state: RootState) => state.mic.errors);
//   const isSubmitting = useSelector((state: RootState) => state.mic.submitting || false);

//   const [validationErrors, setValidationErrors] = useState<{ [key: string]: string }>({});

//   const [imageError, setImageError] = useState<string>('');

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     dispatch(updateFormData({ name, value }));
//   };

//   const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
//     e.preventDefault(); // デフォルトの動作を防ぐ
//     // バリデーションを行う
//     const errors: { [key: string]: string } = {};
//     const regex = /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/;

//     if (!formData.name) {
//       errors.name = "名前を入力してください";
//     } else if (formData.name.length < 8) {
//       errors.name = "名前は8文字以上で入力してください";
//     }
//     if (!formData.email) {
//       errors.email = "メールアドレスを入力してください";
//     } else if (!regex.test(formData.email)) {
//       errors.email = "正しいメールアドレスを入力してください";
//     }
//     if (imageError) {
//       errors.image = "画像ファイルが選択されていません。";
//     }

//     // エラーがあるかどうかチェック
//     const hasError = Object.values(errors).some(error => error !== '');
//     if (hasError) {
//       // エラーがあればエラーメッセージを表示
//       setValidationErrors(errors);
//     } else {
//       // エラーがなければページ遷移
//       dispatch(setFieldError({})); // エラーをクリアする
//       navigate("/MyPage"); // ページ遷移
//     }
//   };
  
//   return (
//     <div className="h-screen w-full flex items-center justify-center pt-24 sm:mt-32 lg:mt-44">
//       <form className="w-2/5 pt-36 md:w-full md:px-8 sm:w-3/5 lg:w-3/5">
//       <div className="pb-7">
//       <Title title="会員情報変更"/>
//       </div>
//       <div className="flex flex-col items-center">
//         <FormField 
//           labelTitle="ニックネーム(８文字以上)" 
//           inputType="text" 
//           inputName="name" 
//           value={formData.name} 
//           autoComplete="name"
//           errorText={validationErrors.name || errors.name} 
//           onChange={handleChange}
//         />
//         <FormField 
//           labelTitle="ログインID(メールアドレス)" 
//           inputType="text" 
//           inputName="email" 
//           value={formData.email} 
//           errorText={validationErrors.email || errors.email} 
//           autoComplete="email"
//           onChange={handleChange}
//         />
//         <RegistrationImage 
//           labelTitle="ユーザーアイコン画像" 
//           errorText={imageError} 
//           onImageError={setImageError}
//         />
//       </div>
//       <div className="flex justify-end pt-7 pb-24 sm:pb-12 sm:pt-3">
//           <Button 
//             type="button" 
//             disabled={isSubmitting} 
//             onClick={handleButtonClick} 
//             children="登録する"
//           />
//       </div>
//       </form>
//     </div>
//   );
// };

// export default MicContent;