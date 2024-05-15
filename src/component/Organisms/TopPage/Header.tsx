// import { FC, useState } from "react";
// import HeaderUl from '../../Molecules/TopPage/HeaderUl';
// import { HbButton } from "../../Atoms/HbButton";
// import '../../../css/HbMenu.css';

// const HbHeader: FC = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const handleToggle = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <header className="header bg-neutral-500 text-white p-4 fixed top-0 left-0 w-full z-10">
//       <div className="desktop-navigation">
//         <HeaderUl id="desktop-navigation" />
//       </div>
//       <div className="mobile-navigation">
//         <HbButton
//           open={isOpen}
//           onClick={handleToggle}
//           controls="navigation"
//           label="Toggle navigation"
//         />
//         <HeaderUl open={isOpen} id="navigation" />
//       </div>
//     </header>
//   );
// };

// export default HbHeader;

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
    <header className='header-class bg-neutral-500 text-white py-4 fixed top-0 w-full z-10 flex items-center justify-center md:justify-center md:justify-start sm:justify-start'>
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