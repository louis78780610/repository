import React, { useState } from 'react';
import Title from "../../Atoms/Title";
import Button from "../../Atoms/Button";
import Input from '../../Atoms/Input';
import TextArea from '../../Atoms/TextArea';
import ErrorMsg from '../../Atoms/ErrorMsg';
import { useDispatch, useSelector } from 'react-redux';
import { updateFormData, setFieldError, addNewPost } from '../../../redux/newPostSlice'; // setFieldError をインポート
import { RootState } from '../../../redux/store';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const NewPostContent = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch<ThunkDispatch<RootState, unknown, PayloadAction>>();
  const formData = useSelector((state: RootState) => state.post.formData);
  const errors = useSelector((state: RootState) => state.post.errors);
  const isSubmitting = useSelector((state: RootState) => state.post.submitting || false);
  const [validationErrors, setValidationErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    dispatch(updateFormData({ name, value }));
    localStorage.setItem(name, value);
  };

  const handleButtonClick = async(e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); // デフォルトの動作を防ぐ
    
    // バリデーションを行う
    const errors: { [key: string]: string } = {};

    if (!formData.title) {
      errors.title = "タイトルを入力してください";
    } 
    if (!formData.content) {
      errors.content = "投稿内容を入力してください";
    } 

// エラーがあるかどうかチェック
    const hasError = Object.values(errors).some(error => error !== '');
    console.log(hasError);

    const requestBody = {
      title: formData.title,
      content: formData.content,
    };

    if (hasError) {
      setValidationErrors(errors);
    } else {
      try {
        const response = await axios.post('/articles', requestBody);        
        if (response.status === 201) {
          const getPostResponse = await axios.get(`/articles/1}`);
          if (getPostResponse.status === 200) {
            // ユーザー情報を取得できたら、適切な処理を行う
            const postData = getPostResponse.data;
            console.log('Post data:', postData);
          }
          dispatch(setFieldError({}));
          navigate("/PostsDetailPage");
          dispatch(addNewPost(requestBody));
          dispatch(updateFormData({ name: 'title', value: '' }));
          dispatch(updateFormData({ name: 'content', value: '' }));
        }
      } catch (error) {
        console.error('Registration failed:', error);
      }
    }
  };


  return (
    <div className="h-screen w-full flex items-center justify-center">
      <form className="w-2/5 p-30 h-2/3 md:w-full md:px-8 lg:pt-16 sm:pt-8 sm:w-3/5">
      <div className="pb-7">
      <Title title="新規投稿画面"/>
      </div>
      <div className='my-4'>
      <Input 
        type="text" 
        name="title" 
        placeholder="タイトル"
        value={formData.title} 
        onChange={handleChange}
      />
      <ErrorMsg text={validationErrors.title || errors.title} />
      <TextArea 
        name='content'
        value={formData.content} 
        onChange={handleChange}
        />
      <ErrorMsg text={validationErrors.content || errors.content} />
      </div>
      <div className="flex justify-end pt-7">
      <Button 
            type="submit"
            disabled={isSubmitting} 
            onClick={handleButtonClick} 
            children="投稿する"
          />
      </div>
      </form>
    </div>
  );
};

export default NewPostContent;