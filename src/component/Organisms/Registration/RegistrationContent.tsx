import React, { useState } from 'react';
import FormField from "../../Molecules/FormField";
import Title from "../../Atoms/Title";
import Button from '../../Atoms/Button';
import RegistrationImage from './RegistrationImage';
import { useDispatch, useSelector } from 'react-redux';
import { updateFormData, setFieldError } from '../../../redux/formSlice'; // setFieldError をインポート
import { login } from '../../../redux/authSlice'; // setFieldError をインポート
import { RootState } from '../../../redux/store';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const RegistrationContent = () => {

  const handleImageChange = (imageData: string) => {
    // ここで画像データを適切な場所に保持する処理を行う
    dispatch(updateFormData({ name: 'image', value: { url: imageData } }));
  };


  const navigate = useNavigate();
  const dispatch = useDispatch<ThunkDispatch<RootState, unknown, PayloadAction>>();

  const formData = useSelector((state: RootState) => state.form.formData);

  const errors = useSelector((state: RootState) => state.form.errors);
  const isSubmitting = useSelector((state: RootState) => state.form.submitting || false);

  const [validationErrors, setValidationErrors] = useState<{ [key: string]: string }>({});

  const [imageError, setImageError] = useState<string>('');


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(updateFormData({ name, value }));
    localStorage.setItem(name, value);
  };
  

  const handleButtonClick = async(e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); // デフォルトの動作を防ぐ
    
    // バリデーションを行う
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
    if (!formData.password) {
      errors.password = "パスワードを入力してください";
    } else if (formData.password.length < 8) {
      errors.password = "パスワードは8文字以上で入力してください";
    }
    if (!formData.checkPassword) {
      errors.checkPassword = "確認用パスワードを入力してください";
    } else if (formData.password !== formData.checkPassword) {
      errors.checkPassword = "入力されたパスワードが異なります";
    }
    if (!formData.image?.url) {
      setImageError('jpg形式のファイルを選択して下さい。');
    }


// エラーがあるかどうかチェック
    const hasError = Object.values(errors).some(error => error !== '');
    console.log(hasError);

    const requestBody = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      password_confirmation: formData.checkPassword,
      representative_image: formData.image,
    };

    if (hasError) {
      setValidationErrors(errors);
    } else {
      try {
        const response = await axios.post('/user', requestBody);        
        if (response.status === 201) {
          const getUserResponse = await axios.get(`/user/1}`);
      if (getUserResponse.status === 200) {
        // ユーザー情報を取得できたら、適切な処理を行う
        const userData = getUserResponse.data;
        console.log('User data:', userData);
      }
          dispatch(setFieldError({}));
          dispatch(login()); // ユーザーをログイン状態にする
          navigate("/MyPage");
          dispatch(updateFormData({ name: 'email', value: formData.email }));
          dispatch(updateFormData({ name: 'password', value: '' }));
          dispatch(updateFormData({ name: 'password', value: '' }));
          dispatch(updateFormData({ name: 'checkPassword', value: '' }));
          dispatch(updateFormData({ name: 'name', value: formData.name }));
            }
      } catch (error) {
        console.error('Registration failed:', error);
      }
    }
  };
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <form className="w-full h-2/3 pt-24 md:px-8 sm:px-20 lg:w-3/5 lg:py-16 sm:py-8 xl:w-3/5 2xl:w-3/5">
        <div className="pb-7">
          <Title title="会員登録"/>
        </div>
        <div className="flex flex-col items-center md:px-24 xs:px-12">
          <FormField 
            labelTitle="ログインID(メールアドレス)" 
            inputType="text" 
            inputName="email" 
            value={formData.email} 
            errorText={validationErrors.email || errors.email} 
            maxLength={254}
            onChange={handleChange}
          />
          <FormField 
            labelTitle="パスワード(英数８文字以上)" 
            inputType="password" 
            inputName="password" 
            value={formData.password} 
            maxLength={20}
            errorText={validationErrors.password || errors.password} 
            onChange={handleChange}
          />
          <FormField 
            labelTitle="パスワード確認" 
            inputType="password" 
            inputName="checkPassword" 
            value={formData.checkPassword} 
            maxLength={20}
            errorText={validationErrors.checkPassword || errors.checkPassword} 
            onChange={handleChange}
          />
          <FormField 
            labelTitle="ニックネーム(８文字以上)" 
            inputType="text" 
            inputName="name" 
            value={formData.name}
            maxLength={20}
            errorText={validationErrors.name || errors.name} 
            onChange={handleChange}
          />
          <RegistrationImage 
            labelTitle="ユーザーアイコン画像" 
            errorText={imageError} 
            onImageChange={handleImageChange} // ここを追加
          />
        </div>
        <div className="flex justify-end pt-7 pb-24 sm:pb-12 sm:pt-3">
          <Button 
            type="submit"
            disabled={isSubmitting}
            onClick={handleButtonClick}
            children="登録する"
          />
        </div>
      </form>
    </div>
  );
};

export default RegistrationContent;