import React from 'react';

interface TableCellProps {
  children: React.ReactNode;
  onClick?: () => void; // クリックハンドラーの型定義を追加
}

const TableCell: React.FC<TableCellProps> = ({ children, onClick }) => {
  // クリックハンドラーが指定されている場合はセルをクリック可能にする
  if (onClick) {
    return (
      <td className="border border-gray-300 border-2 py-2" onClick={onClick}>
        {children}
      </td>
    );
  } else {
    return (
      <td className="border border-gray-300 border-2 py-2">
        {children}
      </td>
    );
  }
};

export default TableCell;

// // TableCell.tsx
// import React from 'react';

// interface TableCellProps {
//   children: React.ReactNode;
// }

// const TableCell: React.FC<TableCellProps> = ({ children }) => {
//   return <td className="border border-gray-300 border-2 py-2">
//     {children}
//     </td>;
// };

// export default TableCell;