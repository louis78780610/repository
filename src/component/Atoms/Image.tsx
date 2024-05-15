import toppageImg from '../../images/toppage.jpg'; // 画像のインポート

const Image = () => {
  return (
    <div className='flex justify-center md:hidden sm:hidden'>
      <img 
      src={toppageImg} 
      alt="Top Page" 
      className='size-2/4'
      />
    </div>
  );
};

export default Image;