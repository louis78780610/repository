import React, { useRef, useEffect, useState } from 'react';
import personImage from '../../images/person-image.jpg';

const IMAGE_ID = "imageId";

const UploadImage = () => {
  const [imageData, setImageData] = useState<string | null>(null); // ローカルストレージから画像データを取得するためのstate

  useEffect(() => {
    const storedImageData = localStorage.getItem('imageData'); // ローカルストレージから画像データを取得
    if (storedImageData) {
      setImageData(storedImageData); // stateに保存
    }
  }, []);

  const fileInputRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <label
        htmlFor={IMAGE_ID}
        className={`border border-gray-300 rounded-full py-10 w-20 flex items-center justify-center overflow-hidden cursor-pointer mx-auto mt-10 mb-10 px-10`}
        style={{
          background: `url(${imageData || personImage}) center/cover`, // ローカルストレージから取得した画像データを表示
          backgroundSize: "cover", // cover を指定
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* InputImage コンポーネントは不要 */}
        <input
          ref={fileInputRef}
          id={IMAGE_ID}
          type="file"
          accept="image/*"
          hidden
          disabled // 画像の変更を無効化
        />
      </label>
    </div>
  );
};

export default UploadImage;
