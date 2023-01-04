import { LatestPost } from "../latestPost";
import "./style.css";

export const LatestPosts = ({ latests }) => (
  <>
    <span className="font-bold pb-5">Latest Posts</span>
    <div className="mt-5">
      {latests.map((post) => (<LatestPost img={post.img} text={post.text} key={post.id} />))}
    </div>
    <span className="w-full flex"><a href="#" className="mx-auto my-4 underline text-gray-300">See all</a></span>
  </>
);
