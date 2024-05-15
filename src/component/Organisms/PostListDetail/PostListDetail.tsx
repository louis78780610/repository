import React, { useState } from 'react';
import Title from '../../Atoms/Title';
import Table from './Table';
import Pagination from '../../Molecules/Pagination';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';

const postsPerPage = 5;

const PostListDetail = () => {
  const totalPosts = useSelector((state: RootState) => state.post.posts.length);
  const totalPages = Math.ceil(totalPosts / postsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="w-full flex items-center justify-center pt-36">
      <div className="w-full h-2/3 pb-12 md:px-8 sm:px-20 lg:w-3/5 lg:py-16 sm:py-8 xl:w-3/5 2xl:w-3/5">
        <div className='py-12'>
          <Title title="投稿一覧画面" />
        </div>
        <div className="flex flex-col items-center md:px-24 xs:px-12">
          <Table currentPage={currentPage} postsPerPage={postsPerPage} />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default PostListDetail;