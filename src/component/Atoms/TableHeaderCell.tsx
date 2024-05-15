// Atoms/TableHeaderCell.tsx
import React from 'react';

interface TableHeaderCellProps {
  header: string; // もしくは適切な型
}

const TableHeaderCell: React.FC<TableHeaderCellProps> = ({ header }) => {
  return <th className="border border-gray-500 px-4 py-2">
    {header}
    </th>;
};

export default TableHeaderCell;
