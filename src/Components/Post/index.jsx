import "./styles.css";
import { P } from "../P";

export const Postcard = ({ title, texts, id, cover }) => (
  <div className="post">
    <div className="timeline flex gap-2 items-center">
      <img src="https://storage.ko-fi.com/cdn/useruploads/tiny_efb123e7-f6d4-476c-9045-0428bd0d0677.png" className="w-10 rounded-full " alt="" />
      <div><span className="font-bold text-lg">Ko-fi</span><br/>{Math.round(Math.random()*23)}h</div>
        
    </div>
    <div className="post-content flex flex-col max-w-lg bg-indigo-900 bg-opacity-30 rounded-lg my-5">
      <div className="post-text p-4 ">
        <h2 className="font-bold text-lg ">
          {title} && {id}
        </h2>
        <br />
        {texts.map((p) => (
          <P key={title + Math.random() * 100} className="text-lg">
            {p}
          </P>
        ))}
        <br />
      </div>
      <img src={cover} alt={title} />

      <div className="p-4 flex gap-5">
        <div className="favorite flex">
          <i className="material-symbols-outlined text-xl">favorite</i>
          <span className="ml-1 font-bold text-xl ">{Math.round(Math.random() * 100) + 20}</span>
        </div>

        <div className="comments flex">
          <i className="material-symbols-outlined text-xl">chat</i>
          <span className="ml-1 font-bold text-xl ">{Math.round(Math.random() * 20)}</span>
        </div>

        <div className="share ">
          <i className="material-symbols-outlined text-2xl">share</i>
        </div>

        <div className="more ml-1">
          <i className="material-symbols-outlined text-3xl">more_horiz</i>
        </div>
      </div>
    </div>
  </div>

);
