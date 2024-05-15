import UploadImage from "../../Molecules/UploadImage";
import Input from "../../Atoms/Input";

const MyPageMail = () => {
  // ローカルストレージからメールアドレスを取得
  const userEmail = localStorage.getItem('email');

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full flex justify-center items-center h-20 px-64 md:px-40 sm:px-8">
        <UploadImage />
        <div className="mx-4" />
        <Input
          type="text"
          name="mailAddress"
          placeholder="メールアドレス"
          defaultValue={userEmail || ''} // ローカルストレージから取得したメールアドレスを表示
          readOnly={true} // readOnlyプロパティを指定
        />
      </div>
    </div>
  );
};

export default MyPageMail;