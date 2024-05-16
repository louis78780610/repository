import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderUl from '../../Molecules/TopPage/HeaderUl';
import Logo from '../../Atoms/Logo';
import ToggleButton from '../../Atoms/HbButton';
import '../../../css/HbMenu.css';

const Header: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleToggleNav = () => {
    setIsNavOpen(!isNavOpen);
    // ナビゲーションの表示状態を反転させるだけで、ナビゲーションの表示/非表示はHbButtonコンポーネント内で制御されます
  };

  return(
    <header className='header-class bg-neutral-500 shadow-lg text-white py-4 fixed top-0 w-full z-10 flex items-center justify-center md:justify-center md:justify-start'>
      <div className=''>
        <Link to="/"><Logo/></Link>
      </div>
      <nav className={isNavOpen ? 'show' : ''}>
        <HeaderUl/>
      </nav>
      <ToggleButton onClick={handleToggleNav} onToggleNav={handleToggleNav} isNavOpen={isNavOpen} />
    </header>
  );
};

export default Header;