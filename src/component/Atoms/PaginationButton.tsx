import React from "react";

interface PaginationButtonProps {
  onClick: () => void;
  disabled: boolean;
  children: React.ReactNode; // childrenプロパティの型定義を追加
}

const PaginationButton: React.FC<PaginationButtonProps> = ({ onClick, disabled, children }) => {
  return (
    <button 
    onClick={onClick} 
    disabled={disabled}
    >
      {children}
    </button>
  );
};

export default PaginationButton;
