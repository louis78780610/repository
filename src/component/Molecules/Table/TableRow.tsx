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

// import React from 'react';
// import TableCell from '../../Atoms/TableCell';

// interface TableRowProps {
//   title: string;
//   content: string;
//   onClick: () => void; // クリックハンドラーの型定義を追加
// }

// const TableRow: React.FC<TableRowProps> = ({ title, content, onClick }) => {
//   return (
//     // コンポーネント全体をクリックしたときに onClick ハンドラーを呼び出す
//     <tr onClick={onClick}> 
//       <TableCell>{title}</TableCell>
//       <TableCell>{content}</TableCell>
//     </tr>
//   );
// };

// export default TableRow;
