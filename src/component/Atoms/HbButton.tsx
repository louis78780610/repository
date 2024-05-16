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
