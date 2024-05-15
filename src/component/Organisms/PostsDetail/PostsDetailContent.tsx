import { useSelector } from 'react-redux';
import Title from "../../Atoms/Title";
import PostDetailTextArea from '../../Atoms/PostDetailTextArea';
import { RootState } from '../../../redux/store';


const PostsDetailContent: React.FC = () => {

  const postName = useSelector((state: RootState) => state.form.formData.name);
  const posts = useSelector((state: RootState) => state.post.posts);
  // 最新の投稿内容を取得
  const latestPost = posts[posts.length - 1];
  const postTitle = latestPost?.title || '';
  const postContent = latestPost?.content || '';

  return(
    <div className="h-screen w-full flex items-center justify-center">
      <div className="w-2/5 p-30 h-2/3 md:w-full md:px-8 lg:pt-16 sm:pt-8 sm:w-3/5">
      <div className="pb-7">
      <Title title="投稿詳細画面"/>
      </div>
      <div className='my-4'>
      <PostDetailTextArea value={`${postName}\n${postTitle}\n${postContent}`} name={''} />
      </div>
      </div>
    </div>
  );
};

export default PostsDetailContent;