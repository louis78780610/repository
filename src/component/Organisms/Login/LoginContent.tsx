import React, { useState } from 'react';
import FormField from "../../Molecules/FormField";
import Title from "../../Atoms/Title";
import Button from "../../Atoms/Button";
import { useDispatch, useSelector } from 'react-redux';
import { updateFormData, setFieldError } from '../../../redux/formSlice'; // setFieldError をインポート
import { login } from '../../../redux/authSlice'; // setFieldError をインポート
import { RootState } from '../../../redux/store';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginContent = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch<ThunkDispatch<RootState, unknown, PayloadAction>>();

  const formData = useSelector((state: RootState) => state.form.formData);
  const errors = useSelector((state: RootState) => state.form.errors);
  const isSubmitting = useSelector((state: RootState) => state.form.submitting || false);

  const [validationErrors, setValidationErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(updateFormData({ name, value }));
     // ローカルストレージにフォームの入力値を保存する
  };

  const handleButtonClick = async(e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); // デフォルトの動作を防ぐ
    // バリデーションを行う
    const errors: { [key: string]: string } = {};
    const regex = /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/;
  
    if (!formData.email) {
      errors.email = "メールアドレスを入力してください";
    } else if (!regex.test(formData.email)) {
      errors.email = "正しいメールアドレスを入力してください";
    }
    if (!formData.password) {
      errors.password = "パスワードを入力してください";
    }
  
    // エラーがあるかどうかチェック
    const hasError = Object.values(errors).some(error => error !== '');
    console.log(hasError);
  
    const requestBody = {
      email: formData.email,
      password: formData.password,
    };
  
    if (hasError) {
      setValidationErrors(errors);
    } else {
      try {
        const response = await axios.post('/login', requestBody);
        if (response.status === 201) {
          const  access_token  = response.data.user.token; // レスポンスからトークンを取得
          const expirationTime = Date.now() + 60 * 60 * 1000; // 有効期限を60分後の時間に設定
          localStorage.setItem('access_token', access_token); // トークンをlocalStorageに保存
          localStorage.setItem('token_expiration', expirationTime.toString()); // 有効期限も保存
          // デフォルトのAuthorizationヘッダーを設定
          axios.defaults.headers.common['Authorization'] = `Bearer ${access_token}`;
          dispatch(setFieldError({}));
          dispatch(login()); // ユーザーをログイン状態にする
          navigate("/MyPage");
          // フォームの入力値をクリアする
          dispatch(updateFormData({ name: 'email', value: '' }));
          dispatch(updateFormData({ name: 'password', value: '' }));
        }
      } catch (error) {
        console.error('Registration failed:', error);
      }
    }
  };

  

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <form className="w-full h-2/3 md:px-8 sm:px-20 lg:w-3/5 lg:py-16 sm:py-8 xl:w-3/5 2xl:w-3/5">
      <div className="pb-7">
      <Title title="ログイン"/>
      </div>
      <div className="flex flex-col items-center md:px-24 xs:px-12">
      <FormField 
        labelTitle="ログインID(メールアドレス)" 
        inputType="text" 
        inputName="email" 
        value={formData.email} 
        errorText={validationErrors.email || errors.email} 
        onChange={handleChange}
      />
      <FormField 
        labelTitle="パスワード" 
        inputType="password" 
        inputName="password" 
        value={formData.password} 
        errorText={validationErrors.password || errors.password} 
        onChange={handleChange}
      />
      </div>
      <div className="flex justify-end pt-7">
      <Button 
        type="submit" 
        disabled={isSubmitting} 
        onClick={handleButtonClick} 
        children="ログイン"
      />
      </div>
      </form>
    </div>
  );
};

export default LoginContent;