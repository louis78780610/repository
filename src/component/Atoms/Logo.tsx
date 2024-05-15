import toppageImg from '../../images/logo.svg'; // 画像のインポート

const Logo = () => {
  return (
      <img 
      src={toppageImg} 
      alt="Top Page Logo" 
      className='h-12 w-auto sm:pl-48'
      />
  );
};

export default Logo;