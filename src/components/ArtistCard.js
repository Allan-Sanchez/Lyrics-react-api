import React from "react";
import Tag from "../assets/img/tag.svg";

const ArtistCard = () => {
  return (
    <div>
      <div className="bg-pink-500 py-2 rounded">
        <h1 className="text-center text-white text-3xl">Artist's Information</h1>
      </div>
      <div className="relative">
        <img
          src="https://cdn.pixabay.com/photo/2016/02/19/11/19/computer-1209641_960_720.jpg"
          alt="programming"
        />
      <div className="absolute bottom-0 left-0">
        <div className="rounded bg-pink-500 w-32 py-2 flex justify-center items-center">
          <p className="w-2/3 text-center text-xl text-white">lorem</p>
          <span className="w-1/3 mx-auto">
            <img className="w-1/2" src={Tag} alt="tag" />
          </span>
        </div>
      </div>
      </div>
      <div className="bg-pink-100">
        <h2 className="text-center text-3xl text-gray-700">Lorem ipsum dolor sit.</h2>
        <div className="bg-pink-500 w-11/12 mx-auto  h-2"></div>
        <div className="p-8">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, quos illum, explicabo nulla facere dolores debitis aut expedita amet recusandae tempore porro hic impedit, saepe obcaecati temporibus ipsa quis. Itaque accusamus dolores nesciunt voluptates numquam vero eveniet deleniti esse suscipit, dolor exercitationem. Et quo architecto voluptas exercitationem, nostrum rerum quia in odit minima repellat atque expedita quod. Labore magni minima sed odio illo placeat deleniti eum, quidem cum. Eos iure cum commodi reprehenderit voluptates laboriosam perspiciatis, impedit possimus repellendus hic distinctio doloribus recusandae. Sequi quam quia maiores? A temporibus asperiores saepe quaerat mollitia, ipsa non aliquam id cupiditate, vitae nihil quod dignissimos est earum sapiente architecto repellendus libero reprehenderit. Dolores ullam assumenda quae itaque dicta! Voluptas nihil deleniti libero quisquam maxime earum adipisci dolorum nostrum architecto dolorem sint voluptate culpa, beatae perspiciatis exercitationem totam voluptatem aliquam. Repudiandae quaerat harum culpa? Doloremque eum libero delectus sapiente error sit nostrum? Rerum, atque.</p>
        </div>
      </div>
    </div>
  );
};

export default ArtistCard;
