// TableRow.tsx
import React from 'react';
import TableCell from '../../Atoms/TableCell';

interface TableRowProps {
  title: string;
  content: string;
  onClick: () => void; // クリックハンドラーの型定義を追加
}

const TableRow: React.FC<TableRowProps> = ({ title, content, onClick }) => {
  return (
    // 投稿内容のセルのみにクリックハンドラーを追加
    <tr>
      <TableCell>{title}</TableCell>
      <TableCell onClick={onClick}>{content}</TableCell>
    </tr>
  );
};

export default TableRow;