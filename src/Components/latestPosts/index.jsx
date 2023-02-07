
const meses = ["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez",];

export const LatestPosts = ({ latests }) => (
  <>
    <span className="font-bold pb-5">Latest Posts</span>
    <div className="mt-5">
      {latests.map((post) => (<LatestPost img={post.img} text={post.text} key={post.id} />))}
    </div>
    <span className="w-full flex"><a href="#" className="mx-auto my-4 underline text-gray-300">See all</a></span>
  </>
);

const LatestPost = ({ img, text, id }) => (
  <div className="flex py-2">
    <img src={img} alt="" className="w-16 h-9 rounded-lg"/>
    <div className="px-2 items-baseline">
      <span>{text} && {id}</span>
      <br />
      <span className="text-sm text-gray-400">
        {Math.round(Math.random() * 31)} {meses[Math.round(Math.random() * 11)]}
      </span>
    </div>
  </div>
);

