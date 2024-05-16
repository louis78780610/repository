import toppageImg from '../../images/logo.svg'; // 画像のインポート

const Logo = () => {
  return (
      <img 
      src={toppageImg} 
      alt="Top Page Logo" 
      className='h-12 w-auto transition duration-300 transform hover:opacity-50'
      />
  );
};

export default Logo;