import { LatestPosts } from "../../../Components/latestPosts";
import { Posts } from "../../../Components/Posts";
import { featuredPosts, posts } from "../../../data";
import "./style.css";

export const AllPosts = () => (
  <article className="flex mx-auto container justify-center items-start gap-4 p-5">
    <section className="">
      <Posts posts={posts} />
    </section>

    <aside>
      <section className="latests bg-indigo-900 bg-opacity-30 rounded-xl ml-2 p-4">
        <LatestPosts latests={featuredPosts} />
      </section>
    </aside>
  </article>
);
