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
        <div className="absolute lg:right-40 bottom-0 lg:top-0 m-8 w-32 lg:w-80 right-0">
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
            className="h-32 w-32 rounded-full transform hover:scale-110 transition-transform duration-500 ease-in-out"
            src="https://ik.imagekit.io/is20rnl48/DSC_5283%20(1).jpg?updatedAt=1709309781808"
            alt="image description"
          />
        </div>
        <p className="dm-sans-med mt-4 max-w-3xl text-xl text-[#ff3c00] lg:text-3xl">
        Welcome to my digital frontier! As a passionate web and email developer, I thrive on transforming concepts into captivating online experiences. With a keen eye for detail and a commitment to seamless functionality, I am dedicated to bringing your vision to life.
        </p>
        <h2 className="brita tracking-loose impact mb-6 font-sans text-5xl font-bold uppercase tracking-tight text-[#ff3c00] sm:text-[9rem] sm:leading-none">
          LETS CREATE SOMETHING TOGETHER.
        </h2>
      </div>
    </div>
  );
}
