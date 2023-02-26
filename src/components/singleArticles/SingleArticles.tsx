import Image from "next/image";
import articleImg from "../../../public/assets/images/articles/sl1.jpg";
import agentImage from "../../../public/assets/images/agents/ag2.png";

const SingleArticles = ({ articlesProperty }) => {
  const {
    title,
    type,
    image,
    price,
    location,
    area,
    beds,
    baths,
    status,
    advertised,
    posted,
    profile,
  } = articlesProperty;
  return (
    <div className="border border-gray-300 rounded-lg group hover:cursor-pointer hover:shadow-md">
      <div className="m-3 relative rounded-md z-10">
        <div className="relative overflow-hidden">
          <Image
            src={image}
            className="rounded-lg cursor-pointer group-hover:scale-110 group-hover:-rotate-1 transition-all duration-700 overflow-hidden"
            alt="it's a slider image"
          />
        </div>
        <div className="before:content-['*'] before:w-full before:h-full before:absolute before:top-0 before:left-0 before:bg-slate-600 before:opacity-[0.5] before:rounded-md "></div>
      </div>
      {/* card body */}
      <div className=" px-4 py-2">
        {/* property type */}
        <span className="text-sm font-normal text-main mb-3">{type}</span>
        {/* property title */}
        <h3 className="text-lg font-medium text-dark mb-3 hover:text-main transition-all cursor-pointer">
          {title}
        </h3>
      </div>
      {/* card footer */}
      <div className="border-t border-gray-300 px-4 py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {/* agent image */}
            <Image
              src={profile[0].image}
              width={45}
              height={45}
              alt="Agent photo"
              className="w-[45px] h-[45px] rounded-full mr-3"
            />

            <span className="text-sm font-normal text-gray-800 mr-3">
              {profile[0].name}
            </span>
          </div>
          <span className="text-sm font-normal text-gray-800 mr-3">
            {posted}
          </span>
        </div>
      </div>
    </div>
  );
};
export default SingleArticles;
