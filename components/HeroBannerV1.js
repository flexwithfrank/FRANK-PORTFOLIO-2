/* eslint-disable @next/next/no-img-element */

import ButtonV1 from "@/components/ButtonV1";

const styles = {
  justifyContent: "center",
  alignItems: "center",
  display: "flex",
  flexDirection: "column"
};

export default function HeroBannerV1() {
  return (
    <div className="relative mx-auto mt-8 px-8 lg:max-w-7xl lg:px-0">
      <div className="relative">
        <div className="absolute lg:left-1/2 top-0 m-8 w-32 lg:w-80">
          <video
            data-v-df76ad4d=""
            playsInline
            autoPlay
            loop
            decoding="async"
            src="https://live.springsummer.dk/media/uploads/Reel-v3.mp4#t=0.001"
            alt="Reel v3"
            preload="metadata"
            style={{ objectFit: "cover" }}></video>
        </div>
        <div className="pt-6">
          <img
            className="h-32 w-32 rounded-full"
            src="https://ik.imagekit.io/is20rnl48/DSC_5283%20(1).jpg?updatedAt=1709309781808"
            alt="image description"
          />
        </div>
        <p className="dm-sans-med mt-4 max-w-3xl text-xl text-[#ff3c00] lg:text-3xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Repellat dolores iure fugit totam iste obcaecati.
          Consequatur ipsa quod ipsum sequi culpa delectus, cumque id
          tenetur quibusdam, quos fuga minima.
        </p>
        <h2 className="brita tracking-loose impact mb-6 font-sans text-5xl font-bold uppercase tracking-tight text-[#ff3c00] sm:text-[9rem] sm:leading-none">
          LET'S CREATE SOMETHING
        </h2>
      </div>
    </div>
  );
}
