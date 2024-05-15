// Table.tsx
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import TableRow from '../../Molecules/Table/TableRow';
import { RootState } from '../../../redux/store';

interface TableProps {
  currentPage: number;
  postsPerPage: number;
}

const Table: React.FC<TableProps> = ({ currentPage, postsPerPage }) => {
  const navigate = useNavigate();

  const currentPagePosts = useSelector((state: RootState) => {
    const startIndex = (currentPage - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    return state.post.posts.slice(startIndex, endIndex);
  });

  const handlePostClick = (_post: any) => {
    navigate(`/PostsDetailPage`);
  };

  return (
    <table className="border border-gray-300 w-full">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 w-1/5 border border-gray-300 border-2">タイトル</th>
          <th className="p-2 border border-gray-300 border-2">投稿内容</th>
        </tr>
      </thead>
      <tbody>
        {currentPagePosts.map((post: any, index: number) => (
          <TableRow 
            key={index} 
            title={post.title} 
            content={post.content} 
            onClick={() => handlePostClick(post)} // 投稿内容をクリックしたときに handlePostClick を呼び出す
          />
        ))}
      </tbody>
    </table>
  );
};

export default Table;