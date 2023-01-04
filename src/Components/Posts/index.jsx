import { Postcard } from "../Post";

export const Posts = ({ posts }) => (
  <div className="posts">
    { posts.map(post => (
      <Postcard
      title={post.title}
      cover={post.cover}
      texts={post.texts}
      key={post.id} 
      id={post.id}
      />
      ))}
  </div>
);