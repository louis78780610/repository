// import { FC, MouseEventHandler } from "react";
// import "../../css/HbMenu.css";

// type Props = {
//   open: boolean;
//   onClick: MouseEventHandler;
//   controls: string;
//   label: string;
// };

// export const HbButton: FC<Props> = ({ open, controls, label, onClick }) => {
//   return (
//     <button
//       type="button"
//       aria-controls={controls}
//       aria-expanded={open}
//       aria-label={label}
//       onClick={onClick}
//       className="toggleButton"
//     >
//       <span className="line-1"></span>
//       <span className="line-2"></span>
//       <span className="line-3"></span>
//     </button>
//   );
// };

import React from 'react';
import '../../css/HbMenu.css';

interface HbButtonProps {
  onClick: () => void;
  onToggleNav: () => void;
  isNavOpen: boolean;
}

const HbButton: React.FC<HbButtonProps> = ({ onClick, onToggleNav, isNavOpen }) => {
  return (
    <>
      <button 
      onClick={() => { onClick(); onToggleNav(); }} 
      className={`burger-btn ${isNavOpen ? 'cross' : ''}`}>
        <span 
        className={`bar bar_top ${isNavOpen ? 'cross-bar_top' : ''}`}
        >
        </span>
        <span 
        className={`bar bar_mid ${isNavOpen ? 'cross-bar_mid' : ''}`}
        >
        </span>
        <span 
        className={`bar bar_bottom ${isNavOpen ? 'cross-bar_bottom' : ''}`}
        >
        </span>
      </button>
    </>
  );
};

export default HbButton;
